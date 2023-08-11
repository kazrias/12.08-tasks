function fakeFilter(arr, callback) {
    if (!Array.isArray(arr))
        throw new TypeError(`Works only with arrays`)
    
    let newArr = []
    for (let i = 0; i < arr.length; i++)
        if (callback(arr[i], i, arr))
            newArr.push(arr[i])
    return newArr
}