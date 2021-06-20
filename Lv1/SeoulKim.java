//서울에서 김서방 찾기
class Solution {
    public String solution(String[] seoul) {
       
        String answer="";
        for(int i=0; i<seoul.length; i++){
            if(seoul[i].equals("Kim")){
               answer="±è¼­¹æÀº "+i+"¿¡ ÀÖ´Ù"; break;
            }
        }
        return answer;
    }
}
