function humanReadable (seconds) {
  let ss = (seconds % 60)
    .toString()
    .padStart(2, '0');

  let mm = (Math.floor(seconds / 60) % 60)
    .toString()
    .padStart(2, '0');

  return `00:${mm}:${ss}`;
}

module.exports = humanReadable;