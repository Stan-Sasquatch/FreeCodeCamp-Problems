createChallenge = challengeLength => {
  let challengeArray = [];

  for (i = 0; i < challengeLength; i++) {
    let num = Math.floor(Math.random() * 4 + 1);

    switch (num) {
      case 1:
        challengeArray.push("Yellow");

        break;

      case 2:
        challengeArray.push("Green");

        break;
      case 3:
        challengeArray.push("Blue");

        break;
      case 4:
        challengeArray.push("Red");

        break;
    }
  }
  return challengeArray;
};
console.log(createChallenge(6));
