function fakeSplice(arr, start, deleteNum, ...insertedItems) {
    if (!Array.isArray(arr))
        throw new TypeError(`Works only with arrays`)
    
    let removedArray = [];
    if (start < 0) {
        start = arr.length + start;
        if (start < 0) {
            start = 0;
        }
    }
    if (deleteNum > arr.length - start) {
        deleteNum = arr.length - start;
    }
    for (let i = 0; i < deleteNum; i++) {
        removedArray.push(arr[start + i]);
    }
    for (let i = start; i < arr.length - deleteNum; i++) {
        arr[i] = arr[i + deleteNum];
    }
    arr.length -= deleteNum;
    for (let i = arr.length - 1; i >= start; i--) {
        arr[i + insertedItems.length] = arr[i];
    }
    for (let i = 0; i < insertedItems.length; i++) {
        arr[start + i] = insertedItems[i];
    }
    return removedArray;
}