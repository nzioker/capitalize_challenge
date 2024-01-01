const word = 'developer';

// Solution one
const replaced = word.replace(word.charAt(0), word.charAt(0).toUpperCase());

// Solution two
const capitalizedWord = word.toUpperCase();
const x = capitalizedWord
  .charAt(0)
  .concat(capitalizedWord.substring(1).toLowerCase());

console.log(x);
console.log(replaced);
