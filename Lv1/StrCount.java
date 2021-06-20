//문자열내 p와 y의 갯수
class Solution {
    boolean solution(String s) {
        boolean answer = true;
        int cntp=0, cnty=0;
        for(int i=0; i<s.length(); i++){
            if(s.charAt(i)=='p'|| s.charAt(i)=='P')
                cntp++;
            else if(s.charAt(i)=='y' || s.charAt(i)=='Y')
                cnty++;
            
        }
        if(cntp==cnty)
            return true;
        else
            return false;
    }
}
