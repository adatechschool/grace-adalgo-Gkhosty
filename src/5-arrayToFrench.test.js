// TODO: test arrayToFrench function with one, two and multiple words

import { describe, test, expect } from 'vitest'
import { arrayToFrench } from './5-arrayToFrench'

describe("arrayToFrench", () => {
test("handles one word", () => {
  expect(arrayToFrench(["bonjour"])).toBe("bonjour");
  // je donne un tableau avec 1 mot
  // j'attends juste ce mot tout seul → "bonjour"
});

test("handles two words", () => {
  expect(arrayToFrench(["noir", "blanc"])).toBe("noir et blanc");
  // je donne 2 mots
  // j'attends qu'ils soient collés avec "et" → "noir et blanc"
  // pas de virgule quand y'a que 2 mots !
});

test("handles multiple words", () => {
  expect(arrayToFrench(["un", "deux", "trois", "soleil"])).toBe("un, deux, trois et soleil");
  // je donne 4 mots
  // j'attends des virgules entre tous sauf le dernier
  // le dernier est séparé par "et" → "un, deux, trois et soleil"
});
});