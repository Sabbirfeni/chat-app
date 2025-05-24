"use client";

import React, { useState } from "react";
import MessagesPanel from "./MessagesPanel";
import MessageInputBox from "./MessageInputBox";
import dbMessages from "@/app/db/messages";
import { Message } from "@/app/types/message";

function ChatWindow() {
  const [messages, setMessages] = useState<Message[]>(dbMessages);

  return (
    <>
      <MessagesPanel messages={messages} />
      <MessageInputBox setMessages={setMessages} />
    </>
  );
}

export default ChatWindow;
