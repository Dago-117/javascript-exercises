const sumAll = function (numA, numB) {
    if ((numA < 0 || numB < 0) || (!Number.isInteger(numA) || !Number.isInteger(numB))) {
        return 'ERROR';
    }

    const largestNumber = Math.max(numA, numB);
    const smallestNumber = Math.min(numA, numB);
    var numOfIterations = (largestNumber - smallestNumber);
    var sum = smallestNumber;
    var nextNumber = smallestNumber;
    console.log(numOfIterations);

    for (let i = 0; i < numOfIterations; i++) {
        sum = sum + (nextNumber + 1);
        nextNumber++;
    }
    return sum;
};
console.log(sumAll(1, [1, 2]));
// Do not edit below this line
module.exports = sumAll;
