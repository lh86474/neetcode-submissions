class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
      const result = [];
      let left_index = 0;
      let right_index = numbers.length - 1;
      while (left_index < right_index) {
        if (numbers[left_index] + numbers[right_index] > target) {
            right_index--;
        } else if (numbers[left_index] + numbers[right_index] < target) {
            left_index++;
        } else if (numbers[left_index] + numbers[right_index] == target) {
            result[0] = left_index + 1;
            result[1] = right_index + 1;
            break;
        } else {
            left_index++;
            right_index--;
        }
      }
      return result;
    }
}
