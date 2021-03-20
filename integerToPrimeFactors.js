const findFirstFactor = (current) => {
    let factorFound = false
    let i = 2

    do {
        if (current % i == 0) {
            return i
        }
        i++
    } while (!factorFound);
}



const integerToPFList = (int) => {


    let factorArray = []
    const multiplyArrayContents = (accumulator, currentValue) => accumulator * currentValue;
    let current = int

    let allFactorsFound = false





    do {

        let factor = current == 1 ? 1 : findFirstFactor(current)

        factorArray.push(factor)

        current = current / factor

        allFactorsFound = factorArray.reduce(multiplyArrayContents) == int

    } while (!allFactorsFound);


    return factorArray
}

const countInstancesInArray = (num, arr) => {
    let count = 0
    for (i = 0; i < arr.length; i++) {
        if (arr[i] == num) {
            count++
        }
    }
    return count
}

const listToPFObject = (list) => {
    let factorsArray = list

    let primeFactorsObject = {};


    do {
        primeFactorsObject[factorsArray[0]] = countInstancesInArray(factorsArray[0], factorsArray)
        factorsArray = factorsArray.filter(a => a !== factorsArray[0])

    } while (factorsArray.length > 0);

    return primeFactorsObject
}

console.log(listToPFObject([1]))
console.log(listToPFObject(integerToPFList(1836)));

