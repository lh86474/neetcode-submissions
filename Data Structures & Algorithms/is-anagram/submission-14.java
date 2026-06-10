class Solution {
    public boolean isAnagram(String s, String t) {
        // 1. Same length check
        if (s.length() != t.length()) {
            return false;
        }

        // 2. An array of size 26 to act as our "HashMap"
        int[] counts = new int[26];

        // 3. We can build and check the counts in a single loop!
        for (int i = 0; i < s.length(); i++) {
            // Increment the count for the letter in string s
            counts[s.charAt(i) - 'a']++; 
            
            // Decrement the count for the letter in string t
            counts[t.charAt(i) - 'a']--; 
        }

        // 4. If they are anagrams, every bucket should be exactly 0
        for (int count : counts) {
            if (count != 0) {
                return false;
            }
        }

        return true;
    }
}