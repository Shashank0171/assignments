const employees = [
    { id: 201, name: "Amit", salary: 45000, department: "IT" },
    { id: 202, name: "Neha", salary: 60000, department: "HR" },
    { id: 203, name: "Rahul", salary: 75000, department: "IT" },
    { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
  ];
  
  // 1. filter() – employees from IT department
  const itEmployees = employees.filter(emp => emp.department === "IT");
  
  // 2. map() – add netSalary with 10% bonus
  const employeesWithNetSalary = employees.map(emp => ({
    ...emp,
    netSalary: emp.salary + emp.salary * 0.10
  }));
  
  // 3. reduce() – total salary payout
  const totalSalaryPayout = employees.reduce(
    (total, emp) => total + emp.salary,
    0
  );
  
  // 4. find() – employee with salary 30000
  const employee30000 = employees.find(emp => emp.salary === 30000);
  
  // 5. findIndex() – index of employee "Neha"
  const nehaIndex = employees.findIndex(emp => emp.name === "Neha");
  
  // Output
  console.log("IT Employees:", itEmployees);
  console.log("Employees with Net Salary:", employeesWithNetSalary);
  console.log("Total Salary Payout:", totalSalaryPayout);
  console.log("Employee with salary 30000:", employee30000);
  console.log("Index of Neha:", nehaIndex);
  