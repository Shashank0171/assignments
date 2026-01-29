let enrollmentDeadline = new Date("2026-01-20");
//1.Check if:
//* Today is before deadline → "Enrollment Open"
//* Today is after deadline → "Enrollment Closed"
let today=new Date();
if(today<enrollmentDeadline){
    console.log("enrollment Open");
}
else{
    console.log("Enrollment Closed");
}
 // 2. Validate user input date:
//* Input: "2026-02-30"
 // * Detect whether the date is valid or invalid
 let UserInputDate="2026-02-30"
 