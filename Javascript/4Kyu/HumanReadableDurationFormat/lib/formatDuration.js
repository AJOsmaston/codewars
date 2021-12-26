const formatDuration = (s) => {
  result = ""

  if ( s >= 60 ) {
    minutes = Math.floor(s/60)
    result += pluralise(minutes, "minute")
    if (s !== 60) { result += " and " }
    s -= (minutes * 60)
  }

  if ( s > 0 ) { result += pluralise(s, "second") }
  

  return result;
};

const pluralise = (input, time) => {
  if ( input >= 1 ) {
    if (input == 1) { return `${input} ${time}`; }
    else { return `${input} ${time}s`; };
  }
}

module.exports = formatDuration;