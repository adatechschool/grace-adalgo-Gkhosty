// TODO: test arrayToFrench function with one, two and multiple words

import { describe, test, expect } from 'vitest'
import { arrayToFrench } from './5-arrayToFrench'

describe("arrayToFrench", () => {
test("handles two words", () => {
  expect(arrayToFrench(["noir", "blanc"])).toBe("noir et blanc");
 
});

test("handles multiple words", () => {
  expect(arrayToFrench(["un", "deux", "trois", "soleil"])).toBe("un, deux, trois et soleil");

});
});