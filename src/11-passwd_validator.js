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

export const passwd_validator = (password) => {
  if (password.length < 6 || password.length > 12) {
    return false;
  }
  if (!/[a-z]/.test(password)) {
    return false;
  }
  if (!/[A-Z]/.test(password)) {
    return false;
  }
  if (!/[0-9]/.test(password)) {
    return false;
  }
  if (!/[$#@]/.test(password)) {
    return false;
  }

  return true;
};
