function solution(n) {
    var answer = 0;
    
    answer=n.toString(3)
    answer=answer.split("").reverse().join("");
    answer=parseInt(answer,3);
    return answer;
}