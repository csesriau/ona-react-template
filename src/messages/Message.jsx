function Message({ id, author, text }) {
  const handleDelete = (id) => {
    console.log(id);
  };

  return (
    <div className="message">
      <p>
        {author} à dit « {text} »{" "}
        <button onClick={(e) => handleDelete(id)}>DEL</button>
      </p>
    </div>
  );
}

export default Message;
