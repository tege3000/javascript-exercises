const fibonacci = function(end) {
    let next = 0;
    let a = 0;
    let b = 0;
    let sequence = [];
    sequence.push(1);

    if (end > 0) {
        end = Number(end);
    }
    else {
        return "OOPS";
    }

   for(let i = 0; i < end; i++) {
        if(i == 0) {
            next = a + sequence[i];
        }
        else {
            a = sequence[i-1];
            b = sequence[i];
            next = a + b;
        }

        sequence.push(next);
   }

   return sequence[end-1];
};

// Do not edit below this line
module.exports = fibonacci;
