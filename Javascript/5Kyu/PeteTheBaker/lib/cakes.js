function cakes(recipe, available) {
  let count = 0
  let result = []
  for (const [recKey, recValue] of Object.entries(recipe)) {
    for (const [avaKey, avaValue] of Object.entries(available)) {
      if (recKey === avaKey) { result.push(avaValue / recValue) }
    }
    count += 1
  }

  if (count !== result.length) { return 0 }
  return Math.min(...result)
}



module.exports = cakes;