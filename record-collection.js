// Setup
var collection = {
    2548: {
        album: "Slippery When Wet",
        artist: "Bon Jovi",
        tracks: [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    2468: {
        album: "1999",
        artist: "Prince",
        tracks: [
            "1999",
            "Little Red Corvette"
        ]
    },
    1245: {
        artist: "Robert Palmer",
        tracks: []
    },
    5439: {
        album: "ABBA Gold"
    }
};

// Only change code below this line
function updateRecords(id, prop, value) {


    const propIsTracks = prop == "tracks"
    const valueIsEmpty = value == ""

    if (valueIsEmpty) {
        delete collection[id][prop]
    }

    else if (propIsTracks) {

        if (!("tracks" in collection[id])) {

            collection[id][prop] = []
        }
        collection[id][prop].push(value)
    }

    else {
        collection[id][prop] = value
    }









    return collection;
}

console.log(updateRecords(5439, "artist", "ABBA"))
