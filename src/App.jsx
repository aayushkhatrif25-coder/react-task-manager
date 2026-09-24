import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  function addTask(title, category) {
    const newTask = {
      id: Date.now(),
      title: title,
      category: category
    };

    setTasks([...tasks, newTask]);
  }

  return (
    <div className="app">
      <Header
        title="Task Manager"
        subtitle="Organize your tasks and stay productive."
      />

      <main className="main-content">
        <TaskForm onAddTask={addTask} />
        <TaskList tasks={tasks} />
      </main>
    </div>
  );
}

export default App;