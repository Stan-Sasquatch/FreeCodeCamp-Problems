function destroyer(arr) {
  // Remove all the values
  let arr1 = [...arguments];
  let arr2 = arr1.shift();

  return arr2.filter(number => arr1.indexOf(number) == -1);
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
