import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Task Manager</h1>
        <p>Organize your tasks and stay productive.</p>
      </header>

      <main className="main-content">
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

        <section className="task-section">
          <div className="task-header">
            <h2>My Tasks</h2>
            <span>0 tasks remaining</span>
          </div>

          <p className="empty-message">
            No tasks yet. Add your first task!
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;