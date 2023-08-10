const reverseString = function (string) {
    const originalString = string;
    const stringLenght = originalString.length;
    let i = stringLenght;
    let reversedString = '';
    
    for (i; i > 0; i--) {
        reversedString = reversedString + originalString.charAt(i - 1);
    }
    return reversedString;
}

// Do not edit below this line
module.exports = reverseString;
