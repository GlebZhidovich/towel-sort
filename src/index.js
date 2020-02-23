
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (!matrix) {
        return [];
    }
  return matrix.map((elem, i) => i % 2 === 0 ? elem : elem.reverse()).flat();
}
