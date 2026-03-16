import { describe, test, expect } from "vitest";
import { toCamelCase, toSnakeCase } from "./10-namingConvention.js";

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

describe("toCamelCase", () => {
  test("convert snake case back to camel case", () => {
    expect(toCamelCase("test")).toBe("test");
    expect(toCamelCase("to_snake_case")).toBe("toSnakeCase");
    expect(toCamelCase("my_function")).toBe("myFunction");
    expect(toCamelCase("another_function")).toBe("anotherFunction");
  });
});