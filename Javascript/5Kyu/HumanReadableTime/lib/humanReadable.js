function humanReadable (seconds) {
  let ss = seconds % 60

  let mm = (Math.floor(seconds / 60) % 60)

  let hh = Math.floor(seconds / 3600)

  return `${format(hh)}:${format(mm)}:${format(ss)}`;
}

const format = (input) => {
  return input.toString().padStart(2, '0');
}

module.exports = humanReadable;