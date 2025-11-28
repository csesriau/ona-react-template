function Todo({ id, date, title, description, status }) {
  return (
    <div className="todo">
      #{id}&nbsp;{date} {title} - {description} ({status})
    </div>
  );
}

export default Todo;
