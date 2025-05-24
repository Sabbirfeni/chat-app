import React from "react";
import Avatar from "../../../common/Avatar";
import Image from "next/image";
import MessengerImg from "@/public/images/Messenger.png";
import MessageLog from "./MessageLog";

function MessagePanelHeader() {
  return (
    <div className="flex flex-col items-start gap-5 self-stretch">
      <div className="flex items-center flex-wrap gap-5 px-[18px] py-[10px] self-stretch">
        <Avatar
          userName="Jacob Jones"
          className="min-w-[88px] min-h-[88px] px-[2px] py-[4px] text-[24px]"
        />
        <div className="flex flex-col items-start gap-[10px]">
          <p className="text-[#232F40] text-[18px] font-semibold leading-[26px]">
            Jacob Jones started the chat
          </p>
          <div className="flex items-center gap-[7px]">
            <Image
              src={MessengerImg}
              width={22}
              height={22}
              className="w-[22px] h-[22px]"
              alt="messenger"
            />
            <div className="w-[340px] text-[#425066] text-[14px] font-normal leading-[20px]">
              Joined via Messenger
            </div>
          </div>
        </div>
      </div>
      <MessageLog />
    </div>
  );
}

export default MessagePanelHeader;
