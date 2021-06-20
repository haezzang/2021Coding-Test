//정수 내림차순으로 배치하기
function solution(n) {
    var answer = n.toString().split("");

    function compare(a,b){
        if(a>b) return -1;
        if(a=b) return 0;
        if(a<b) return 1;
    } 
    answer.sort(compare);
    var str= answer.join("");
    return +str;
}
