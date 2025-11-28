import { useState, useEffect } from "react";

import TodoFilters from "./TodoFilters";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoStats from "./TodoStats";

const URL_API =
  "https://3000--019abeb9-d896-7827-ad59-70c1380c7215.eu-central-1-01.gitpod.dev/tasks";

function getTasks() {
  fetch(URL_API)
    .then((response) => {
      return response.json();
    })
    .catch((e) => {
      console.log("Parse failed ", e);
      return [];
    });
}

function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [filters, setFilters] = useState({ status: [], begin: "", end: "" });

  useEffect(() => {
    setTasks(getTasks());
  }, []);

  const handleTodoFormSubmit = (task) => {
    setTasks([
      ...tasks,
      {
        id: tasks.length + 1,
        date: new Date().toISOString().split("T")[0],
        title: task.title,
        description: task.description,
        status: "TODO",
      },
    ]);
  };

  const handleFilterChange = (status, begin, end) => {
    setFilters({ status: status, begin: begin, end: end });
  };

  const applyFilter = (filters, tasks) => {
    return tasks.filter(
      (task) =>
        filters.status.length == 0 || filters.status.includes(task.status)
    );
  };

  return (
    <div className="container text-center">
      <div className="row align-items-start">
        <div className="col-4">
          <div className="row align-items-start">
            <TodoForm onMessageSubmit={handleTodoFormSubmit} />
            <TodoStats />
          </div>
        </div>
        <div className="col-8">
          <div className="row align-items-start">
            <TodoFilters onFilterChange={handleFilterChange} />
            <TodoList tasks={applyFilter(filters, tasks)} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoApp;
