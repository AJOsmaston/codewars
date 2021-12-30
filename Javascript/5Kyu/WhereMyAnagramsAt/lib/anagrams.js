const anagrams = (word, words) => {
  if (words.includes(word)) {
    return words
  } 
  return []
};

module.exports = anagrams;