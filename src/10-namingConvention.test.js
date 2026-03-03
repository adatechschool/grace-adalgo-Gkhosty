import { toCamelCase, toSnakeCase } from "./10-namingConvetions";
import { test, expect } from "vitest";
import { describe, test, expect } from "vitest";
import { toSnakeCase } from "./toSnakeCase";

describe("toSnakeCase", () => {
    test("Some simple cases for the toSnakeCase function", () => {
        expect(toSnakeCase("test")).toBe("test");
        expect(toSnakeCase("toSnakeCase")).toBe("to_snake_case");
        expect(toSnakeCase("camelCase")).toBe("camel_case");
        expect(toSnakeCase("myVariableName")).toBe("my_variable_name");
        expect(toSnakeCase("helloWorld")).toBe("hello_world");
        expect(toSnakeCase("firstName")).toBe("first_name");
    });
});

// additional checks for the reverse conversion

test("convert snake case back to camel case", () => {
    expect(toCamelCase("test")).toBe("test");
    expect(toCamelCase("to_snake_case")).toBe("toSnakeCase");
    expect(toSnakeCase("myFunction")).toBe("my_function");
    expect(toSnakeCase("anotherFunction")).toBe("another_function");
});