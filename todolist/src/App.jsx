import React, { useState } from "react";
import "./App.css";
import TaskItem from "./components/TaskItem";

function App() {
  const [tasks, setTasks] = useState([]);
  const [formState, setFormState] = useState({
    task: "", // string
    completed: false, // boolean
    taskAssignedTo: "", // string
  });

  function handleChange(event) {
    // Implement logic to handle form changes
    
    const targetName = event.target.name

    const targetValue = targetName === "completed" ? event.target.checked : event.target.value;

    setFormState({
      ...formState, 
      [event.target.name] : targetValue
    })
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Implement logic to handle form submission
    setTasks([...tasks, formState]);
  }


  function handleDelete(index){
    const updatedArray = [...tasks]
    
    updatedArray.splice(index, 1);
    
    setTasks(updatedArray)
  }
  
  function handleToggle(index) {
    
    const updatedArray = [...tasks]
    updatedArray[index].completed = !updatedArray[index].completed

    setTasks(updatedArray)
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input name="task" type="text" placeholder="Add Task" onChange={handleChange} />
          <label>
            Completed:
            <input name="completed" type="checkbox" onChange={handleChange} />
          </label>
          <select name="taskAssignedTo" onChange={handleChange}>
            <option value="">Select Assignee</option>
            <option value="Bruce">Bruce</option>
            <option value="Barry">Barry</option>
            <option value="Clark">Clark</option>
            <option value="Oliver">Oliver</option>
            <option value="Jina">Jina</option>
          </select>
          <button type="submit">Add Task</button>
        </form>
      </div>
      <hr />
      {tasks.map((item, index) => (
        <TaskItem key={index} item={item} handleDelete = {() => handleDelete(index)} handleToggle = {() => handleToggle(index)} />
      ))}
    </>
  );
}

export default App;