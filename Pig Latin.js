function translatePigLatinWord(str) {
  var vowels = ["a", "e", "i", "o", "u"];
  var consonantCluster = "";
  var remainderString = "";
  function isVowel(str, index) {
    for (var i = 0; i < vowels.length; i++) {
      if (str.charAt(index) == vowels[i]) {
        return true;
      }
    }
    return false;
  }

  if (isVowel(str, 0)) {
    return (str = str + "way");
  } else {
    for (var i = 0; i < str.length; i++) {
      if (!isVowel(str, i)) {
        consonantCluster = consonantCluster + str.charAt(i);
      } else {
        remainderString = str.slice(i);
        break;
      }
    }
  }
  return remainderString + consonantCluster + "ay";
}

function translatePigLatinSentence(sentence) {
  var arr = [];
  /* arr = sentence.split(" ");
  arr = arr.map(translatePigLatinWord); */
  arr = sentence.split(" ").map(translatePigLatinWord);
  sentence = arr.join(" ");

  return sentence;
}

console.log(translatePigLatinSentence("Hello Pig Latin World"));
