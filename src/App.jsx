import { useState } from "react";
import "./App.css";

function App() {
  const [task, newTask] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(task);
  };
  return (
    <>
      <div>
        <h1>To Do List</h1>
        <form onSubmit={handleSubmit}>
          <input placeholder="task" type="text" name="task" value={newTask}>
            New Task
          </input>
        </form>
      </div>
    </>
  );
}

export default App;
