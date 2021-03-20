function addTogether() {
    let argsArray = [...arguments]

    const addToArg = (num) => {
        if (isNaNStrict(num)) {
            return undefined
        }
        else return argsArray[0] + num
    }
    const isNaNStrict = (num) => {
        return !(typeof num == 'number')
    }



    if (argsArray.some(isNaNStrict)) {
        return undefined
    }

    else if (argsArray.length == 2) {
        return argsArray[0] + argsArray[1]
    }

    else {
        return addToArg
    }


}

console.log(addTogether(2)(3));
