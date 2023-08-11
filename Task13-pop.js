function fakePop(arr) {
   if (!Array.isArray(arr))
      throw new TypeError(`Works only with arrays`)
   
   if (!arr.length) return undefined
   const lastElem = arr[arr.length - 1]
   arr.length--;
   return lastElem
}