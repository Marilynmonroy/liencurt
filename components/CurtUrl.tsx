import React from "react";
import { IoMdClose } from "react-icons/io";
import { Button } from "./ui/button";

type curtUrlProps = {
  content?: () => void;
};

const CurtUrl = (props: curtUrlProps) => {
  return <div className="flex w-full">{props.content}</div>;
};

export default CurtUrl;
