//제일 작은 수 제거하기
function solution(arr) {
    var answer = [];
    var cpy=arr.slice()
    if(arr.length==1){
       answer[0]=-1;
    return answer;
    }
    
    function compare(a,b){
        if(a<b) return 1;
        if(a==b)return 0;
        if(a>b)return -1;
    }
    answer=cpy.sort(compare);
    var p=answer.pop();
    arr.splice(arr.indexOf(p),1);
    return arr;
}
