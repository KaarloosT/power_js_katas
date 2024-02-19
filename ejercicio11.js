const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

function averageWord(param) {
    let sum = 0;
    for (let i = 0; i < param.length; i++) {
        if (typeof param[i] === 'string') {
            sum = sum + param[i].length;
        }else if (typeof param[i] === 'number') {
            sum = sum + param[i];
        }
    }
    return sum;
}

console.log(averageWord(mixedElements));