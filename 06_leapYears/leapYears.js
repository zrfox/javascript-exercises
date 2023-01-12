const leapYears = function(year) {

    yearVar = year;

    if(yearVar%4==0)
    {
        if(yearVar%400==0)
            return true;
        if(yearVar%100!=0)
            return true;
        else 
        return false;
    }
    else{
        return false;
    }

};

// Do not edit below this line
module.exports = leapYears;
