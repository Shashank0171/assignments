let hasPaid = true;
let hasCompletedBasics = false;

// using ternary operator
let enrollMessage = (hasPaid && hasCompletedBasics)
  ? "Enroll Now"
  : "Complete Requirements";

console.log(enrollMessage);
