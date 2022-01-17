const orderWeight = (string) => {
  let weightArray = []
  let weightMemo = {}

  string.split(' ').forEach(number => {
    // split into individual numbers
    let weight = number
      .split('')
      .map(character => {return parseInt(character)})
      .reduce((a, b) => a + b, 0)
   
    weightArray.push(weight)

    //memoize
    weightMemo[weight] = number
  })

  //sort weights in ascending order
  weightArray.sort((a, b) => { return a-b })

  //replace weights with original value
  return weightArray.map(weight => {
    return weightMemo[weight]
  }).join(' ')
}

module.exports = orderWeight;