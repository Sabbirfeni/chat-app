import Image from "next/image";
import React from "react";
import TagImage from "@/public/icons/tag.png";

interface MessageTagProp {
  showIcon?: boolean;
  tagName: string;
}

function MessageTag({ showIcon = true, tagName }: MessageTagProp) {
  return (
    <div className="flex h-7 max-w-[200px] px-2 py-1 items-center gap-1 rounded-[7px] bg-white">
      {showIcon && (
        <Image
          src={TagImage.src}
          alt="Icon"
          width={14}
          height={14}
          className="w-[14px] h-[14px]"
        />
      )}
      <p className="max-w-[164px] overflow-hidden whitespace-nowrap text-ellipsis text-[#425066] text-[13px] font-normal leading-[20px]">
        {tagName}
      </p>
    </div>
  );
}

export default MessageTag;
