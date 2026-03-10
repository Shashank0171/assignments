function TaskItem({ task, index, deleteTask, toggleTask }) {
  return (
    <div className="bg-gray-50 border border-gray-200 p-4 flex justify-between items-center rounded-xl shadow-sm hover:shadow-md transition">

      <p className={task.completed ? "text-gray-400 line-through font-medium" : "font-medium text-gray-700"}>
        {task.taskName} - {task.priority}
      </p>

      <div>
        <button
          onClick={() => toggleTask(index)}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded-lg mr-2 transition"
        >
          Toggle
        </button>

        <button
          onClick={() => deleteTask(index)}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-lg transition"
        >
          Delete
        </button>
      </div>

    </div>
  );
}

export default TaskItem;