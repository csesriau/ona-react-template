import Todo from "./Todo";

function TodoList(props) {
  const todoItems = props.tasks.map((task) => {
    return (
      <Todo
        key={task.id}
        id={task.id}
        date={task.date}
        title={task.title}
        description={task.description}
        status={task.status}
      />
    );
  });
  return (
    <div className="todolist">
      <h3>Liste des tâches</h3>
      <input type="button" value="Refresh" onClick={props.onRefreshList} />
      {todoItems}
    </div>
  );
}

export default TodoList;
