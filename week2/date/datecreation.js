//1. Create a Date object for current date & time.
let currentDate=new Date();
console.log("Current date",currentDate)
// 2. Extract and display:
// * Year
console.log("Year:",currentDate.getFullYear());
// * Month (human readable)
console.log("Month:",currentDate.getMonth()+1);
// * Date
console.log("Date:",currentDate.getDate());
// * Day of week
console.log("Day of week:",currentDate.getDay());
// * Hours, minutes, seconds
console.log("Hours:",currentDate.getHours());
console.log("Minutes:",currentDate.getMinutes());
console.log("Seconds:",currentDate.getSeconds());
// 3. Display the date in this format:
  //DD-MM-YYYY HH:mm:ss
let DD=currentDate.getDate();
let MM=currentDate.getMonth()+1;
let YYYY=currentDate.getFullYear();
let HH=currentDate.getHours();
let mm=currentDate.getMinutes();
let ss=currentDate.getSeconds();
console.log(`${DD}-${MM}-${YYYY} ${HH}:${mm}:${ss}`);  
