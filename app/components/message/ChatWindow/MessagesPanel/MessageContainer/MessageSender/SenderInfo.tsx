import { GroupedMessage } from "@/app/types/message";
import React from "react";

function SenderInfoText({ group }: { group: GroupedMessage }) {
  const time = group.timestamp
    .toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    })
    .toUpperCase();

  const infoText =
    group.type === "outgoing"
      ? `${time} • ${group.sender.name}`
      : `${group.sender.name} • ${time}`;

  return (
    <div className="flex pt-[2px] justify-center items-center gap-[10px]">
      <span className="text-[#6C7584] text-[11px] font-medium leading-[16px]">
        {infoText}
      </span>
    </div>
  );
}

export default SenderInfoText;
