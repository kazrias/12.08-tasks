function fakeReduce(arr, callback, initialValue) {
    if (!Array.isArray(arr))
        throw new TypeError(`Works only with arrays`)
    
    let startFrom = 0;
    if (typeof initialValue === 'undefined') {
        startFrom = 1;
        initialValue = arr[0]
    }
    for (let i = startFrom; i < arr.length; i++) {
        initialValue = callback(initialValue, arr[i], i, arr);
    }
    return initialValue
}