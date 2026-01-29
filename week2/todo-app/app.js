// Import task functions
import { addTask, getAllTasks, completeTask } from "./task.js";

console.log(addTask("Buy groceries", "medium", "2026-12-01"));
console.log(addTask("Do homework", "high", "2026-11-01"));
console.log(addTask("Pay bills", "low", "2026-10-01"));
console.log(addTask("Finish project", "high", "2026-11-15"));
console.log("All Tasks:", getAllTasks());
console.log(completeTask(1));
console.log("All Tasks after completion:", getAllTasks());