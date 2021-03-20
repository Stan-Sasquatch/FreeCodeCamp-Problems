function uniteUnique(arr) {
  var arr1 = Object.values(arguments);
  var newArr = [];

  for (var i = 0; i < arr1.length; i++) {
    for (var j = 0; j < arr1[i].length; j++) {
      if (newArr.indexOf(arr1[i][j]) == -1) {
        newArr.push(arr1[i][j]);
      }
    }
  }
  return newArr;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
