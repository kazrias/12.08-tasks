function fakePush(arr, ...newVals) {
    if (!Array.isArray(arr))
        throw new TypeError(`Works only with arrays`)
    
    for (let i = 0; i < newVals.length; i++) {
        arr[arr.length] = newVals[i]
    }
    return arr.length
}