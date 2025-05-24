import { GroupedMessage } from "@/app/types/message";
import React from "react";
import SenderAvatar from "./SenderAvatar";
import SenderInfo from "./SenderInfo";

function MessageSender({ group }: { group: GroupedMessage }) {
  return (
    <div
      className={`flex h-8 ${
        group.type === "outgoing" ? "right-0" : "left-0"
      } justify-end gap-1 absolute top-0`}
    >
      <div className="flex items-start gap-2 rounded-lg">
        {/* Name + Time */}
        <SenderInfo group={group} />

        {/* Avatar (only if outgoing) */}
        {group.type === "outgoing" && (
          <SenderAvatar avatar={group.sender.avatar} />
        )}
      </div>
    </div>
  );
}

export default MessageSender;
