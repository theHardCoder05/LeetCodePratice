// Given a substring return the possible of palindrome strings

function findPalindrome(s){
    let output = [];
    let progress = [];
    let finalOutput = [];
    function isPanlidrome(part, left, right){

        while(left < right){
            if(part[left] != part[right])return false;
            [left, right] = [left +=1, right -=1];
        }

        return true;
    }

    function dfs(index){
        if (index == s.length){
            output.push([...progress]);
        }
        else {
            for (let i = index; i < s.length;i++){
                progress.push(s.slice(index, j + 1));
                dfs(index + 1);
                progress.pop();
            }
        }

    }

    dfs(0);
    for(let i = 0; i < output.length;i++){
        let currentPal = output[i];
        let isPalBool = true;
        for(let s of currentPal){
            if(!isPanlidrome(s, 0, s.length - 1)){
                isPalBool = false;
                break;
            }
        }
    if(isPalBool)finalOutput.push(currentPal);
    }
    return finalOutput;
}

s = "aab";
