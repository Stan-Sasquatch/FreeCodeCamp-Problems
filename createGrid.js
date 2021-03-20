const columns = 4
const rows = 4


coordsExist = (coords) => {
    return (coords[0] >= 0 && coords[0] < columns) && (coords[1] >= 0 && coords[0] < rows)
}

console.log(coordsExist([3, 3]))
