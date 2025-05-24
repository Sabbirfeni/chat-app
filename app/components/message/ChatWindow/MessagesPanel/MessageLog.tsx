import React from "react";

function MessageLog() {
  return (
    <div className="flex flex-col items-start gap-4 self-stretch">
      <div className="relative flex flex-col justify-center items-center gap-[10px] px-[26px] self-stretch">
        <div className="absolute top-[15px] w-full h-px bg-[#ECECF2]"></div>
        <div className="z-20 flex justify-center items-center gap-[10px] px-[14px] py-[6px] rounded-[55px] border border-[#DAE0E4] bg-white">
          <p className="text-[#425066] text-center text-[12px] font-normal leading-[18px]">
            Session 1 - Nov 17, 2023
          </p>
        </div>
      </div>
    </div>
  );
}

export default MessageLog;
