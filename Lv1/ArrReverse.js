//자연수 뒤집어 배열로 만들기
function solution(n) {
    var answer = [];
    var arr=n.toString().split("");
    for(var i=arr.length-1; i>=0; i--){
    answer.push(+arr[i]);
    }
    return answer;
}
