//Find the missing letter in the passed letter range and return it.

function fearNotLetter(str) {
  var arr = "abcdefghijklmnopqrstuvwxyz".split("");

  var startPoint = arr.indexOf(str.charAt(0));

  for (var i = 0; i < arr.length; i++) {
    if (!(str.charAt(i) == arr[i + startPoint])) {
      return arr[i + startPoint];
    }
  }
}

console.log(fearNotLetter("stvwx"));
