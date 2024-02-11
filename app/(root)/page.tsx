"use client";
import InputUrl from "@/components/InputUrl";

export default function Home() {
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
            <InputUrl />
          </div>
        </div>
      </section>
    </>
  );
}
