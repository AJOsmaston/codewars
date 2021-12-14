const duplicateEncoder = (input) => {
    let string = "";
    let input_array = input.split("");
    input_array.forEach(letter => string += "(");
    return string;
}

module.exports = duplicateEncoder;