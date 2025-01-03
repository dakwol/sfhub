import React, { useState } from "react";
import { addMessage } from "../pages/chat/model/chat";

export const ChatInput: React.FC = () => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim()) {
      addMessage(message);
      setMessage("");
    }
  };

  return (
    <div className="chat-input">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Введите сообщение..."
      />
      <button onClick={handleSend}>Отправить</button>
    </div>
  );
};
