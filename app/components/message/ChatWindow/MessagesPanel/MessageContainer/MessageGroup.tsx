import { GroupedMessage } from "@/app/types/message";
import React from "react";
import MessageSender from "./MessageSender";
import Message from "./Message";

function MessageGroup({ group }: { group: GroupedMessage }) {
  return (
    <div
      key={group.id}
      className="flex flex-col items-start gap-[14px] self-stretch relative"
    >
      <div
        className={`flex items-start gap-2 self-stretch ${
          group.type === "incoming"
            ? "pr-[68px] pt-[21px] pb-[16px]"
            : "pl-[68px] pr-[32px] pt-[21px] pb-[16px]"
        }`}
      >
        <div
          className={`flex flex-col ${
            group.type === "incoming" ? "items-start" : "items-end"
          } gap-1 flex-[1_0_0]`}
        >
          {group.texts.map((text, idx) => (
            <Message key={idx} type={group.type} text={text} />
          ))}
        </div>
        <MessageSender group={group} />
      </div>
    </div>
  );
}

export default MessageGroup;
