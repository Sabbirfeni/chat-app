import { GroupedMessage, Message } from "../types/message";

function groupMessages(messages: Message[]): GroupedMessage[] {
  if (messages.length === 0) return [];

  const groups: GroupedMessage[] = [];

  for (let i = 0; i < messages.length; i++) {
    const currentMsg = messages[i];
    const lastGroup = groups[groups.length - 1];

    const shouldGroup =
      lastGroup &&
      currentMsg.sender.name === lastGroup.sender.name &&
      currentMsg.type === lastGroup.type &&
      new Date(currentMsg.timestamp).getTime() -
        new Date(lastGroup.timestamp).getTime() <
        60 * 1000 &&
      new Date(currentMsg.timestamp).getTime() >
        new Date(lastGroup.timestamp).getTime(); // optional safety

    if (shouldGroup) {
      lastGroup.texts.push(currentMsg.text);
      // ❌ Do NOT update the timestamp
    } else {
      groups.push({
        id: currentMsg.id,
        type: currentMsg.type,
        sender: currentMsg.sender,
        timestamp: currentMsg.timestamp, // this will stay fixed
        texts: [currentMsg.text],
      });
    }
  }

  return groups;
}

export { groupMessages };
