class Solution {
    /**
     * Incorporates a space delimiter
     * for decode to parse encoded_string back to 
     * individual strings
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded_string= "";
        if (strs.length == 0) {
            return "";
        }
        for (let i = 0; i < strs.length; i++) {
            encoded_string += strs[i].length + "#" + strs[i];
        }
        return encoded_string;
    }

    /**
     * strings are iterable and indexable with charat
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let decoded_string = [];
        // base if encoded_string is empty, which breaks the endWord logic
        if (str.length == 0) {
            return decoded_string;
        }
        let startLength = 0;
        let endLength = 0;
        let length = 0;
        let substring = "";
        for (let i = 0; i < str.length; i++) {
            if (str.charAt(i) == '#') {
                endLength = i;
                length = Number(str.substring(startLength, endLength))
                startLength = i + length + 1;
                console.log(startLength);
                substring = str.substring(i+1, i + 1 + length);
                decoded_string.push(substring);
                i += length;
            }
        }
        return decoded_string
    }
}
