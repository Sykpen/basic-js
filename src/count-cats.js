module.exports = function countCats(matrix) {
  let result = 0;
  matrix.forEach((subArray) => {
  	subArray.forEach((elem, index) => {
  		if (elem == '^^') {
  			result += 1;
  		}
  	});
  });
  return result;
};
