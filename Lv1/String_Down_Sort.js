//문자열 내림차순으로 배치하기
function solution(s) {
    var arr=s.split("").sort().reverse().join("");
    return arr;
}
