export type Message = {
  id: string;
  type: "incoming" | "outgoing";
  sender: { name: string; avatar: string };
  timestamp: Date;
  text: string;
};

export type GroupedMessage = {
  id: string;
  type: "incoming" | "outgoing";
  sender: { name: string; avatar: string };
  timestamp: Date;
  texts: string[];
};
