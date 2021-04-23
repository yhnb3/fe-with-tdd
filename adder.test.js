const { expect } = require("@jest/globals")
const adder = require("./adder")



test("should add two numbers", () => {
    expect(adder(1, 2)).toBe(3)  
})
test("shoud return a sole input",  () => {
    expect(adder(5)).toBe(5)
})
test("should add three numbers",  () => {
    expect(adder(1, 2, 3)).toBe(6)
})
test("shoud return 0 if no number are passed", () => {
    expect(adder()).toBe(0)
})
test("should add any number of arguments", () => {
    expect(adder(1,2,3,4,5,6)).toBe(21)
})
