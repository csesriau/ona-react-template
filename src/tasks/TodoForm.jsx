import { readUsedSize } from "chart.js/helpers";
import { useState } from "react";

function TodoForm(props) {
  function useInputForm(initialValue, placeholder) {
    const [value, setValue] = useState(initialValue);

    function handleChange(e) {
      setValue(e.target.value);
    }

    function reset() {
      setValue(initialValue);
    }

    return {
      type: "text",
      value: value,
      placeholder: placeholder,
      onChange: handleChange,
      reset: reset,
    };
  }

  const descriptionInput = useInputForm("", "Description...");
  const titleInput = useInputForm("", "Titre...");

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onMessageSubmit({
      title: titleInput.value.trim(),
      description: descriptionInput.value.trim(),
    });

    descriptionInput.reset();
    titleInput.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Nouvelle tâche</h3>
      <p>
        <input {...titleInput} />
      </p>
      <p>
        <input {...descriptionInput} />
      </p>
      <p>
        <input type="submit" disabled={!titleInput.value} value="Créer" />
      </p>
    </form>
  );
}

export default TodoForm;
