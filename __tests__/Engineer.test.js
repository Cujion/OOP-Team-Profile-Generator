// SETTING Engineer TO RUN THESE TESTS BASED ON Engineer.js
const Engineer = require("../lib/Engineer");
// TESTING Engineer github
test("Engineer github", () => {
    const employee = new Engineer("John", 1, "somebody@gmail.com", "somebody");
    expect(employee.github).toBe("somebody");
});
// TESTING Engineer EMAIL
test("Engineer email", () => {
    const employee = new Engineer("John", 1, "somebody@gmail.com");
    expect(employee.email).toBe("somebody@gmail.com");
});
// TESTING Engineer ID
test("Engineer id", () => {
    const employee = new Engineer("John", 1);
    expect(employee.id).toBe(1);
});
// TESTING Engineer NAME
test("Engineer name", () => {
    const employee = new Engineer("John");
    expect(employee.name).toBe("John");
});
