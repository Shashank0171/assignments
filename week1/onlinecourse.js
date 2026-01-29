const courses = ["javascript", "react", "node", "mongodb", "express"];
//1. filter() courses with name length > 5
let r=courses.filter(c=>c.length>5)
console.log("courses with name length >5:",r)
// 2. map() to convert course names to uppercase
let r1=courses.map(c=>c.toUpperCase())
console.log("course names in uppercase:",r1)
//3. reduce() to generate a single string:
let r3=courses.reduce((acc,ele)=>acc+"|"+ele,"Courses:")
console.log(r3)
//4. find() the course "react"
let r4=courses.find(c=>c==='react')
console.log("found course:",r4)
//5. findIndex() of "node"
let r5=courses.findIndex(c=>c==='node')
console.log("index of node:",r5)

