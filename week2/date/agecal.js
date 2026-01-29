let dob = "2000-05-15";
//1. Calculate exact age in years
let dobDate=new Date(dob)
let today=new Date()
let age=today.getFullYear()-dobDate.getFullYear()
console.log("Age in years:",age)