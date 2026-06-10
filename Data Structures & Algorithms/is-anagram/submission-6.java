class Solution {
    public boolean isAnagram(String s, String t) {
        if (s.length() == 0 && t.length() == 0) {
            return true;
        }
        if (s.length() == 0 || t.length() == 0) {
            return false;
        }
        if (s.length() != t.length()) {
            return false;
        }
        String sArray[] = new String[s.length()];
        String tArray[] = new String[t.length()];
        for (int i = 0; i < s.length(); i++) {
            sArray[i] = s.substring(i, i + 1);
        }
        for (int i = 0; i < t.length(); i++) {
            tArray[i] = t.substring(i, i + 1);
        }
        Arrays.sort(sArray);
        Arrays.sort(tArray);
        for (int i = 0; i < sArray.length; i++) {
            if (!sArray[i].equals(tArray[i])) {
                return false;
            }
        }
        return true;
}
}
