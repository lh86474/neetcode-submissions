class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let result = new Array(k);
        for (let x = 0; x < k; x++) {
            result[x] = 0;
        }
        let map = new Map();
        for (let i = 0; i < nums.length; i++) {
            if (!map.get(nums[i])){
                map.set(nums[i], 1);
            } else {
                let value = map.get(nums[i]);
                map.set(nums[i], value += 1);
            }
        }
        let pairs = Array.from(map.entries());
        pairs.sort((a, b) => b[1] - a[1]);
        for (let j = 0; j < k; j++) {
            result[j] = pairs[j][0];
        }
        return result;
    }
}
