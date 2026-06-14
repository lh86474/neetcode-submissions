class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    /*
     * If target is greater than last element in row, go to next row
     * else, traverse through the row
     * In the else, include a block that if not found, return false;
     * Assume false, return true only if found
     * 
    */
    searchMatrix(matrix, target) {
        // find which row to look for
        let num_row = matrix.length;
        let row_length = matrix[0].length; // aka number columns
        let row_to_search = 0;
        for (let i = 0; i < num_row; i++) {
            if (target > matrix[i][row_length - 1]) {
                row_to_search++;
            }
        }
        // Assume that I have the row to search now, now traverse through the row
        // If there is just one row
        if (row_to_search > num_row - 1) {
            row_to_search = 0;
        }
        for (let j = 0; j < row_length; j++) {
            if (target == matrix[row_to_search][j]) {
                return true;
            }
        }
        return false;
    }
}
