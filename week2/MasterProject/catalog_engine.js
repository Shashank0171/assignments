import {courses}from "./data.js";
// Get published courses
function getPublishedCourses() {
  return courses.filter(course => course.published);
}
// Sort courses by price (high → low)
function sortByPriceDesc() {
  return [...getPublishedCourses()].sort(
    (a, b) => b.price - a.price
  );
}
// Extract { title, price } only
function getCourseTitlesAndPrices() {
  return sortByPriceDesc().map(({ title, price }) => ({
    title,
    price
  }));
}
// Calculate total value of published courses
function getTotalPublishedValue() {
  return getPublishedCourses().reduce(
    (total, course) => total + course.price,
    0
  );
}
// Add a new course immutably
function addNewCourse(newCourse) {
  return [...courses, newCourse];
}
console.log("Published Courses:", getPublishedCourses());
console.log("Sorted by Price (High → Low):", sortByPriceDesc());
console.log("Title & Price Only:", getCourseTitlesAndPrices());
console.log("Total Published Course Value:", getTotalPublishedValue());
console.log(
  "After Adding New Course:",
  addNewCourse({
    id: 5,
    title: "Data Structures",
    price: 3500,
    published: true
  })
);
