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
  };

  return (
    <div className="flex">
      <form
        className="max-w-[600px] w-full justify-center my-4 mx-auto"
        onSubmit={handleSubmit}
      >
        <Input
          type="text"
          className=""
          value={`${process.env.NEXT_PUBLIC_API_URL}/api/${code}`}
          ref={inputRef}
          readOnly
        />
        <Button className="mt-2" size={"sm"}>
          Copiar URL{" "}
          {isCopy && (
            <div className="absolute top-16 left-2 p-2 rounded-lg text-sm">
              Url copiado
            </div>
          )}
        </Button>
      </form>
    </div>
  );
};

export default CopyBoard;
