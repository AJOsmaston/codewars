const formatDuration = (s) => {

  if (s === 0 ) { return "now"}

  result_array = []

  //calculate years
  if ( s >= 31536000 ) {
    years = Math.floor(s/31536000)
    result_array.push(pluralise(years, "year"))
    s -= (years * 31536000)
  }

  //calculate days
  if ( s >= 86400 ) {
    days = Math.floor(s/86400)
    result_array.push(pluralise(days, "day"))
    s -= (days * 86400)
  }

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
  return formatArray(result_array)
};

const pluralise = (input, time) => {
  if ( input >= 1 ) {
    if (input == 1) { return `${input} ${time}`; }
    else { return `${input} ${time}s`; };
  }
}

const formatArray = (result_array) => {
  if (result_array.length === 1){
    return result_array[0]
  } else if (result_array.length === 2){
    return `${result_array[result_array.length - 2]} and ${result_array[result_array.length - 1]}`
  } else {
    return result_array.slice(0, -1).join(", ") + ` and ${result_array[result_array.length - 1]}`
  }
}

module.exports = formatDuration;