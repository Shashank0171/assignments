import React, { useState } from "react";
import AddTaskForm from "./AddTaskForm";
import TaskList from "./TaskList";

function TaskManager() {
  const [tasks, setTasks] = useState([]);

  function addNewTask(task) {
    setTasks([...tasks, task]);
  }

  function deleteTask(index) {
    const newTasks = tasks.filter((task, i) => i !== index);
    setTasks(newTasks);
  }

  function toggleTask(index) {
    const newTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  }

  return (
    <div className="min-h-screen w-full p-10">
      
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Task Manager
      </h1>

      <div className="w-full max-w-4xl mx-auto bg-white p-8 rounded-2xl ">

        <AddTaskForm onAdd={addNewTask} />

        <div className="flex justify-between text-gray-600 mt-6 mb-4">
          <p>Total Tasks: <span className="font-semibold">{tasks.length}</span></p>
          <p>
            Completed:{" "}
            <span className="font-semibold text-green-600">
              {tasks.filter((task) => task.completed).length}
            </span>
          </p>
        </div>

        <TaskList
          tasks={tasks}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
        />

      </div>
    </div>
  );
}

export default TaskManager;