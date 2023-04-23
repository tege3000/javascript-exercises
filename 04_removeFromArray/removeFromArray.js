const removeFromArray = function(initArr, ...args) {
    for(const arrEl of args) {
        for(let i = 0; i < initArr.length; i++) {
            if(arrEl === initArr[i]) {
                initArr.splice(i, 1);
                break;
            }

        }
    }

    return initArr;
};

// Do not edit below this line
module.exports = removeFromArray;
