function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    for (let i in arr) {
        var obj = arr[i]
        var avgAlt = obj.avgAlt;

        const period = Math.round(2 * Math.PI * Math.sqrt((Math.pow(earthRadius + avgAlt, 3) / GM)))



        delete obj.avgAlt

        obj.orbitalPeriod = period

        arr[i] = obj
    }

    return arr;
}

console.log(orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]));
