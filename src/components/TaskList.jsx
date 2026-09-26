import TaskItem from "./TaskItem";

function TaskList({
  tasks,
  filter,
  onFilterChange,
  onToggleTask,
  onDeleteTask,
  onEditTask
}) {
  const filteredTasks = tasks.filter((task) => {
    if (filter === "Active") {
      return !task.completed;
    }

    if (filter === "Completed") {
      return task.completed;
    }

    return true;
  });

  const activeTasks = tasks.filter((task) => !task.completed).length;
  const completedTasks = tasks.filter((task) => task.completed).length;

  return (
    <section className="task-section">
      <div className="task-header">
        <h2>My Tasks</h2>
        <span>{tasks.length} tasks</span>
      </div>

      <div className="filter-section">
        <p className="filter-label">Filter tasks:</p>

        <div className="filter-buttons">
          <button
            className={filter === "All" ? "active-filter" : ""}
            onClick={() => onFilterChange("All")}
          >
            All
          </button>

          <button
            className={filter === "Active" ? "active-filter" : ""}
            onClick={() => onFilterChange("Active")}
          >
            Active
          </button>

          <button
            className={filter === "Completed" ? "active-filter" : ""}
            onClick={() => onFilterChange("Completed")}
          >
            Completed
          </button>
        </div>
      </div>

      <div className="task-stats">
        <span>Active: {activeTasks}</span>
        <span>Completed: {completedTasks}</span>
      </div>

      {filteredTasks.length === 0 ? (
        <p className="empty-message">
          No tasks found.
        </p>
      ) : (
        filteredTasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggleTask={onToggleTask}
            onDeleteTask={onDeleteTask}
            onEditTask={onEditTask}
          />
        ))
      )}
    </section>
  );
}

export default TaskList;