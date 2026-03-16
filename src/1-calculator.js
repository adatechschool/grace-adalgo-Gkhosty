/*
This function should return the result
of an addition,
subtraction,
multiplication, or
division

depending on the operator provided.

For example:

const x = 2
const y = 3
const operator = '+'

calculator(x, y, operator) => return 5
*/
export const calculator = (x, y, operator) => d{
  if (operator === "+"){
    return x + y
  };
  if (operator === "-"){
    return x-y 
  };
  if (operator === "*"){
    return x * y 
  };
  if (operator === "/"){
    return x / y 
  };
  throw new Error("operateur ça ne marche pas")
}
