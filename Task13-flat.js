function fakeFlat(arr) {
    if (!Array.isArray(arr))
        throw new TypeError(`Works only with arrays`)
    
    let newArr = [];
    for (let val of arr) {
        if (Array.isArray(val))
            newArr.push(...fakeFlat(val))
        else
            newArr.push(val)
    }
    return newArr
}