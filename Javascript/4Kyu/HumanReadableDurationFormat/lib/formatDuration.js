const formatDuration = (s) => {
  if (s == 1) { return `${s} second` }
  else { return `${s} seconds` }
};

module.exports = formatDuration;