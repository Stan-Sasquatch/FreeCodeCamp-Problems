function sym(args) {

    let argsArr = [...arguments]
    const binaryDifference = (arrOne, arrTwo) => {

        const differenceArray = [];

        for (let i in arrOne) {
            if (!arrTwo.includes(arrOne[i])) {
                differenceArray.push(arrOne[i])
            }
        }
        for (let j in arrTwo) {
            if (!arrOne.includes(arrTwo[j])) {
                differenceArray.push(arrTwo[j])
            }
        }

        return differenceArray
    }

    const reducer = (accumulator, currentValue) => binaryDifference(accumulator, currentValue)



    const uniqueArr = [...new Set(argsArr.reduce(reducer))]

    return uniqueArr
}

console.log(sym([1, 2, 3, 3], [5, 2, 1, 4]));
