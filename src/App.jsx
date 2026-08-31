import { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([
    "Cricket",
    "Football",
    "Chess",
    "Hockey",
    "Badminton",
    "Volleyball",
    "Tennis",
  ]);

  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    setTasks(tasks.filter((_, i) => i !== index));
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];

      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];

      setTasks(updatedTasks);
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];

      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];

      setTasks(updatedTasks);
    }
  }

  return (
    <div className="todo-container">
      <h1>Todo Application</h1>

      <div className="input-section">
        <input
          type="text"
          placeholder="Enter Task..."
          value={newTask}
          onChange={handleInputChange}
        />

        <button onClick={addTask}>Add Task</button>
      </div>

      <div className="task-list">
        {tasks.map((task, index) => (
          <div className="task-row" key={index}>
            <span className="task-name">{task}</span>

            <div className="task-buttons">
              <button onClick={() => moveTaskUp(index)}>↑</button>

              <button onClick={() => moveTaskDown(index)}>↓</button>

              <button onClick={() => deleteTask(index)}>×</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;