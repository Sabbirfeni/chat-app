import icons from "@/app/lib/icons";
import Image from "next/image";
import React from "react";

type IconKey = keyof typeof icons;

interface ButtonProps {
  iconName?: IconKey;
  lable: string;
  className?: string;
  handleAction?: () => void;
}

function Button({
  iconName,
  lable,
  className = "",
  handleAction,
}: ButtonProps) {
  return (
    <button
      onClick={handleAction}
      className={`flex px-3 py-1.5 justify-center items-center gap-2 rounded-[10px] cursor-pointer bg-[#A946BA] ${className}`}
    >
      {iconName && (
        <Image src={icons[iconName]} alt="icon" width={20} height={20} />
      )}
      <span className="text-sm font-semibold leading-[20px]">{lable}</span>
    </button>
  );
}

export default Button;
