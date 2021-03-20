function sumPrimes(num) {
  var runningTotal = 0;
  function isPrime(number) {
    for (var i = 2; i <= Math.floor(number / 2); i++) {
      if (number % i == 0) {
        return false;
      }
    }
    return true;
  }

  for (var j = 2; j <= num; j++) {
    if (isPrime(j)) {
      runningTotal = runningTotal + j;
    }
  }

  return runningTotal;
}
sumPrimes(10);
