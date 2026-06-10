class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const result = [];
        const groups = {};
        for (const word of strs) {
            let words = new Array(26);
            for (let j = 0; j < 26; j++) {
                words[j] = 0;
            }
            for (let i = 0; i < word.length; i++) {
                words[word.charCodeAt(i) - 97] += 1;
            }
            if (!groups[words]) {
                groups[words] = [word];
            } else {
            groups[words].push(word);
            }
        }
        return Object.values(groups);
    }
}
