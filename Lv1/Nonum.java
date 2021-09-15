class Solution {
    public int solution(int[] numbers) {
        int answer=0;
        int ans=0;
           for(int i=0; i<10; i++){
               answer+=i;
           }
        for(int i=0; i<numbers.length; i++){
            ans+=numbers[i];
        }
        
        return answer-ans;
    }
}