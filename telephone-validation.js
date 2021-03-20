function telephoneCheck(str) {
    const checkStringisNum = (numString) => {

        const numStringArr = numString.split("")
        const regex = new RegExp(/\d/)

        return numStringArr.every(element => regex.test(element))

    }

    let containsBrackets = false

    if (str.charAt(0) == "-") {
        return false
    }
    const strNoSpaces = str.replace(/\s|-/g, '');

    console.log(strNoSpaces)
    const bracketRegex = (/\(/)

    const positionOfOpenBracket = strNoSpaces.search(bracketRegex)
    console.log(positionOfOpenBracket)
    switch (positionOfOpenBracket) {
        case 0:

            if (strNoSpaces.charAt(4) !== ')') {
                return false
            }
            containsBrackets = true
            break
        case 1:
            console.log(strNoSpaces.charAt(5) !== ')')
            if (strNoSpaces.charAt(5) !== ')') {
                return false
            }
            containsBrackets = true
            break

        case -1:
            break
        default:
            return false
    }

    const strNoSpacesNoBrackets = strNoSpaces.replace(/\(|\)/g, '')

    const stringToUse = containsBrackets ? strNoSpacesNoBrackets : strNoSpaces

    switch (stringToUse.length) {
        case 11:

            if (stringToUse.charAt(0) == 1) {

                return checkStringisNum(stringToUse)
            }
            else {
                return false
            }

            break
        case 10:
            return checkStringisNum(stringToUse)

            break
        default:
            return false
    }
}
console.log(telephoneCheck("1 (555) 555-5555"));

