//1. Create a Date object for current date & time.
let currentDate=new Date();
console.log("Current date",currentDate)
//2. Extract and display:
//* Year
console.log("Year:",currentDate.getFullYear());
//* Month (human readable)
console.log("Month:",currentDate.getMonth());
// * Date
console.log("Date:",currentDate.getDate());
// * Day of week
console.log("Day of week:",currentDate.getDay());
// * Hours, minutes, seconds
console.log("Hours:",currentDate.getHours());

//3. Display the date in this format:
console.log("current Date is:",currentDate.toString());