import Message from "./Message.jsx";

function MessageList(props) {
  const messagesElements = props.messages.map((m) => {
    return <Message key={m.id} id={m.id} author={m.author} text={m.text} />;
  });
  return <div className="messageList">{messagesElements}</div>;
}

export default MessageList;
