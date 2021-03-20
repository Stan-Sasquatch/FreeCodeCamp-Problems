// The global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(list, bookName) {
    let newList = [...list]


    newList.push(bookName);


    return newList;

    // Change code above this line
}

// Change code below this line
function remove(list, bookName) {
    let newList = [...list]
    var book_index = list.indexOf(bookName);
    if (book_index >= 0) {

        newList.splice(book_index, 1);
        return newList;

        // Change code above this line
    }
}
console.log(bookList)
// var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
// var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');
console.log(bookList)
console.log(newerBookList)