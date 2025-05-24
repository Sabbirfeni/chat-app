import React from "react";
import TextArea from "./TextArea";
import { Message } from "@/app/types/message";

type MessageInputBoxProps = {
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
};

function MessageInputBox({ setMessages }: MessageInputBoxProps) {
  return (
    <div className="flex flex-col items-start gap-[10px] self-stretch">
      <div className="flex flex-col justify-end items-center self-stretch px-4 pb-4 bg-white">
        <div className="flex flex-col items-start gap-2 pt-1 self-stretch">
          <TextArea setMessages={setMessages} />
        </div>
      </div>
    </div>
  );
}
export default MessageInputBox;
