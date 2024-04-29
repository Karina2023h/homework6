function removeCharacters(str, charsToRemove) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    if (!charsToRemove.includes(str[i])) {
      result += str[i];
    }
  }

  return result;
}

let input = prompt("Введіть рядок:");
let charsToRemoveStr = prompt("Введіть символи для видалення:");

let charsToRemove = charsToRemoveStr.split("");

let result = removeCharacters(input, charsToRemove);

console.log(`Результат: ${result}`);
alert(`Результат: ${result}`);
