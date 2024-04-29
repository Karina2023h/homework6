function removeElement(array, item) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      array.splice(i, 1);
      i--;
    }
  }
}

const array = [1, 3, 4, 6, 2, 5, 7];
removeElement(array, 4);
console.log(array);

// варіант 2

// function removeElement(array, item) {
//   for (let i = array.length - 1; i >= 0; i--) {
//     if (array[i] === item) {
//       array.splice(i, 1);
//     }
//   }
// }

// const array = [1, 3, 4, 6, 2, 5, 7];
// removeElement(array, 4);
// console.log(array);

// варіант 1

// function removeElement(array, item) {
//   const index = array.indexOf(item);
//   if (index !== -1) {
//     array.splice(index, 1);
//   }
// }

// const array = [1, 3, 4, 6, 2, 5, 7];
// removeElement(array, 4);
// console.log(array);
