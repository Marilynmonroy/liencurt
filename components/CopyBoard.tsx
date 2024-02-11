"use client";

import React, { FormEvent, useRef, useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

type CopyBoardProps = {
  code: string | null;
};

const CopyBoard = ({ code }: CopyBoardProps) => {
  const [isCopy, setIsCopy] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inputRef.current) {
      navigator.clipboard.writeText(inputRef.current.value);
      setIsCopy(true);
    } else {
      setIsCopy(false);
    }
  };

  return (
    <div className="flex">
      <form
        className="max-w-[600px] w-full justify-center my-4 mx-auto"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col items-center">
          <Input
            type="text"
            className="input-field dark:text-zinc-900"
            value={`${process.env.NEXT_PUBLIC_API_URL}/api/${code}`}
            ref={inputRef}
            readOnly
          />

          <Button className="mt-5 p-5" size={"sm"}>
            {isCopy ? "Url copiado!" : "Copiar URL"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CopyBoard;
