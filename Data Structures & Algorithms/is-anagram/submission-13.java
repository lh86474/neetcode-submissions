class Solution {
    public boolean isAnagram(String s, String t) {
        if (s.length() != t.length()) return false;
        boolean checkValue = true;
        HashMap<Character, Integer> charCounts = new HashMap<>();
        // I iterate through string to add characters
        // if I see duplicates, get value and add to value
        for (int i = 0; i < s.length(); i++) {
            Character currentCharacter = s.charAt(i);
            if (charCounts.containsKey(currentCharacter)) {
                charCounts.put(currentCharacter, charCounts.get(currentCharacter) + 1);
            } else {
                charCounts.put(currentCharacter, 1);
            }
        }
        for (int j = 0; j < t.length(); j++) {
            Character currentCharacter = t.charAt(j);
        
            if (charCounts.containsKey(currentCharacter)) {
                if (charCounts.get(currentCharacter) == 0) {
                    return false;
                } else {
                    charCounts.put(currentCharacter, charCounts.get(currentCharacter) - 1);
                }
            } else {
                return false;
            }
        }
        return true;
    }
}
