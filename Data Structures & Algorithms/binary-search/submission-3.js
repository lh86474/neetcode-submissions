class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        if (nums.length == 1) {
            if (nums[0] == target) {
                return 0;
            } else {
                return -1;
            }
        }
        let right_index = nums.length - 1;
        let left_index = 0;
        let middle = parseInt((nums.length / 2));
        while (left_index <= right_index) {
            if (nums[middle] > target) {
                right_index = middle - 1;
                middle = parseInt((right_index + left_index) / 2);
            } else if (nums[middle] < target) {
                left_index = middle + 1;
                middle = parseInt((right_index + left_index) / 2);
            }  else {
                return parseInt(middle);
            }
        }
        return -1;
    }
}
