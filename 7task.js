//Task - Given an array, return a new array that only includes the numbers.
function getNums(arr) {
    return arr.filter(item => typeof item === 'number' && !isNaN(item))
}