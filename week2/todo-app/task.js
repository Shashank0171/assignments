import { validateTitle, validatePriority, validateDueDate } from './validator.js';

const tasks = [];

// 1. Add new task
function addTask(title, priority, dueDate) {

  if (!validateTitle(title)) {
    return "Error: Invalid title";
  }

  if (!validatePriority(priority)) {
    return "Error: Invalid priority";
  }

  if (!validateDueDate(dueDate)) {
    return "Error: Due date must be future date";
  }

  const task = {
    title,
    priority,
    dueDate,
    completed: false
  };

  tasks.push(task);
  return "Task added successfully";
}

// 2. Get all tasks
function getAllTasks() {
  return tasks;
}

// 3. Mark task as complete
function completeTask(taskId) {
  if (taskId < 0 || taskId >= tasks.length) {
    return "Error: Invalid task ID";
  }
  tasks[taskId].completed = true;
  return "Task marked as completed";
}

export { addTask, getAllTasks, completeTask };