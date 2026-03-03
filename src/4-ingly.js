/*
This function modifies a given word based on its ending.

If the word does not end with "ing",
the function should add "ing" to the end of the word.

If the word already ends with "ing",
the function should add "ly" instead.

The function should return the updated word.

For example:

ingly("play") => return "playing"

ingly("playing") => return "playingly"

ingly("swim") => return "swiming"
*/

export const ingly = (word) => {
  const lowerWord = word.toLowerCase();

  if (lowerWord.endsWith("ing")) {
    if (lowerWord === word) {
      return word + "ly";      // mot en minuscule
    } else {
      return word + "LY";      // mot en majuscule
    }
  } else {
    if (lowerWord === word) {
      return word + "ing";     // mot en minuscule
    } else {
      return word + "ING";     // mot en majuscule
    }
  }
};