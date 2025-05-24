import React from "react";
import MessageTag from "./MessageTag";

const tags = [
  "important",
  "important valuable customer",
  "VIP",
  "SCAM",
  "new",
  "urgent",
  "pending",
  "completed",
  "high priority",
];

const restTags = tags.length - 4;

function MessageTagList() {
  return (
    <div className="flex flex-col items-start gap-3 self-stretch bg-white">
      <div className="flex items-start content-start gap-2 self-stretch flex-wrap">
        {tags.slice(0, 4).map((tag, idx) => (
          <MessageTag key={`${tag}-${idx}`} tagName={tag} />
        ))}

        {/* the number of rest tags */}
        {restTags > 0 && (
          <MessageTag showIcon={false} tagName={`${restTags}+`} />
        )}
      </div>
    </div>
  );
}

export default MessageTagList;
