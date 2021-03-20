function spinalCase(str) {

    const initialSplit = str.split(/\s|-|_/)
    console.log(initialSplit)
    const removeSpaces = (myString) => {

        return myString.replace(/\s+/g, '')
    }

    const charIsUpper = (char) => {

        return char == char.toUpperCase()

    }

    const noSpacesToHyphenated = (myString) => {
        let upperLocation = [0]
        let sentenceArray = []
        let word = 0
        for (let i = 1; i < myString.length; i++) {

            if (charIsUpper(myString.charAt(i))) {

                upperLocation.push(i)
                sentenceArray.push(myString.slice(upperLocation[word], upperLocation[word + 1]))
                word++

            }

        }
        sentenceArray.push(myString.slice(upperLocation[word]))
        return sentenceArray.join('-')

    }


    return initialSplit.map(strElement => noSpacesToHyphenated(strElement)).map(upperStr => upperStr.toLowerCase()).join('-')

    // return noSpacesToSentenceArray(removeSpaces(str)).map(upperStr => upperStr.toLowerCase()).join('-')


}

console.log(spinalCase("AllThe-small Things"))


