const arr = [[1, 1, 1, 0, 0], [0, 0, 0, 1, 0], [0, 0, 1, 1, 0], [0, 1, 0, 0, 0], [0, 0, 1, 0, 0]]

const minesAdjacentToCoordsInArr = (coords, arr, columns, rows) => {


    let total = 0
    let column = coords[0]
    let row = coords[1]
    const adjacentTotal = (column, row, arr) => {
        if (coordsExist([column, row], columns, rows)) {

            return arr[row][column]
        }
        return 0
    }


    row--

    total += adjacentTotal(column, row, arr)
    column++

    total += adjacentTotal(column, row, arr)
    row++


    total += adjacentTotal(column, row, arr)
    row++

    total += adjacentTotal(column, row, arr)
    column--

    total += adjacentTotal(column, row, arr)
    column--

    total += adjacentTotal(column, row, arr)
    row--

    total += adjacentTotal(column, row, arr)
    row--

    total += adjacentTotal(column, row, arr)
    return total
}
function coordsExist(coords, columns, rows) {
    return (coords[0] >= 0 && coords[0] < columns) && (coords[1] >= 0 && coords[1] < rows)
}


console.log(arr)
console.log(minesAdjacentToCoordsInArr([1, 4], arr, 5, 5))

