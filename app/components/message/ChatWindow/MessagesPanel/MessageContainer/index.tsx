import React from "react";
import { groupMessages } from "@/app/utils/message";
import MessageGroup from "./MessageGroup";
import { Message } from "@/app/types/message";

function MessageContainer({ messages }: { messages: Message[] }) {
  const grouped = groupMessages(messages);

  return (
    <div className="flex flex-col items-start px-4 self-stretch">
      <div className="flex flex-col items-start gap-1 self-stretch">
        {grouped.map((group) => (
          <MessageGroup key={group.id} group={group} />
        ))}
      </div>
    </div>
  );
}

export default MessageContainer;
