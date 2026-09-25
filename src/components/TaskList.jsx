import TaskItem from "./TaskItem";

function TaskList({
  tasks,
  onToggleTask,
  onDeleteTask,
  onEditTask
}) {
  return (
    <section className="task-section">
      <div className="task-header">
        <h2>My Tasks</h2>
        <span>{tasks.length} tasks remaining</span>
      </div>

      {tasks.length === 0 ? (
        <p className="empty-message">
          No tasks yet. Add your first task!
        </p>
      ) : (
        tasks.map((task) => (
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