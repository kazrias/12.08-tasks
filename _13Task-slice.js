function fakeSlice(arr, from = 0, to = arr.length) {
    let newArr = []
    if (from < 0) {
        from = arr.length + from;
        if (from < 0)
            from = 0;
    }
    if (to < 0) {
        to = arr.length + to;
        if (to < 0)
            to = 0
    }
    for (let i = from; i < to; i++) {
        newArr.push(arr[i])
    }
    if (Array.isArray(arr))
        return newArr
    return newArr.join('')
}