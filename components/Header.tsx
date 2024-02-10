import Link from "next/link";
import React from "react";
import NavItems from "./NavItems";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="w-full">
          <h1 className="text-3xl font-extrabold color dark:text-primary-foreground ">
            LienCurt
          </h1>
        </Link>

        <nav className="md:flex-between w-full max-w-xs flex justify-start">
          <NavItems />
        </nav>
      </div>
    </header>
  );
};

export default Header;
