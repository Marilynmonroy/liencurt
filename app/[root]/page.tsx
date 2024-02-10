"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRef, useState } from "react";

export default function Home() {
  const urlRef = useRef<HTMLInputElement | null>(null);
  const [shortUrl, setShortUrl] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const url = urlRef.current?.value;

    fetch("/api/shortUrl", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url }),
    })
      .then((res) => res.json())
      .then((data: any) => {
        console.log(data);
        setShortUrl(data.shortUrl);
      });
  };

  return (
    <>
      <section className="bg-dotted-pattern bg-contain md:py-10 flex-center">
        <div className="wrapper gap-10 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col flex-center gap-8">
            <h1 className="h1-bold flex-center flex-col md:flex-row">
              Enlaces
              <span className="bg-[#007BFF] rounded-md p-4 m-2 text-white dark:text-black">
                {" "}
                ágiles
              </span>{" "}
              y destinos
              <span className="bg-[#52D726] rounded-md p-4 m-2 text-white dark:text-black">
                directos.
              </span>
            </h1>
          </div>
          <div className="wrapper flex flex-col flex-center gap-8">
            <form action="POST" onSubmit={handleSubmit}>
              <div className="flex max-w-sm items-center flex-center min-h-[54px] w-full overflow-hidden rounded-lg bg-gray-50 px-1.5">
                <Input
                  type="url"
                  ref={urlRef}
                  className="input-field dark:text-black"
                  placeholder="Copie la URL"
                />
                <Button type="submit" className="p-6 justify-center">
                  Acortar
                </Button>
              </div>{" "}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

/* <AlertDialogDescription>soy: {shortUrl}</AlertDialogDescription> */
