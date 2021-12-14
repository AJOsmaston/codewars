const duplicateEncoder = (input) => {
    let result = "";
    let standardisedArray = convert(input)
    let scoring = calculateScores(standardisedArray)
    standardisedArray.forEach(letter => {
        result += (scoring[letter] === 1 ? "(" : ")");
    });
    return result;
}

const convert = (input) => {
    return input.split("").map(letter => letter.toLowerCase())
}

const calculateScores = (array) => {
    let scoring = {};
    array.forEach(letter => {
        !scoring[letter] ? scoring[letter] = 1 : scoring[letter] += 1;
    });
    return scoring;
}

module.exports = duplicateEncoder;