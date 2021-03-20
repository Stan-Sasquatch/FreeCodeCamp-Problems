function checkCashRegister(price, cash, cid) {
  var textToAmount = [
    ["PENNY", 0.01],
    ["NICKEL", 0.05],
    ["DIME", 0.1],
    ["QUARTER", 0.25],
    ["ONE", 1],
    ["FIVE", 5],
    ["TEN", 10],
    ["TWENTY", 20],
    ["ONE HUNDRED", 100]
  ];

  var statusMessage = "OPEN";

  function registerOutput(outputStatus, outputDue) {
    this.status = outputStatus;
    this.change = outputDue;
  }

  function registerCashTotal(cashArray) {
    var total = 0;
    for (var i = 0; i < cashArray.length; i++) {
      total = total + cashArray[i][1];
    }
    return total.toFixed(2);
  }

  function changeDue(amount, cid) {
    change = [
      ["NICKEL", 0],
      ["DIME", 0],
      ["QUARTER", 0],
      ["ONE", 0],
      ["FIVE", 0],
      ["TEN", 0],
      ["TWENTY", 0],
      ["ONE HUNDRED", 0]
    ];
    for (var i = cid.length; i > 0; i--) {
      numberOf = cid[i][0] / textToAmount[i][0];
      for (var j = numberOf; j > 0; j--) {
        if (amount - j * textToAmount[i][0] >= 0) {
          change[i][1] = numberOf * textToAmount[i][0];
          amount = amount - j * textToAmount[i][0];
          break;
        }
      }
    }

    return change;
  }

  console.log(changeDue(5, cid));

  var change = changeDue(cash - price, cid);

  output = new registerOutput(statusMessage, change);

  return output;
}

checkCashRegister(19.5, 20, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]);
