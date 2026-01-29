const user = {
    id: 101,
    name: "Ravi",
    email: "ravi@gmail.com",
    role: "student",
    isActive: true
  }
  //read and print the user’s name and email
console.log("name:",user.name)
console.log('email:',user.email)  
//Add a new property lastLogin: "2026-01-01"
user.lastLogin="2026-01-01"
//Update role from "student" to "admin"
user.role="admin"
//Delete the isActive property
delete user.isActive
console.log(user)
//Use Object.keys() to list all remaining fields
console.log(Object.keys(user))
  