const anagrams = (word, words) => {
 
  
  let results = [];

  let sortedWord = word.split('').sort().join('');
  let sortedWords = [];

  words.forEach(element => {
    sortedWords.push(element.split('').sort().join(''));
  });

  if (!sortedWords.includes(sortedWord)) {
    return [];
  };

  for(let i = 0; i < sortedWords.length; i++) {
    if (sortedWords[i] === sortedWord) {
      results.push(words[i]);
    };
  };

  return results;

};

module.exports = anagrams;