const palindromes = function (text) {
    let processedText = text.toLowerCase().replace(/[^a-z]/g, "");
    let reversedArrThenTurnString = processedText.split("").reverse().join("");
    return (processedText == reversedArrThenTurnString) ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
