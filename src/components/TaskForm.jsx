import { useState } from "react";

function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Personal");

  function handleSubmit(event) {
    event.preventDefault();

    if (title.trim() === "") {
      return;
    }

    onAddTask(title, category);
    setTitle("");
    setCategory("Personal");
  }

  return (
    <section className="task-form">
      <h2>Add a Task</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your task"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          <option>Personal</option>
          <option>Study</option>
          <option>Work</option>
        </select>

        <button type="submit">Add Task</button>
      </form>
    </section>
  );
}

export default TaskForm;