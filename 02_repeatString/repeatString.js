const repeatString = function(word, count) {

    let result = '';
    if(count > 0) {
        for(let i = 0; i < count;  i++) {
            result += word;
        }
    }
    else if(count < 0) {
        result = "ERROR";
    }
    
    return result;
};

// Do not edit below this line
module.exports = repeatString;
