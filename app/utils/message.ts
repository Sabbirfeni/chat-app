import { GroupedMessage, Message } from "../types/message";

//  Check if two messages should be grouped together.
function canGroupMessages(
  currentMsg: Message,
  lastGroup: GroupedMessage
): boolean {
  const currentTime = new Date(currentMsg.timestamp).getTime();
  const lastTime = new Date(lastGroup.timestamp).getTime();

  const isSameSender = currentMsg.sender.name === lastGroup.sender.name;
  const isSameType = currentMsg.type === lastGroup.type;
  const isWithinOneMinute = currentTime - lastTime < 60 * 1000;
  const isAfterLast = currentTime > lastTime;

  return isSameSender && isSameType && isWithinOneMinute && isAfterLast;
}

// Create a new grouped message from a single message.
function createNewGroup(msg: Message): GroupedMessage {
  return {
    id: msg.id,
    type: msg.type,
    sender: msg.sender,
    timestamp: msg.timestamp,
    texts: [msg.text],
  };
}

// Group messages based on sender, type, and timestamp proximity.
function groupMessages(messages: Message[]): GroupedMessage[] {
  if (messages.length === 0) return [];

  const groups: GroupedMessage[] = [];

  for (const currentMsg of messages) {
    const lastGroup = groups[groups.length - 1];

    if (lastGroup && canGroupMessages(currentMsg, lastGroup)) {
      lastGroup.texts.push(currentMsg.text);
    } else {
      groups.push(createNewGroup(currentMsg));
    }
  }

  return groups;
}

export { groupMessages };
