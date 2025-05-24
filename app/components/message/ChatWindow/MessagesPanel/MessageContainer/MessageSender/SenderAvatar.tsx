import Image from "next/image";
import React from "react";

function SenderAvatar({ avatar }: { avatar: string }) {
  return (
    <div className="flex pt-0.5 items-center gap-2.5">
      <div className="flex justify-center items-start gap-[3px]">
        <Image
          src={avatar}
          width={24}
          height={24}
          className="w-6 h-6 rounded-full"
          alt="avatar"
        />
      </div>
    </div>
  );
}

export default SenderAvatar;
