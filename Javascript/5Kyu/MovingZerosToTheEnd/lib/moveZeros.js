const moveZeros = (array) => {

  result = [];

  for (var i = array.length - 1; i >= 0; i--) {
    if(array[i] === 0){
      result.push(array[i]);
    }
    else {
      result.unshift(array[i]);
    };
  };
    return result;
};

module.exports = moveZeros;