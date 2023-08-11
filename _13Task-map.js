function fakeMap(arr, callback) {
    if (!Array.isArray(arr))
       throw new TypeError(`Works only with arrays`)
      
    let newArr = []
    for (let i = 0; i < arr.length; i++)
       newArr.push(callback(arr[i], i, arr))
    return newArr
 }