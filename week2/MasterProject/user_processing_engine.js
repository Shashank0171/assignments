import users from "./data.js";
// Get only active users
function getActiveUsers() {
  return users.filter(user => user.active);
}
// Extract names of active users
function getActiveUserNames() {
  return getActiveUsers().map(user => user.name);
}
// Check if any admin exists
function isAdminExists() {
  return users.some(user => user.role === "admin");
}
// Find user by id
function findUserById(userId) {
  return users.find(user => user.id === userId);
}
console.log("Active Users:", getActiveUsers());
console.log("Active User Names:", getActiveUserNames());
console.log("Is Admin Exists:", isAdminExists());
console.log("Find User with ID 3:", findUserById(3));
