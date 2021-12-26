const diamond = (number) => {
  if ( number <= 0 ) { return null }
  if ( number % 2 == 0 ) { return null }
  return "*\n"
}

module.exports = diamond;