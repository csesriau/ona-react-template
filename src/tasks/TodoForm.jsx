import { useState } from "react";

function TodoForm(props) {
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onMessageSubmit({
      title: title.trim(),
      description: description.trim(),
    });

    setDescription("");
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Nouvelle tâche</h3>
      <p>
        <input
          type="text"
          id="title"
          placeholder="Titre..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </p>
      <p>
        <input
          type="text"
          id="description"
          placeholder="Description..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </p>
      <p>
        <input type="submit" disabled={!title} value="Créer" />
      </p>
    </form>
  );
}

export default TodoForm;
