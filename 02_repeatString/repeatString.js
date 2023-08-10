const repeatString = function (string, multiplier) {
    const multiplierNum = Number(multiplier);
    if (!(Number.isInteger(multiplierNum) === true && multiplierNum >= 0)) {
        return 'ERROR';
    }

    let multipliedString = '';
    for (let i = 0; i < multiplierNum; i++) {
        multipliedString = multipliedString + string;
    }
    return multipliedString;
};

// Do not edit below this line
module.exports = repeatString;
