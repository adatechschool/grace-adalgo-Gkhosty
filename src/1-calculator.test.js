import { expect } from "vitest"
import { test } from "vitest"
import { describe } from "vitest"
import { calculator } from "./1-calculator"

describe("calculator", () =>{
    test ("adds two numbers", () =>{
        expect(calculator(2, 3, "+")).toBe(5);
    });

    test("subtracts two numbers", () => {
        expect(calculator(5, 2, "-")).toBe(3);
    });

    test("multiplies two number", () =>{
        expect(calculator(4, 3, "*")).toBe(12);

    });

    test("divides two numbers", () => {
        expect(calculator(10, 2, "/")).toBe(5);

    });

    test ("throws for invalid operator", () => {
        expect(() => calculator(2, 3, "%")).toThrow();
    })
})