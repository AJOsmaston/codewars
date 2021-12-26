const diamond = (number) => {
  if ( number <= 0 ) { return null }
  if ( number % 2 == 0 ) { return null }
  
  // Top half
  let top = ""
  for (let i = 1; i < (number / 2); i++) {
    top += " ".repeat(Math.ceil(number / 2) - i) + "*".repeat(2*i-1) + "\n"
  }

  let middle = "*".repeat(number) + "\n"

  // Bottom half
  let bottom = ""
  for (let i = 1; i < (number / 2); i++) {
    bottom += " ".repeat(i) + "*".repeat(number - (2*i)) + "\n"
  }

  return top + middle + bottom;
}

module.exports = diamond;