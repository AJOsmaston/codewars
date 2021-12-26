const formatDuration = (s) => {
  result_array = []
  result = ""

  //calculate hours
  if ( s >= 3600 ) {
    hours = Math.floor(s/3600)
    result_array.push(pluralise(hours, "hour"))
    s -= (hours * 3600)
  }

  // calculate minutes
  if ( s >= 60 ) {
    minutes = Math.floor(s/60)
    result_array.push(pluralise(minutes, "minute"))
    s -= (minutes * 60)
  }

  //calculate seconds
  if ( s > 0 ) { result_array.push(pluralise(s, "second")) }
  
  //string formatting
  if (result_array.length === 1){
    return result_array[0]
  } else if (result_array.length === 2){
    return `${result_array[result_array.length - 2]} and ${result_array[result_array.length - 1]}`
  } else {
    return result_array.slice(0, -1).join(", ") + ` and ${result_array[result_array.length - 1]}`
  }
};

const pluralise = (input, time) => {
  if ( input >= 1 ) {
    if (input == 1) { return `${input} ${time}`; }
    else { return `${input} ${time}s`; };
  }
}

module.exports = formatDuration;