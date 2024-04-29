function removeElement(str, remove) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    if (!remove.includes(str[i])) {
      result += str[i];
    }
  }

  return result;
}

let input = prompt("Введіть рядок:");
let removeStr = prompt("Введіть символи для видалення:");

let remove = removeStr.split("");

let result = removeElement(input, remove);

console.log(`Результат: ${result}`);
alert(`Результат: ${result}`);
