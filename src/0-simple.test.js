import {expect, test} from "vitest";
import {simple} from "./0-simple";

test("Chick if the simple function work", () => {
    expect(simple()).toBe(`J'❤️ les tests`);
})