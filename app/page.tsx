import MessageNavigation from "./components/message/MessageNavigation";
import ChatWindow from "./components/message/ChatWindow";

export default function MessagePage() {
  return (
    <div className="flex flex-col items-start gap-5 flex-[1_0_0] self-stretch">
      <MessageNavigation />
      <ChatWindow />
    </div>
  );
}
