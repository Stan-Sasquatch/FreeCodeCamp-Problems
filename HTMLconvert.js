function convertHTML(str) {
    let strArr = [str]
    const entityRef = [{ regex: /&/g, entity: "&amp;" }, { regex: /</g, entity: "&lt;" },
    { regex: />/g, entity: "&gt;" }]

    for (let i = 0; i < entityRef.length; i++) {

        // const re = new RegExp(entityRef[i].char, 'g')
        console.log(entityRef[i].regex)
        strArr[0] = strArr[0].replace(entityRef[i].regex, entityRef[i].entity)


    }

    return strArr[0];
}

console.log(convertHTML("Hamburgers < Pizza < Tacos"));
