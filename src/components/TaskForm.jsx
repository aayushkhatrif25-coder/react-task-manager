function TaskForm() {
  return (
    <section className="task-form">
      <h2>Add a Task</h2>

      <input
        type="text"
        placeholder="Enter your task"
      />

      <select>
        <option>Personal</option>
        <option>Study</option>
        <option>Work</option>
      </select>

      <button>Add Task</button>
    </section>
  );
}

export default TaskForm;