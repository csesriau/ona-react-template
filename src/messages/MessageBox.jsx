import { useState } from "react";

import MessageList from "./MessageList";
import MessageForm from "./MessageForm";

function MessageBox() {
  const [messages, setMessages] = useState([]);

  const handleMessageSubmit = (m) => {
    setMessages([
      ...messages,
      { id: messages.length + 1, author: m.author, text: m.text },
    ]);
  };

  return (
    <div className="messageBox">
      <h1>Messages</h1>
      <MessageList messages={messages} />
      <MessageForm onMessageSubmit={handleMessageSubmit} />
    </div>
  );
}

export default MessageBox;
