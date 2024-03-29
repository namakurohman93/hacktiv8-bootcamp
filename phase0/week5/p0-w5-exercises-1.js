function sorting(arrNumber) {
  // code di sini
  // return arrNumber.sort((a, b) => a < b)

  for (let i = 0; i < arrNumber.length; i++) {
    for (let j = i + 1; j < arrNumber.length; j++) {
      if (arrNumber[i] < arrNumber[j]) {
        [arrNumber[i], arrNumber[j]] = [arrNumber[j], arrNumber[i]]
      }
    }
  }

  return arrNumber
}

function getTotal(arrNumber) {
  // code di sini
  if (arrNumber.length === 0) {
    return ''
  }
  // let totalMuncul = arrNumber.reduce((a, v, _, ar) => v === ar[0] ? a += 1 : a = a, 0)

  let totalMuncul = 0
  for (let num of arrNumber) {
    if (num === arrNumber[0]) totalMuncul += 1
  }
  
  return `angka paling besar adalah ${arrNumber[0]} dan jumlah kemunculan sebanyak ${totalMuncul} kali`
}

function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber);
  var countHighest = getTotal(listSort);
  return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''
