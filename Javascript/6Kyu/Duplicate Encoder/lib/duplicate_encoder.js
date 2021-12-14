const duplicateEncoder = (input) => {
    let string = "";
    let input_array = input.split("");
    let scoring = {};
    input_array.forEach(letter => {
        !scoring[letter] ? scoring[letter] = 1 : scoring[letter] += 1;
    });
    input_array.forEach(letter => {
        string += (scoring[letter] === 1 ? "(" : ")");
    });
    return string;
}

module.exports = duplicateEncoder;