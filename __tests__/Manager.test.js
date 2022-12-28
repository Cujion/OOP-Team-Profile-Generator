const Manager = require("../lib/Manager");

test("Manager office Number", () => {
    const employee = new Manager("John", 1, "somebody@gmail.com", 2);
    expect(employee.officeNumber).toBe(2);
});

test("Manager email", () => {
    const employee = new Manager("John", 1, "somebody@gmail.com");
    expect(employee.email).toBe("somebody@gmail.com");
});

test("Manager id", () => {
    const employee = new Manager("John", 1);
    expect(employee.id).toBe(1);
});

test("Manager name", () => {
    const employee = new Manager("John");
    expect(employee.name).toBe("John");
});

