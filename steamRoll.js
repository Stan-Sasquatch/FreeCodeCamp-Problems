function steamrollArray(arr) {

    const newArr = []
    const flattenElement = (element) => {




        if (element.length > 0 && element !== element[0]) {

            return flattenElement(element[0])
        }

        else {

            return element
        }
    }

    const forEachMethod = (ele) => {
        if (ele.length > 1) {

            for (let i in ele) {
                newArr.push(flattenElement(ele[i]))
            }


        }
        else {
            newArr.push(flattenElement(ele))
        }
    }

    arr.forEach(element => forEachMethod(element))

    return newArr.filter(e => !(Array.isArray(e) & e.length == 0))

}

console.log(steamrollArray([1, [2], [3, [[4]]]]))
