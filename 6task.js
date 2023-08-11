//Task - Write a function which parses string integers. If it's not possible to parse, then add null
function parseInteger(arr) {
    return arr.map(item => isNaN(+item) ? null : item)
}