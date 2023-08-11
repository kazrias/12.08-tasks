/*
Task - Create a function that takes an array of numbers arr, a string str and return an array of numbers as
per the following rules:
- "Asc" returns a sorted array in ascending order.
- "Desc" returns a sorted array in descending order.
*/
function sortBy(arr, type) {
    if (typeof type === 'undefined')
        return arr
    if (type === 'Asc')
        return arr.sort((a, b) => a - b)
    if (type === 'Desc')
        return arr.sort((a, b) => -a + b)
    return 'Wrong type'
}