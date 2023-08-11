//Task - Given an array, return the sum of numbers that are 18 or over.
function sumNums(arr) {
    return arr.reduce((curr, next) => next > 18 ? curr + next : curr, 0)
}