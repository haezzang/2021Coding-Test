function solution(s) {
    var answer = '';
    var res=[];
    answer=s.split(" ");
    var min=Math.min.apply(null,answer);
    res.push(min);
    var max=Math.max.apply(null,answer);
    res.push(max);
    
    res=res.join(" ");
    return res;
}