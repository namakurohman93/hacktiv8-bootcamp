function cariMedian(arr) {
  // you can only write your code here!
  return arr.length % 2 === 1 ? arr.find((v, i) => i === Math.floor(arr.length / 2)) : arr.slice(Math.floor(arr.length / 2) - 1, Math.floor(arr.length / 2) + 1).reduce((a, v) => a += v) / 2
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5
