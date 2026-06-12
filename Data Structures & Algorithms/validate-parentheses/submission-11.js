class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if (s.length % 2 !== 0) {
            return false;
        }
        let stack = [];
        const mapParentheses = new Map();
        mapParentheses.set(")", "(");
        mapParentheses.set("}", "{");
        mapParentheses.set("]", "[");
        for (let i = 0; i < s.length; i++) {
            let popped = s[i];
            if (popped === "(" || popped === "{" || popped === "[") {
                stack.push(popped);
            } else {
                if (mapParentheses.get(popped) !== stack.pop()) {
                    return false;
                }
            }
        }
        if (stack.length !== 0) {
            return false;
        }
        return true;
    }
}
