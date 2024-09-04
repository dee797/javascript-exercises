const removeFromArray = function(array, ...args) {
    return array.filter(arrayElement => !(args.includes(arrayElement)));
};


// Do not edit below this line
module.exports = removeFromArray;
