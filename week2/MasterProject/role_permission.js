import {roles} from "./data.js";
//-> Get all role names
const getAllRoleNames = () => Object.keys(roles);
//-> Check if student can delete
const canStudentDelete = () => roles.student.includes("delete");
//-> Create a flat list of all unique permissions
const getAllUniquePermissions = () => {
  const allPermissions = Object.values(roles).flat();
  return [...new Set(allPermissions)];
};
console.log("All Role Names:", getAllRoleNames());
console.log("Can Student Delete?:", canStudentDelete());
console.log("All Unique Permissions:", getAllUniquePermissions());
