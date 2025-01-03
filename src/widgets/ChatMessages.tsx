import React from "react";
import { useStore } from "effector-react";
import { $chatMessages } from "../pages/chat/model/chat";

export const ChatMessages: React.FC = () => {
  const messages = useStore($chatMessages);

  return (
    <div className="chat-messages">
      {messages.map((msg, idx) => (
        <div key={idx} className="message">
          {msg}
        </div>
      ))}
    </div>
  );
};
