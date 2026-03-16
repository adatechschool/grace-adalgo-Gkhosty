import { describe, test, expect } from "vitest";
import { goToLevel } from "./3-goToLevel.js";

describe("comment utliser le accensor", ()=>{
  test("go to down floor", () =>{
    expect(goToLevel(3, 0)).toBe(-3);
  });

  test("go to up floor", ()=>{
    expect(goToLevel(0, 3)).toBe(3);
  });

})