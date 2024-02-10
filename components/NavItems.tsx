"use client";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { ModeToggle } from "./ModeToggle";

const NavItems = () => {
  return (
    <ul className="flex w-full flex-col items-center gap-5">
      <ModeToggle />
    </ul>
  );
};

export default NavItems;
