import React from "react";

function Message({ type, text }: { type: string; text: string }) {
  return (
    <div
      className={`flex min-w-[154px] max-w-[580px] p-[12px_16px] items-end gap-2 rounded-[10px] ${
        type === "incoming" ? "bg-[#F1F4F5]" : "bg-[#D9E8FF]"
      }`}
    >
      <p className="text-[#232F40] font-normal text-[14px] leading-[20px]">
        {text}
      </p>
    </div>
  );
}

export default Message;
