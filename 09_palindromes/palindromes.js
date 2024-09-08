const palindromes = function (string) {
    //split 'string' into substrings wherever there are non-alphanumeric characters (negative match
    //is indicated by the carot ^ in the regex pattern), then join them back together.
    const regex = new RegExp("[^A-Za-z0-9]");
    const newString = string.split(regex).join("").toLowerCase();

    const stringBackwards = newString.split("").reverse().join("");

    if (stringBackwards === newString) return true;
    else return false;
};



// Do not edit below this line
module.exports = palindromes;
