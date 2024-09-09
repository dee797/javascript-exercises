const fibonacci = function(input) {
    let arr = [0, 1];

    input = parseInt(input);
    if (input < 0 || !Number.isInteger(input)) return "OOPS";

    arr[input] = input;
    [...arr].map((currentValue, index) => {
        if (index >= 2) {
            currentValue = arr[index - 1] + arr[index - 2];
            arr[index] = currentValue;
        }
    });

    return arr[input];
};



// Do not edit below this line
module.exports = fibonacci;
