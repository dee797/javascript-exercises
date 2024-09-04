const sumAll = function(start, end) {
    let sum = 0;
    
    if ((!Number.isInteger(start) || !Number.isInteger(end)) || (start < 0 || end < 0)) {
        return "ERROR";
    } else if (end > start) {
        for (start; start <= end; start++) {
            sum += start;
        }
    } else {
        for (start; start >= end; start--) {
            sum += start;
        }
    }
    return sum;
};


// Do not edit below this line
module.exports = sumAll;
