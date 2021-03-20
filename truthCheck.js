function truthCheck(collection, pre) {

    let bool = true

    for (let i in collection) {
        if (!collection[i][pre]) {
            bool = false
        }
    }

    return bool;
}

console.log(truthCheck([{ "user": "Tinky-Winky", "sex": "male" }, { "user": "Dipsy" }, { "user": "Laa-Laa", "sex": "female" }, { "user": "Po", "sex": "female" }], "sex"));