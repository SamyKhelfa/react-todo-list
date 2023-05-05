import { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(task);
    // envoyer task dans le state taksList
    // ATTENTION c'est un state tableau
  };
  const handleTaskChange = (even) => {
    const value = even.target.value;
    setTask(value);
  };

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
        {/* faire un .map sur le state tableau taskList */}
      </div>
    </>
  );
}

export default App;
