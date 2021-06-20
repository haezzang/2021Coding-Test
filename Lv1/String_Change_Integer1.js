//문자열을 정수로 바꾸기
function solution(s) {
    var answer=s.split("");

        if(!(s[0]>='0' && s[0]<='9')){
            if(s[0]==='-'){
            answer.shift();
            answer.toString();
            return +answer.join("")*-1;
            }
           else
           {
               answer.shift();
               answer.toString();
               return +answer.join("");
           }
               
        }
      //answer.join();
    answer.toString();
    return +answer.join("");
}
