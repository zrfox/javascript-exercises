const sumAll = function(num1, num2) {
/*somehow the others didn't work but this if statement does*/
if(typeof(num1)!='number'||typeof(num2)!='number')
{
    return 'ERROR';
}

    let sum= 0;
    let greaterNum=0;
    let lesserNum=0;
    if(num1<0 || num2<0)
    {
        return "ERROR";
    }
    if(isNaN(num1)||isNaN(num2))
    {
        return 'ERROR';
    }
    if(num1>num2){
        greaterNum=num1;
        lesserNum=num2;
    }
    else{
        greaterNum=num2;
        lesserNum=num1;

    }
    
    while(lesserNum<=greaterNum)
    {
        sum+= lesserNum;
        lesserNum++;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
