import "./App.css";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const tasks = [];

  return (
    <div className="app">
      <Header
        title="Task Manager"
        subtitle="Organize your tasks and stay productive."
      />

      <main className="main-content">
        <TaskForm />
        <TaskList tasks={tasks} />
      </main>
    </div>
  );
}

export default App;