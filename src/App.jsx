import { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(task);
    setTaskList([...taskList, { text: task, completed: false }]); 
  setTask("")
  };
  const handleTaskChange = (event) => {
    const value = event.target.value;
    setTask(value);
  };
  const handleDelete = (index) => {
    const newTaskList = taskList.map((task) => task);
    newTaskList.splice(index, 1)
    setTaskList(newTaskList)
  }

  return (
  <>
    <div>
      <h1>To Do List</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Task"
          type="text"
          name="task"
          onChange={handleTaskChange}
          value={task}
        />
        <button>Add task</button>
      </form>
      <ul>
        {taskList.map((task, index) => (
          <li key={index}>
            <input type="checkbox" />
            {task.text}
            <button onClick={() => handleDelete(index)}>🗑️</button>
          </li>
        ))}
      </ul>
    </div>
  </>
);
        }

export default App;
