import React from "react";
import { useForm } from "react-hook-form";

function AddTaskForm({ onAdd }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onFormSubmit = (data) => {
    const newTask = {
      ...data,
      completed: false,
    };
    onAdd(newTask);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit)} className="flex gap-4 flex-wrap items-start">

      <div className="flex flex-col flex-1 min-w-50">
        <input
          type="text"
          placeholder="Enter task"
          className="p-2 border border-gray-300 rounded-lg  transition"
          {...register("taskName", {
            required: "Task is required",
            minLength: {
              value: 3,
              message: "Min length should be 3",
            },
          })}
        />
        {errors.taskName && (
          <p className="text-red-500 text-sm mt-1">
            {errors.taskName.message}
          </p>
        )}
      </div>

      <div className="flex flex-col min-w-40">
        <select
          className="p-2 border border-gray-300 rounded-lg "
          defaultValue=""
          {...register("priority", {
            required: "Please select priority",
          })}
        >
          <option value="" disabled>Select Priority</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        {errors.priority && (
          <p className="text-red-500 text-sm mt-1">
            {errors.priority.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-lg transition duration-300"
      >
        Add Task
      </button>

    </form>
  );
}

export default AddTaskForm;