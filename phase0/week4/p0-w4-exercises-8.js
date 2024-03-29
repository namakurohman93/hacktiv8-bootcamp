function tukarBesarKecil(kalimat) {
  // you can only write your code here!
  // return kalimat.split('')
  //   .map(v => v.toUpperCase() === v ? v.toLowerCase() : v.toUpperCase())
  //   .join('')

  let result = ''
  
  for (let str of kalimat.split('')) {
    if (str.toUpperCase() === str) result += str.toLowerCase()
    else result += str.toUpperCase()
  }

  return result
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"
