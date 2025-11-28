import { useState } from "react";

function MessageForm(props) {
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onMessageSubmit({ author: author.trim(), text: text.trim() });

    setAuthor("");
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      Nouveau message{" "}
      <input
        type="text"
        id="message"
        placeholder="Qui"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />{" "}
      <input
        type="text"
        id="author"
        placeholder="Quoi"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />{" "}
      <input type="submit" value="Publish" />
    </form>
  );
}

export default MessageForm;
