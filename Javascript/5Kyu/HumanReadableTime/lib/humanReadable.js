function humanReadable (seconds) {
  let ss = (seconds % 59).toString().padStart(2, '0')
  return `00:00:${ss}`;
}

module.exports = humanReadable;