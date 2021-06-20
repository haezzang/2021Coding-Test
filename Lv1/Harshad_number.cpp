#include <string>
#include <vector>

using namespace std;

bool solution(int x) {
    int sum=0;
    int y=x;
    while(x>0){   
        sum+=x%10;
        x=x/10;
    }
    if(y%sum==0)
       return true;
    else
        return false;
}