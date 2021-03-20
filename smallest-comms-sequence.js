function smallestCommons(arr) {
  function isDivisibleByRange(num) {
    for (var i = Math.min(arr[0], arr[1]); i <= Math.max(arr[0], arr[1]); i++) {
      if (!(num % i == 0)) {
        return false;
      }
    }
    return true;
  }

  var commonMultipleFound = false;
  var j = 0;
  while (!commonMultipleFound) {
    j++;
    if (isDivisibleByRange(j)) {
      commonMultipleFound = true;
    }
  }
  return j;
}

console.log(smallestCommons([23, 18]));
