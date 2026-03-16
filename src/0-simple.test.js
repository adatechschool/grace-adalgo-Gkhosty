import { expect, test  } from "vitest";
import { simple } from "./0-simple.js";

test("si ça marech", () => {
    expect(simple()).toBe("J'❤️ les tests")
})