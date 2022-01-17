const orderWeight = (string) => {
  let weightMemo = {}

  let weightArray = string.split(' ').map(number => {
    // split into individual numbers
    let weight = number
      .split('')
      .map(character => {return parseInt(character)})
      .reduce((a, b) => a + b, 0)

    //memoize
    if (weightMemo[weight]) {
      weightMemo[weight] = number < weightMemo[weight] ? `${number} ${weightMemo[weight]}`: `${weightMemo[weight]} ${number}`
    } else {
      weightMemo[weight] = number
      return weight
    }
   
  }).sort((a, b) => { return a-b })

  //replace weights with original value
  return weightArray.map(weight => {
    return weightMemo[weight] 
  }).join(' ').trim()
}

module.exports = orderWeight;