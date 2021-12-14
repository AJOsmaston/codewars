const duplicateEncoder = (input) => {
    let string = "";
    let input_array = input.split("");
    let scoring = {};
    input_array.forEach(letter => {
        let lCLetter = letter.toLowerCase()
        !scoring[lCLetter] ? scoring[lCLetter] = 1 : scoring[lCLetter] += 1;
    });
    input_array.forEach(letter => {
        string += (scoring[letter] === 1 ? "(" : ")");
    });
    return string;
}

module.exports = duplicateEncoder;