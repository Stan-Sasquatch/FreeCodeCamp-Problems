function updateInventory(arr1, arr2) {

    const lookup = (arr, item) => {

        for (let i in arr) {
            if (arr[i].includes(item)) {

                return arr[i][0]
            }

        }
        return 0
    }

    for (let i in arr2) {
        arr2[i][0] = arr2[i][0] + lookup(arr1, arr2[i][1])
    }

    for (let i in arr1) {

        if (lookup(arr2, arr1[i][1]) == 0) {
            arr2.push(arr1[i])
        }


    }


    return arr2.sort((a, b) => {
        let nameA = a[1].toUpperCase()
        let nameB = b[1].toUpperCase()
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;
    })
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

console.log(updateInventory(curInv, newInv));