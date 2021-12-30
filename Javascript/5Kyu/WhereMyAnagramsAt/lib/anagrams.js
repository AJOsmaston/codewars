const anagrams = (word, words) => {
  if (!words.includes(word)) {
    return []
  };
  
  let results = [];

  words.forEach(element => {
    if (element === word) { results.push(element) }
  });

  return results;

};

module.exports = anagrams;