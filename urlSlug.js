// Only change code below this line
function urlSlug(title) {
    return title.toLowerCase().split(" ").filter(element => element !== '').join("-")

}
// Only change code above this line
console.log(urlSlug(" Winter Is  Coming"))