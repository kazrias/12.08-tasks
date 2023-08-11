function fakeUnshift(arr, ...newVals) {
    if (!Array.isArray(arr))
        throw new TypeError(`Works only with arrays`)
    
    for (let i = arr.length - 1; i >= 0; i--)
        arr[i + newVals.length] = arr[i]
    for (let i = 0; i < newVals.length; i++)
        arr[i] = newVals[i]
    return arr.length
}