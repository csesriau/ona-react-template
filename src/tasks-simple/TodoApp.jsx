import { useState } from "react";

import TodoFilters from "./TodoFilters";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoStats from "./TodoStats";

function TodoApp() {
  const tasksDump = [
    {
      id: 1,
      date: "2025-11-27",
      title: "Titre",
      description: "Description...",
      status: "TODO",
    },
    {
      id: 2,
      date: "2025-01-01",
      title: "Titre",
      description: "Description...",
      status: "ENDED",
    },
    {
      id: 3,
      date: "2025-11-01",
      title: "Titre",
      description: "Description...",
      status: "ONGOING",
    },
  ];

  const [tasks, setTasks] = useState(tasksDump);
  const [filters, setFilters] = useState({ status: [], begin: "", end: "" });

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
