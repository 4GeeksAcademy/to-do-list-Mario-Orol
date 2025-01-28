import React, { useState } from "react";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";

//create your first component
const Home = () => {
  const [task, setTask] = useState("");
  const [listOfTasks, setListOfTasks] = useState([]);

  const addTask = () => {
    if (task.trim() !== "") {
      setListOfTasks([...listOfTasks, task]);
      setTask("");
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = listOfTasks.filter((_, i) => i !== index);
    setListOfTasks(updatedTasks);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Mario Orol</h1>
      <h1 className="text-center">To-Do List</h1>
      <div className="card shadow-sm">
        <div className="card-body">
          <TaskInput task={task} setTask={setTask} addTask={addTask} />
          <TaskList listOfTasks={listOfTasks} deleteTask={deleteTask} />
        </div>
      </div>
    </div>
  );
};

export default Home;
