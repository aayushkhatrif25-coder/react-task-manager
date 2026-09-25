import { useState } from "react";

function TaskItem({ task, onToggleTask, onDeleteTask, onEditTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(task.title);
  const [editCategory, setEditCategory] = useState(task.category);

  function handleSave() {
    if (editTitle.trim() === "") {
      return;
    }

    onEditTask(task.id, editTitle, editCategory);
    setIsEditing(false);
  }

  function handleCancel() {
    setEditTitle(task.title);
    setEditCategory(task.category);
    setIsEditing(false);
  }

  if (isEditing) {
    return (
      <div className="task-item edit-mode">
        <input
          type="text"
          value={editTitle}
          onChange={(event) => setEditTitle(event.target.value)}
        />

        <select
          value={editCategory}
          onChange={(event) => setEditCategory(event.target.value)}
        >
          <option>Personal</option>
          <option>Study</option>
          <option>Work</option>
        </select>

        <div className="task-actions">
          <button type="button" onClick={handleSave}>
            Save
          </button>

          <button type="button" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>
      <div className="task-info">
        <strong>{task.title}</strong>
        <span className="task-category">{task.category}</span>
      </div>

      <div className="task-actions">
        <button
          type="button"
          onClick={() => onToggleTask(task.id)}
        >
          {task.completed ? "Undo" : "Complete"}
        </button>

        <button
          type="button"
          onClick={() => setIsEditing(true)}
        >
          Edit
        </button>

        <button
          type="button"
          onClick={() => onDeleteTask(task.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskItem;