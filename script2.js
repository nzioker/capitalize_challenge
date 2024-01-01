function checkWhiteSpace(pwd) {
  const trimmedPassword = pwd.trim();
  if (checkLength(trimmedPassword)) {
    if (checkComplexity(trimmedPassword)) {
      return 'Password is accepted'; // ideally this is where you save the password
    } else {
      return 'Password should contain an upper and lower case character, a number and any special character(!@#$%&*())';
    }
  }
  return;
}

function checkLength(pwd) {
  if (pwd.length > 8) {
    return pwd;
  }
  return 'Password needs to be 8 characters or more';
}

function checkComplexity(pwd) {
  // regex to make sure the password is between 8 - 15 characters, has special characters, a capitalized letter and a number.
  var format =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;
  return format.test(pwd);
}

const password = '    Password&3   ';
const x = checkWhiteSpace(password);
console.log(x);
