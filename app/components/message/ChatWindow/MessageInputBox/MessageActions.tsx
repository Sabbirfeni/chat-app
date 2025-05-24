import React from "react";
import Button from "@/app/components/common/Button";

type MessageActionsProps = {
  message: string;
  handleSendMessage: () => void;
};

function MessageActions({ message, handleSendMessage }: MessageActionsProps) {
  return (
    <div className="flex pt-2 items-center gap-3 self-stretch rounded-[16px]">
      <div className="flex items-center gap-0.5 flex-1"></div>
      <div className="flex items-center gap-[15px]">
        <div className="flex items-start">
          {/* Message send button */}
          <Button
            iconName={message ? "paper-airplane" : "paper-airplane-muted"}
            lable="Send"
            className={
              message ? "bg-[#A946BA] text-white" : "bg-white text-[#44546F66]"
            }
            handleAction={handleSendMessage}
          />
        </div>
      </div>
    </div>
  );
}

export default MessageActions;
