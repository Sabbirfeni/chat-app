import { Message } from "@/app/types/message";
import React, { useEffect, useRef } from "react";

function MessagePanelFooter({ messages }: { messages: Message[] }) {
  const bottomRef = useRef<HTMLDivElement | null>(null);

  // Scrolls to the bottom when messages change
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Invisible div used as scroll target
  return <div ref={bottomRef} className="w-0 h-0 -mt-4" />;
}

export default MessagePanelFooter;
