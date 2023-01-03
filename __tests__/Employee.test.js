// SETTING Employee TO RUN THESE TESTS BASED ON Employee.js
const Employee = require("../lib/Employee");

// TESTING Employee EMAIL
test("Employee email", () => {
    const employee = new Employee("John", 1, "somebody@gmail.com");
    expect(employee.email).toBe("somebody@gmail.com");
});

// TESTING Employee ID
test("Employee id", () => {
    const employee = new Employee("John", 1);
    expect(employee.id).toBe(1);
});

// TESTING Employee NAME
test("Employee name", () => {
    const employee = new Employee("John");
    expect(employee.name).toBe("John");
});
