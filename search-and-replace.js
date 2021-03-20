function myReplace(str, before, after) {
  /* var arr = str.split(" ");
  //solution 1
   for (var i = 0; i < arr.length; i++) {
    if (arr[i] == before) {
      arr[i] = after;
    }
  }

  //solution 2?
  arr.map(i => {
    if (i == before) {
      i = after;
    }
    return i;
  });

  str = arr.join(" ");

  */
  function capitalise(word) {
    var newWord = word.charAt(0).toUpperCase() + word.substring(1);
    return newWord;
  }

  function decapitalise(word) {
    var newWord = word.charAt(0).toLowerCase() + word.substring(1);
    return newWord;
  }

  str = str.replace(capitalise(before), capitalise(after));
  str = str.replace(decapitalise(before), decapitalise(after));

  return str;
}

console.log(
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped")
);
