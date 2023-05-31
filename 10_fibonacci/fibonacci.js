const fibonacci = function(index) {
    if(index == 1||index==2)
    return 1;
    else if(index<1)
    return "OOPS";
    let var1 = 1;
    let var2 = 1;
    for(let i = 0; i<index-2; i++)
    {
        if(i % 2 ==0)
        var1 += var2;
        else
        var2 += var1;
    }
    if (var1 >var2)
    return var1;
    else
    return var2;
};

// Do not edit below this line
module.exports = fibonacci;
