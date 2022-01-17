const orderWeight = (string) => {
  let weightArray = []
  let weightMemo = {}
  let resultArray = []

  string.split(' ').forEach(number => {
    // split into individual numbers
    let numberArray = []
    number.split('').forEach(character => {numberArray.push(parseInt(character))})
    //sum the array (convert to weight)
    let weight = numberArray.reduce((a, b) => a + b, 0)
    weightArray.push(weight)
    //memoize
    weightMemo[weight] = number
  })

  //sort weights in ascending order
  weightArray.sort((a, b) => { return a-b })

  //replace weights with original value
  weightArray.forEach(weight => {
    resultArray.push(weightMemo[weight])
  })

  return resultArray.join(' ')
}

module.exports = orderWeight;