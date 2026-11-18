class Solution {
    /**
     * First, I'll try brute force with nested loop, O(n^2) time complexity
     * O(n^2) is too slow for solution, so rather than recalculating products, store them
     * the question is: how to store them?
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let result = [];
        let prefixProducts = [];
        prefixProducts.push(nums[0]);
        let suffixProducts = [];
        suffixProducts[nums.length - 1] = nums[nums.length - 1] ;
        // get prefix
        for (let i = 1; i < nums.length; i++) {
            let product = 1;
            product = prefixProducts[i-1] * nums[i];
            prefixProducts.push(product);
        }
        // get suffix
        for (let j = nums.length - 2; j >= 0; j--) {
            let product = 1;
            product = suffixProducts[j + 1] * nums[j];
            suffixProducts[j] = product;
        }
        // now calculate for result products
        for (let x = 0; x < nums.length; x++) {
            // access suffix and prefix
            let prefix = x - 1;
            let suffix = x + 1;
            let element = 1;
            if (prefix < 0) {
                element = suffixProducts[x + 1];
                result.push(element);
            } else if (suffix > nums.length - 1) {
                element = prefixProducts[x-1];
                result.push(element);
            } else {
                element = suffixProducts[x + 1] * prefixProducts[x-1];
                result.push(element);
            }
        }
        return result;
    }
}
