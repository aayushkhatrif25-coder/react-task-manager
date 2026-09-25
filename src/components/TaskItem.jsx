function TaskItem({ task, onToggleTask, onDeleteTask }) {
  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>
      <div className="task-info">
        <strong>{task.title}</strong>
        <span className="task-category">{task.category}</span>
      </div>

      <div className="task-actions">
        <button onClick={() => onToggleTask(task.id)}>
          {task.completed ? "Undo" : "Complete"}
        </button>

        <button onClick={() => onDeleteTask(task.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskItem;