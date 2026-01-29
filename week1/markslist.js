const marks = [78, 92, 35, 88, 40, 67]
//1. filter() marks ≥ 40 (pass marks)
let r1=marks.filter(m=>m>=40)
console.log("marks ≥ 40:",r1)
//2. map() to add 5 grace marks to each student
let r2=marks.map(m=>m+5)
console.log("marks after adding 5 grace marks:",r2)
//3. reduce() to find highest mark
//4. find() first mark below 40
let first=marks.find(m=>m<40)
console.log("first mark below 40:",first)
//5. findIndex() of mark 92
let index=marks.findIndex(m=>m===92)
console.log("index of marks 92:",index)