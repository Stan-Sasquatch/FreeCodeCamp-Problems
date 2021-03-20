function checkCashRegister(price, cash, cid) {
    const variance = cash - price;

    const conversion = {
        "PENNY": 0.01,
        "NICKEL": 0.05,
        "DIME": 0.1,
        "QUARTER": 0.25,
        "ONE": 1,
        "FIVE": 5,
        "TEN": 10,
        "TWENTY": 20,
        "ONE HUNDRED": 100
    }
    const amountOfCurrencyAvailable = (elementCID) => {
        return elementCID[1] / conversion[elementCID[0]]

    }
    const amountOfCurrencyNeeded = (amount, currency) => {

        return Math.floor(amount / conversion[currency])
    }

    const orderedCID = [...cid].sort((a, b) => conversion[b[0]] - conversion[a[0]])

    let runningTotal = variance;
    let change = [];

    for (let i = 0; i < orderedCID.length; i++) {


        const maxCurrency = amountOfCurrencyNeeded(runningTotal, orderedCID[i][0])
        const availableCurrency = amountOfCurrencyAvailable(orderedCID[i])

        const updateChangeArray = (currencyStatus) => {
            change.push([orderedCID[i][0], currencyStatus * conversion[orderedCID[i][0]]])
            runningTotal = runningTotal - (currencyStatus * conversion[orderedCID[i][0]])
            runningTotal = runningTotal.toFixed(2)

        }

        if (maxCurrency <= availableCurrency && maxCurrency > 0) {
            updateChangeArray(maxCurrency)
        }

        else if (maxCurrency > 0 && availableCurrency > 0) {
            updateChangeArray(availableCurrency)
        }



    }

    const initialValue = 0;

    const sumOfCID = orderedCID.reduce((accumulator, currentValue) => accumulator + currentValue[1], initialValue)




    if (runningTotal == 0) {
        console.log("CID: ", sumOfCID)
        console.log("variance: ", variance)
        if (sumOfCID == variance) {
            return { status: "CLOSED", change: cid }
        }
        else {
            return { status: "OPEN", change: change }
        }
    }

    else { return { status: "INSUFFICIENT_FUNDS", change: [] } }



}

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))