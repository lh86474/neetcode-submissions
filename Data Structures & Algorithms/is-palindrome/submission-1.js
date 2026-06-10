class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let left = 0;
        let right = s.length - 1;

        // Helper function to check if a character is alphanumeric
        const isAlphaNumeric = (char) => {
            const code = char.charCodeAt(0);
            return (code >= 48 && code <= 57) || // 0-9
                   (code >= 65 && code <= 90) || // A-Z
                   (code >= 97 && code <= 122);  // a-z
        };

        while (left < right) {
            // Move left pointer forward if the character is not alphanumeric
            while (left < right && !isAlphaNumeric(s[left])) {
                left++;
            }
            
            // Move right pointer backward if the character is not alphanumeric
            while (left < right && !isAlphaNumeric(s[right])) {
                right--;
            }

            // Compare the valid characters (ignoring case)
            if (s[left].toLowerCase() !== s[right].toLowerCase()) {
                return false;
            }

            // Move both pointers inward for the next comparison
            left++;
            right--;
        }

        return true;
    }
}