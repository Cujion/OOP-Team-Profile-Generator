const Employee = require("../lib/Employee");

test("Employee email", () => {
    const employee = new Employee("John", 1, "somebody@gmail.com");
    expect(employee.email).toBe("somebody@gmail.com");
});

test("Employee id", () => {
    const employee = new Employee("John", 1);
    expect(employee.id).toBe(1);
});

test("Employee name", () => {
    const employee = new Employee("John");
    expect(employee.name).toBe("John");
});
