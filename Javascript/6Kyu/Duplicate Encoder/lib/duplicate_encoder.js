const duplicateEncoder = (input) => {
    let result = "";
    let scoring = {};
    let standardised_array = input.split("").map(letter => letter.toLowerCase())
    standardised_array.forEach(letter => {
        !scoring[letter] ? scoring[letter] = 1 : scoring[letter] += 1;
    });
    standardised_array.forEach(letter => {
        result += (scoring[letter] === 1 ? "(" : ")");
    });
    return result;
}

module.exports = duplicateEncoder;