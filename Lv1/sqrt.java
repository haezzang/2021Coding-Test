class Solution {
    public double solution(double n) {
        n=Math.sqrt(n); //Á¦°ö±Ù
        if(n%1>0)
            return -1;
        else
            return Math.pow(n+1,2);
    }
}