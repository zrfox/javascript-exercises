const reverseString = function(string) {

    let newString ="";
    for(i = string.length - 1;i>-1;i--)
    {
        newString +=string[i];
    }
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
