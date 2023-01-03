// SETTING Manager TO RUN THESE TESTS BASED ON Manager.js
const Manager = require("../lib/Manager");
// TESTING Manager OFFICE NUMBER
test("Manager office Number", () => {
    const employee = new Manager("John", 1, "somebody@gmail.com", 2);
    expect(employee.officeNumber).toBe(2);
});
// TESTING Manager EMAIL
test("Manager email", () => {
    const employee = new Manager("John", 1, "somebody@gmail.com");
    expect(employee.email).toBe("somebody@gmail.com");
});
// TESTING Manager ID
test("Manager id", () => {
    const employee = new Manager("John", 1);
    expect(employee.id).toBe(1);
});
// TESTING Manager NAME
test("Manager name", () => {
    const employee = new Manager("John");
    expect(employee.name).toBe("John");
});

