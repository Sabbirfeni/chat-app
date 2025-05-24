import React from "react";
import MessageRecipentInfo from "./MessageRecipentInfo";
import Button from "../../common/Button";
import MessageTagList from "./MessageTagList";

function MessageNavigation() {
  return (
    <div className="sticky top-0 bg-white z-30 flex flex-col items-start gap-2 px-[18px] py-2 self-stretch border-b border-[#DAE0E4]">
      <div className="flex items-center gap-6 self-stretch">
        <MessageRecipentInfo />
        <Button iconName="check-circle" lable="Close" className="text-white" />
      </div>
      <MessageTagList />
    </div>
  );
}

export default MessageNavigation;
