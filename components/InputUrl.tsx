import React, { ChangeEvent, FormEvent, useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Modal from "./Modal";
import { IoMdClose } from "react-icons/io";
import CopyBoard from "./CopyBoard";

async function createUrl(url: string) {
  const res = await fetch("/api/shortUrl", {
    method: "POST",
    body: JSON.stringify({ url }),
  });

  if (!res.ok) {
    throw new Error("No hice el fetch");
  }

  return res.json();
}

const InputUrl = () => {
  const [error, setError] = useState<string | null>();
  const [inputLink, setInputLink] = useState<string | null>();
  const [modalContent, setModalContent] = useState<string | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inputLink) {
      const { data, statusCode, error } = await createUrl(inputLink);

      if (statusCode === 200) {
        setModalContent(data.code);
        setError(null);
        setModalVisible(true);
      } else {
        setError(error.message);
      }
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setInputLink(e.target.value);

  const closeModal = () => {
    setModalVisible(false);
    setModalContent(null);
  };

  return (
    <>
      <form action="POST" onSubmit={handleSubmit}>
        <div className="flex max-w-sm items-center flex-center min-h-[54px] w-full overflow-hidden rounded-lg bg-gray-50 px-1.5 border-2 border-zinc-800/25">
          <Input
            type="url"
            onChange={handleChange}
            className={`input-field dark:text-black ${
              error && "border-rose-500 border-2"
            }`}
            placeholder="Ingresa la URL"
          />

          {error && <div className="text-sm text-rose-500">{error}</div>}

          <Button type="submit" className="p-6 justify-center">
            Acortar
          </Button>
        </div>
      </form>

      <Modal visible={modalVisible} onClose={closeModal}>
        <div className="flex w-full flex-col">
          <IoMdClose
            onClick={closeModal}
            className="text-lg cursor-pointer place-self-end"
          />
          <div className="p-bold-16 pl-2">Aqui tienes tu URL</div>
          <CopyBoard code={modalContent} />
        </div>
      </Modal>
    </>
  );
};

export default InputUrl;
