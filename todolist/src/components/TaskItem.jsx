import React from 'react';

const TaskItem = ({item, handleDelete, handleToggle}) => {
  return (
    <div style={{display: "flex", justifyContent: "space-between"}}>
      <h3>{item.task}</h3>
      <button onClick={handleToggle}>{item.completed ? "Yes" : "No"}</button>
      <p>{item.taskAssignedTo}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default TaskItem;