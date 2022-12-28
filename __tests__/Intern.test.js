const Intern = require("../lib/Intern");

test("Intern school", () => {
    const employee = new Intern("John", 1, "somebody@gmail.com", "university");
    expect(employee.school).toBe("university");
});

test("Intern email", () => {
    const employee = new Intern("John", 1, "somebody@gmail.com");
    expect(employee.email).toBe("somebody@gmail.com");
});

test("Intern id", () => {
    const employee = new Intern("John", 1);
    expect(employee.id).toBe(1);
});

test("Intern name", () => {
    const employee = new Intern("John");
    expect(employee.name).toBe("John");
});