function humanReadable (seconds) {
  let ss = (seconds % 60)
    .toString()
    .padStart(2, '0');

  let mm = (Math.floor(seconds / 60) % 60)
    .toString()
    .padStart(2, '0');

  let hh = (Math.floor(seconds / 3600) % 60)
    .toString()
    .padStart(2, '0');

  return `${hh}:${mm}:${ss}`;
}

module.exports = humanReadable;