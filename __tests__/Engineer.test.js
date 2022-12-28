const Engineer = require("../lib/Engineer");

test("Engineer github", () => {
    const employee = new Engineer("John", 1, "somebody@gmail.com", "somebody");
    expect(employee.github).toBe("somebody");
});

test("Engineer email", () => {
    const employee = new Engineer("John", 1, "somebody@gmail.com");
    expect(employee.email).toBe("somebody@gmail.com");
});

test("Engineer id", () => {
    const employee = new Engineer("John", 1);
    expect(employee.id).toBe(1);
});

test("Engineer name", () => {
    const employee = new Engineer("John");
    expect(employee.name).toBe("John");
});
