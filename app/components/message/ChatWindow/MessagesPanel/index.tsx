import React, { useEffect, useRef } from "react";
import MessagePanelHeader from "./MessagePanelHeader";
import MessageContainer from "./MessageContainer";
import { Message } from "@/app/types/message";

function MessagesPanel({ messages }: { messages: Message[] }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: containerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  return (
    <div
      ref={containerRef}
      className="flex flex-col overflow-y-auto hide-scrollbar items-start gap-[14px] flex-[1_0_0] self-stretch"
    >
      <MessagePanelHeader />
      <MessageContainer messages={messages} />
    </div>
  );
}

export default MessagesPanel;
