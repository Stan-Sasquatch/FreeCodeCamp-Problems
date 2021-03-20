function smallestCommons(arr) {

    const getFullRange = (inputOne, inputTwo) => {

        const min = Math.min(inputOne, inputTwo)
        const max = Math.max(inputOne, inputTwo)

        const rangeArr = []

        for (let i = min; i < max + 1; i++) {

            rangeArr.push(i)
        }

        return rangeArr

    }

    const getFactorList = (num) => {

        const factorList = []

        for (let i = 1; i < num + 1; i++) {

            if (num % i == 0) {
                factorList.push(i)
            }

        }

        return factorList
    }

    const getHCF = (a, b) => {

        const listA = getFactorList(a)
        const listB = getFactorList(b)
        const unionArr = []

        for (let i = 0; i < listA.length; i++) {

            if (listB.includes(listA[i])) {
                unionArr.push(listA[i])
            }
        }

        return Math.max(...unionArr)
    }


    const getLCM = (a, b) => {
        return (a * b) / getHCF(a, b)
    }


    const arrToReduce = getFullRange(arr[0], arr[1])
    const reducer = (accumulator, currentValue) => getLCM(accumulator, currentValue);


    return arrToReduce.reduce(reducer)
}


console.log(smallestCommons([1, 5]));
