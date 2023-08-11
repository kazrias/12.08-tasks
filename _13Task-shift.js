function fakeShift(arr) {
    if (!Array.isArray(arr))
        throw new TypeError(`Works only with arrays`)
    
    if (!arr.length)
        return
    const firstElem = arr[0]
    for (let i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1]
    }
    arr.length--
    return firstElem
}