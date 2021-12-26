const diamond = (number) => {
  if ( number <= 0 ) { return null }
  if ( number % 2 == 0 ) { return null }
  
  // Top half
  let top = ""
  for (let i = 1; i < (number / 2); i++) {
    top += " ".repeat(i) + "*".repeat(i) + "\n"
  }

  let middle = "*".repeat(number) + "\n"

  // Bottom half
  let bottom = ""
  for (let i = 1; i < (number / 2); i++) {
    bottom += " ".repeat(i) + "*".repeat(i) + "\n"
  }

  return top + middle + bottom;
}

module.exports = diamond;