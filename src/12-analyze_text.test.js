import { describe, test, expect } from "vitest";
import { analyze_text } from "./12-analyze_text.js";

describe("analyze_text", () => {
  test("returns correct count for simple sentence", () => {
    expect(analyze_text("Hello world.")).toEqual({ letters: 10, words: 2, sentences: 1 });
  });

  test("returns correct count for multiple sentences", () => {
    expect(analyze_text("Hello world. How are you?")).toEqual({ letters: 19, words: 5, sentences: 2 });
  });

  test("returns zeros for empty string", () => {
    expect(analyze_text("")).toEqual({ letters: 0, words: 0, sentences: 0 });
  });

  test("handles exclamation mark", () => {
    expect(analyze_text("Wow!")).toEqual({ letters: 3, words: 1, sentences: 1 });
  });

  test("handles single word no punctuation", () => {
    expect(analyze_text("Hello")).toEqual({ letters: 5, words: 1, sentences: 0 });
  });
});