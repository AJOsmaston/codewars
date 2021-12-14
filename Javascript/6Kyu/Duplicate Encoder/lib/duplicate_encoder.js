const duplicateEncoder = (input) => {
    let string = "";
    let input_array = input.split("");
    let scoring = {};
    input_array.forEach(letter => {
        if (!scoring[letter]) {
            scoring[letter] = 1
        } else {
            scoring[letter] += 1
        }
    });
    input_array.forEach(letter => {
        if (scoring[letter] === 1) {
            string += "("
        } else {
            string += ")"
        }
    });
    return string;
}

module.exports = duplicateEncoder;