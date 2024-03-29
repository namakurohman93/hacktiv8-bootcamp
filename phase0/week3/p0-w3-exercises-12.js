function tentukanDeretGeometri(arr) {
  // you can only write your code here!
  // if (arr.length <= 2) {
  //   return true
  // }
  // return arr.map((v, i, ar) => i === 0 ? ar[i + 1] / v : v / ar[i - 1])
  //   .every((v, _, ar) => v === ar[0])
  let dif = []
  for (let i = 0; i < arr.length; i++) {
    if (i === arr.length - 1) dif.push(arr[i] / arr[i - 1])
    else dif.push(arr[i + 1] / arr[i])
  }

  for (let i = 1; i < dif.length; i++) {
    if (dif[i] !== dif[0]) return false
  }
  return true
}

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false
