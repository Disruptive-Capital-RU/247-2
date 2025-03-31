import React from "react";

interface ChatBubbleProps {
  message: string;
  from: "client" | "assistant";
}

export function ChatBubble({ message, from }: ChatBubbleProps) {
  return (
    <div
      className={`p-3 rounded-2xl max-w-[85%] ${
        from === "assistant"
          ? "bg-neutral-200 self-start"
          : "bg-black text-white self-end"
      }`}
    >
      {message}
    </div>
  );
}
