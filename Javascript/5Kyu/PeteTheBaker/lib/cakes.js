function cakes(recipe, available) {
  for (const [recKey, recValue] of Object.entries(recipe)) {
    for (const [avaKey, avaValue] of Object.entries(available)) {
      return avaValue / recValue
    }
  }
}

module.exports = cakes;