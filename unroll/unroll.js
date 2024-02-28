function unroll(squareArray) {
  const flattenArray = squareArray.flatMap(a => a);

  function solve(startIdx, size) {
    if (size <= 0) return []
    if (size === 1) return flattenArray[startIdx]
    const arr = []
    let direction = ['r', 'd', 'l', 'u'] // right, down, left, up
    let idx = startIdx
    for (let d of direction) {
      for (let count = 0; count < size-1; count++) {
        arr.push(flattenArray[idx])
        switch(d) {
          case 'r':
            idx++;
            break;
          case 'd':
            idx += squareArray.length;
            break;
          case 'l':
            idx--;
            break;
          case 'u':
            idx -= squareArray.length;
            break;
        }
      }
    }
    return [...arr, ...solve(startIdx+size+1, size-2)]
  }
  
  
  return solve(0, squareArray.length)
}

module.exports = unroll;
