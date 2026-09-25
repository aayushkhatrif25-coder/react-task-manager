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
      category: category,
      completed: false
    };

    setTasks([...tasks, newTask]);
  }

  function toggleTask(taskId) {
    setTasks(
      tasks.map((task) =>
        task.id === taskId
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  function editTask(taskId, title, category) {
    setTasks(
      tasks.map((task) =>
        task.id === taskId
          ? { ...task, title: title, category: category }
          : task
      )
    );
  }

  return (
    <div className="app">
      <Header
        title="Task Manager"
        subtitle="Organize your tasks and stay productive."
      />

      <main className="main-content">
        <TaskForm onAddTask={addTask} />

        <TaskList
          tasks={tasks}
          onToggleTask={toggleTask}
          onDeleteTask={deleteTask}
          onEditTask={editTask}
        />
      </main>
    </div>
  );
}

export default App;