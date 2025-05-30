"use client";
import React, { useRef, useState } from "react";
import { Message } from "@/app/types/message";
import SenderImg from "@/public/images/Avatar.png";
import MessageActions from "./MessageActions";

type MessageInputBoxProps = {
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
};

function TextArea({ setMessages }: MessageInputBoxProps) {
  const [message, setMessage] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const handleSendMessage = () => {
    const trimmed = message.trim();
    if (!trimmed) return;
    const newMessage: Message = {
      id: crypto.randomUUID(),
      type: "outgoing",
      text: trimmed,
      timestamp: new Date(),
      sender: {
        name: "Alex Morgan",
        avatar: SenderImg.src,
      },
    };

    setMessages((prev) => [...prev, newMessage]);
    setMessage("");

    // Reset textarea height
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }
  };

  const handleBoxHeight = () => {
    const el = textareaRef.current;
    if (el) {
      el.style.height = "auto";
      const newHeight = Math.min(el.scrollHeight, 100);
      el.style.height = `${newHeight}px`;
      el.style.overflowY = el.scrollHeight > 100 ? "auto" : "hidden";
    }
  };

  return (
    <div
      className={`flex flex-col items-start gap-[15px] p-[12px_8px_8px_8px] self-stretch rounded-[16px] border ${
        message ? "border-[#A946BA]" : "border-[#DAE0E4]"
      } bg-white`}
    >
      {/* Message input box */}
      <textarea
        ref={textareaRef}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onInput={handleBoxHeight}
        rows={1}
        placeholder="Write message"
        className="flex justify-start items-start gap-[10px] px-[8px] self-stretch custom-scrollbar text-[#425066] font-normal text-[14px] leading-[20px] placeholder:text-[#7B8594] focus:outline-none resize-none"
        style={{ maxHeight: "100px" }}
      />

      <MessageActions message={message} handleSendMessage={handleSendMessage} />
    </div>
  );
}

export default TextArea;
