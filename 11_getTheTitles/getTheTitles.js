const getTheTitles = function(arr) {
    let titles = [];

    arr.forEach((currentValue) => {
        titles.push(currentValue.title);
    });

    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
