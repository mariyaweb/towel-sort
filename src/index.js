
module.exports = function towelSort(matrix) {
    let resArr = [];

    if (matrix === undefined || matrix.length === 0) {
        return resArr;
    }
    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 == 0 || i == 0) {
            for (let k = 0; k < matrix[i].length; k++) {
                resArr.push(matrix[i][k]);
            }
        } else {
            for (let j = matrix[i].length - 1; j >= 0; j--) {
                resArr.push(matrix[i][j]);
            }
        }

    }
    return resArr;
}
