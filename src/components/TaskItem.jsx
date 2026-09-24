function TaskItem({ task }) {
  return (
    <div className="task-item">
      <strong>{task.title}</strong>
      <span className="task-category">{task.category}</span>
    </div>
  );
}

export default TaskItem;