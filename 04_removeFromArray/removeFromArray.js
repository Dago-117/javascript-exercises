const removeFromArray = function (array, ...itemsToBeRemoved) {
    const newArray = array;
    console.log("This is the old array: " + newArray);
    let indexesFound = [];
    let j = 0;


    for (let item of itemsToBeRemoved) {
        console.log("We're removing this item: " + item);
        let index = array.findIndex(element => element === item);
        if (index >= 0) {
            indexesFound.push(index);
        }
    }

    indexesFound.sort();
    indexesFound.reverse();
    console.log(indexesFound);
    for (let index of indexesFound) {
        console.log("This is " + newArray[index] + " index: " + index);

    }

    for (let i = indexesFound.length - 1; i >= 0; i--) {
        console.log("This is j value at the start of the loop: " + j);
        console.log("This is the current item index: " + indexesFound[j]);
        console.log("This is the current item being removed:" + newArray[indexesFound[j]]);
        newArray.splice(indexesFound[j], 1);
        j = j + 1;
        console.log("This is j value at the end of the loop: " + j);
    }
    console.log("This is the new array: " + newArray);

    return newArray;
}
// removeFromArray([1, 2, 3, 4], 7, "tacos");
// removeFromArray(["Banana", "Orange", "Apple", "Mango"], "Orange", "Mango");


// Do not edit below this line
module.exports = removeFromArray;
