// SETTING Intern TO RUN THESE TESTS BASED ON Intern.js
const Intern = require("../lib/Intern");
// TESTING Intern SCHOOL
test("Intern school", () => {
    const employee = new Intern("John", 1, "somebody@gmail.com", "university");
    expect(employee.school).toBe("university");
});
// TESTING Intern EMAIL
test("Intern email", () => {
    const employee = new Intern("John", 1, "somebody@gmail.com");
    expect(employee.email).toBe("somebody@gmail.com");
});
// TESTING Intern ID
test("Intern id", () => {
    const employee = new Intern("John", 1);
    expect(employee.id).toBe(1);
});
// TESTING Intern NAME
test("Intern name", () => {
    const employee = new Intern("John");
    expect(employee.name).toBe("John");
});