//핸드폰 번호 가리기
class Solution {
    public String solution(String phone_number) {
        String answer = "";
        
        int cnt=phone_number.length();
        for(int i=0; i<cnt; i++){
        if(i<cnt-4)
            answer+="*";
        
            else{
            answer+=phone_number.substring(cnt-4);
            break;
            }
        }
        return answer;
    }
}
