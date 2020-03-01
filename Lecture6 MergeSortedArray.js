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
var arrayTwo = [1, 3, 5];
var arrayThree = [1, 2, 3];
var arrayFour = [4, 5, 6, 10, 11, 12];

function mergeArray(arrayOne, arrayTwo) {
    var mergedArray = [];
    // If arrayOne and arrayTwo are not empty
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

    // If arrayTwo is empty
    // If all the data in arrayTwo have been shifted but arrayOne contains data
    for (let i = 0; i < arrayOne.length; i++) {
        mergedArray.push(arrayOne[i]);

    }

    // If arrayOne is empty
    // If all the data in arrayOne have been shifted but arrayTwo contains data
    for (let i = 0; i < arrayTwo.length; i++) {
        mergedArray.push(arrayTwo[i]);

    }

    return mergedArray;

}

// If arrayOne is empty return arrayTwo
// If arrayTow is empty return arrayOne
// Increment index in arrayOne or arrayTwo
function mergeSortedArray(arrayOne, arrayTwo) {
    if (arrayOne.length === 0) {
        return arrayTwo;

    }

    if (arrayTwo.length === 0) {
        return arrayOne;

    }

    var arrayOneIndex = 0;
    var arrayTwoIndex = 0;
    var arrayOneData = arrayOne[arrayOneIndex];
    var arrayTwoData = arrayTwo[arrayTwoIndex];
    var mergedArray = [];
    while (arrayOneData !== undefined && arrayTwoData !== undefined) {
        if (arrayOneData === arrayTwoData) {
            mergedArray.push(arrayOneData);
            arrayOneIndex++;
            arrayOneData = arrayOne[arrayOneIndex];
            mergedArray.push(arrayTwoData);
            arrayTwoIndex++;
            arrayTwoData = arrayTwo[arrayTwoIndex];

        } else if (arrayOneData < arrayTwoData) {
            mergedArray.push(arrayOneData);
            arrayOneIndex++;
            arrayOneData = arrayOne[arrayOneIndex];

        } else {
            mergedArray.push(arrayTwoData);
            arrayTwoIndex++;
            arrayTwoData = arrayTwo[arrayTwoIndex];

        }


    }

    // Add data from arrayOneIndex to arrayOne.length
    for (let i = arrayOneIndex; i < arrayOne.length; i++) {
        mergedArray.push(arrayOne[i]);

    }

    // Add data from arrayTwoIndex to arrayTwo.length
    for (let i = arrayTwoIndex; i < arrayTwo.length; i++) {
        mergedArray.push(arrayTwo[i]);

    }


    return mergedArray;

}

console.log(mergeArray(arrayOne, arrayTwo));
console.log(mergeSortedArray(arrayThree, arrayFour));













