
function addBinary(a, b){
    let carry = 0;
    let i = a.length - 1;
    let j = b.length - 1;
    let result =[];
    while (i>=0 || j >=0 || carry){
        sum = carry

        if(i >= 0){
            sum += parseInt(a[i]);
            i-=1;
        }
        if(j >= 0){
            sum += parseInt(a[j]);
            j-=1;
        }

        result.push((sum %2 ).toString());
        carry = Math.floor(sum /2);
    }

    return result.reverse().join('');
}

a = "11"
b = "1"

console.log(addBinary(a,b))