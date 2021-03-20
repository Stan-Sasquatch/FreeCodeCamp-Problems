function sumFibs(num) {
  var current = 1;
  var previous = 1;
  var oddFibs = [1, 1];

  while (current < num) {
    var placeHolder = current;
    current = current + previous;
    previous = placeHolder;

    if (current % 2 !== 0) {
      oddFibs.push(current);
    }
  }

  oddFibs.pop();
  return oddFibs.reduce(function(a, b) {
    return a + b;
  }, 0);
}

console.log(sumFibs(75025));
