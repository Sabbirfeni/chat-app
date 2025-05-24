import SenderImg from "@/public/images/Avatar.png";
import { Message } from "../types/message";

const messages: Message[] = [
  {
    id: "m1",
    type: "incoming",
    text: "Hey team, I’ve been having a weird issue 😕",
    timestamp: new Date("2025-05-24T14:00:00"),
    sender: {
      name: "Jacob Jhones",
      avatar: SenderImg.src,
    },
  },
  {
    id: "m2",
    type: "incoming",
    text: "Every time I try to upload a CSV file to import contacts, it gets stuck at 80% and never finishes.",
    timestamp: new Date("2025-05-24T14:00:50"),
    sender: {
      name: "Jacob Jhones",
      avatar: SenderImg.src,
    },
  },
  {
    id: "m3",
    type: "outgoing",
    text: "Hmm, that sounds frustrating. Have you tried clearing the cache or checking the console logs?",
    timestamp: new Date("2025-05-24T14:02:30"),
    sender: {
      name: "Alex Morgan",
      avatar: SenderImg.src,
    },
  },
  {
    id: "m4",
    type: "outgoing",
    text: "Sometimes large CSVs trigger browser memory issues.",
    timestamp: new Date("2025-05-24T14:02:50"),
    sender: {
      name: "Alex Morgan",
      avatar: SenderImg.src,
    },
  },
  {
    id: "m5",
    type: "incoming",
    text: "Interesting, I didn't think of that. I'll check now.",
    timestamp: new Date("2025-05-24T14:05:10"),
    sender: {
      name: "Jacob Jhones",
      avatar: SenderImg.src,
    },
  },
  {
    id: "m6",
    type: "incoming",
    text: "Is there any recommended size for CSV files?",
    timestamp: new Date("2025-05-24T14:05:50"),
    sender: {
      name: "Jacob Jhones",
      avatar: SenderImg.src,
    },
  },
  {
    id: "m7",
    type: "outgoing",
    text: "We usually recommend keeping it under 5MB if possible.",
    timestamp: new Date("2025-05-24T14:07:00"),
    sender: {
      name: "Alex Morgan",
      avatar: SenderImg.src,
    },
  },
  {
    id: "m8",
    type: "outgoing",
    text: "Larger files can work, but performance can vary by browser and device.",
    timestamp: new Date("2025-05-24T14:07:40"),
    sender: {
      name: "Alex Morgan",
      avatar: SenderImg.src,
    },
  },
  {
    id: "m9",
    type: "incoming",
    text: "Got it. Also, should I enable chunked uploads for better reliability?",
    timestamp: new Date("2025-05-24T14:09:20"),
    sender: {
      name: "Jacob Jhones",
      avatar: SenderImg.src,
    },
  },
  {
    id: "m10",
    type: "outgoing",
    text: "Yes, that’s a good idea especially for unstable networks.",
    timestamp: new Date("2025-05-24T14:10:00"),
    sender: {
      name: "Alex Morgan",
      avatar: SenderImg.src,
    },
  },
];

export default messages;
