import { describe, test, expect } from "vitest";
import { calculator } from "./1-calculator.js";

describe(calculator,() =>{
test("some doit etre", () =>{
    expect(calculator(2, 3, "+")).toBe(5);
});

test("substruction doit etre 5", () =>{
    expect(calculator(20, 5, "-")).toBe(15);
});

test("multipication doit etre 100", () =>{
    expect(calculator(10,10, "*")).toBe(100);
});

test("la divis doit etre 6", () => {
    expect(calculator(12, 2, "/")).toBe(6);
})
test(" c'est une error", () =>{
    expect(() => calculator(6, 15, "%")).toThrow()
})
})