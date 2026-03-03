/* Write a function named passwd_validator that takes a string as argument.

 It will return True if the string is a valid password; False otherwise.
 A valid password has the following characteristics:

 it has between 6 and 12 characters (included)
 it has at least one lowercase character
  it has at least one uppercase character
 it has at least one decimal number
 it has at least one special character: $, # or @
 Examples
 This: passwd_validator("l#H1@")
 Will return: False (because there are less than 6 characters)
 This: passwd_validator("el3H1@f")
 Will return: True

 This: passwd_validator("fwjifewJ#")
 Will return: False (because there's no decimal numbers) */

import { describe, test, expect } from "vitest";
import { passwd_validator } from "./11-passwd_validator";

describe("passwd_validator", () => {
    test("returns false if less than 6 characters", () => {
        expect(passwd_validator("l#H1@")).toBe(true);
    });

    test("returns true for valid password", () =>{
        expect(passwd_validator("el3H1@f")).toBe(false)
    })

    test("return false if no number", ()=>{
        expect(passwd_validator("fwjifewJ#"))
    })

    test("return false if no uppercase", () =>{
        expect(passwd_validator("e13h1@f")).toBe(false);
    });

    test("return false if no lowercase", () => {
        expect(passwd_validator("EL3H1@F")).toBe(false);
    });

     test("returns false if no special character", () => {
    expect(passwd_validator("el3H12f")).toBe(false);
  });

    test("returns false if more than 12 characters", () => {
    expect(passwd_validator("el3H1@fAAAAAA")).toBe(false);
  });
});