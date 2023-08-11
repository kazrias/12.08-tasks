function fakeFind(arr, callback) {
    if (!Array.isArray(arr))
        throw new TypeError(`Works only with arrays`)
    
    for (let i = 0; i < arr.length; i++)
        if (callback(arr[i], i, arr))
            return arr[i]
    return
}