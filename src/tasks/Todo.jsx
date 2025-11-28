function Todo({ id, date, title, description, status }) {
  const handleOnClick = (e) => {
    //
    console.log(e.target.value);
  };

  return (
    <div className="todo">
      {date} {title} - {description} ({status}){" "}
      {status === "TODO" ? (
        <input type="button" value="OPEN" onClick={handleOnClick} />
      ) : status === "DOING" ? (
        <input type="button" value="CLOSE" onClick={handleOnClick} />
      ) : (
        <></>
      )}
    </div>
  );
}

export default Todo;
