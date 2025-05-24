import React from "react";
import MessagePanelHeader from "./MessagePanelHeader";
import MessageContainer from "./MessageContainer";
import { Message } from "@/app/types/message";
import MessagePanelFooter from "./MessagePanelFooter";

function MessagesPanel({ messages }: { messages: Message[] }) {
  return (
    <div className="flex flex-col overflow-y-auto hide-scrollbar items-start gap-[14px] flex-[1_0_0] self-stretch">
      <MessagePanelHeader />
      <MessageContainer messages={messages} />
      <MessagePanelFooter messages={messages} />
    </div>
  );
}

export default MessagesPanel;
