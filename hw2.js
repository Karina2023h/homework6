function calculater(arr) {
  let suma = 0;
  let all = 0;

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      suma += arr[i];
      all++;
    }
  }

  if (all === 0) {
    return 0;
  }

  return suma / all;
}

let array = [1, 2, "a", 3, "b", 4, "c", 5];
let avv = calculater(array);

console.log("Середнє арифметичне число елементів масиву:", avv);
