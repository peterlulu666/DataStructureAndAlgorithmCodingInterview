// mergeArray([1,2,3], [1,3,5])
// Return [1,1,2,3,5]
// Compare arrayOne[0] with arrayTwo[0]
// If arrayOne.length and arrayTow.length !== 0
// If arrayOne[0] === arrayTwo[0]
// mergedArray.push(arrayOne[0]) and mergedArray.push(arrayTwo[0])
// arrayOne[0].shift() and arrayTwo[0].shift()
// If arrayOne[0] < arrayTwo[0]
// mergedArray.push(arrayOne[0])
// arrayOne[0].shift()
// If arrayOne[0] > arrayTwo[0]
// mergedArray.push(arrayTwo[0])
// arrayTwo[0].shift()

var arrayOne = [1, 2, 3];
var arrayTwo = [4, 5, 6];

function mergeArray(arrayOne, arrayTwo) {
    var mergedArray = [];
    while (arrayOne.length !== 0 && arrayTwo.length !== 0) {
        if (arrayOne[0] === arrayTwo[0]) {
            mergedArray.push(arrayOne[0]);
            mergedArray.push(arrayTwo[0]);
            arrayOne.shift();
            arrayTwo.shift();

        } else if (arrayOne[0] < arrayTwo[0]) {
            mergedArray.push(arrayOne[0]);
            arrayOne.shift();

        } else {
            mergedArray.push(arrayTwo[0]);
            arrayTwo.shift();

        }

    }

    for (let i = 0; i < arrayOne.length; i++) {
        mergedArray.push(arrayOne[i]);

    }

    for (let i = 0; i < arrayTwo.length; i++) {
        mergedArray.push(arrayTwo[i]);

    }

    return mergedArray;

}

console.log(mergeArray(arrayOne, arrayTwo));







