const anagrams = (word, words) => {
  let results = [];

  for(let i = 0; i < words.length; i++) {
    if (sortByLetter(words[i]) === sortByLetter(word)) {
      results.push(words[i]);
    };
  };

  return results;
};

const sortByLetter = (input) => {
  return input.split('').sort().join('');
}

module.exports = anagrams;