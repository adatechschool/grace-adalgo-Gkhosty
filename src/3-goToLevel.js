/*
This function simulates an elevator system.

The elevator starts at floor 0.
Based on the starting floor and the destination floor,
it should move up or down accordingly.

The function should determine the direction of movement
and simulate the elevator reaching the desired floor.

For example: 
const start = 0
const end = 3
goToLevel(startFloor, FinalPosition) => return 3

const start = 3
const end = 0
goToLevel(startFloor, FinalPosition) => return -3
*/
export const goToLevel = (start, end) => {
  // si hors limites (on garde 0-20 comme plage valide)
  if (start < 0 || start > 20 || end < 0 || end > 20) {
    return 0;
  }

  // si même étage
  if (start === end) {
    return 0;
  }

  // on retourne la différence (positive = monte, négative = descend)
  return end - start;
};