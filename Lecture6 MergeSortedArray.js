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
var arrayFive = [1, 2, 3];
var arraySix = [3, 6, 9, 11, 12];

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
            // Add arrayOneData to mergedArray
            mergedArray.push(arrayOneData);
            // Increment arrayOneIndex
            arrayOneIndex++;
            // Update arrayOneData
            arrayOneData = arrayOne[arrayOneIndex];
            // Add arrayTwoData to mergedArray
            mergedArray.push(arrayTwoData);
            // Increment arrayTwoIndex
            arrayTwoIndex++;
            // Update arrayTwoData
            arrayTwoData = arrayTwo[arrayTwoIndex];

        } else if (arrayOneData < arrayTwoData) {
            // Add arrayOneData to mergedArray
            mergedArray.push(arrayOneData);
            // Increment arrayOneIndex
            arrayOneIndex++;
            // Update arrayOneData
            arrayOneData = arrayOne[arrayOneIndex];

        } else {
            // Add arrayTwoData to mergedArray
            mergedArray.push(arrayTwoData);
            // Increment arrayTwoIndex
            arrayTwoIndex++;
            // Update arrayTwoData
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

// If arrayOne is empty return arrayTwo
// If arrayTow is empty return arrayOne
// Increment index in arrayOne or arrayTwo
function mergeSortedArr(arrayOne, arrayTwo) {
    // If arrayOne is empty
    if (arrayOne.length === 0) {
        return arrayTwo;

    }
    // If arrayTwo is empty
    if (arrayTwo.length === 0) {
        return arrayOne;

    }

    var arrayOneIndex = 0;
    var arrayTwoIndex = 0;
    var arrayOneData = arrayOne[arrayOneIndex];
    var arrayTwoData = arrayTwo[arrayTwoIndex];
    var mergedArray = [];
    // If all the data in arrayOne have been added to the mergedArray
    // If all the data in arrayTwo have been added to the mergedArray
    // 1 4 push 1 to mergedArray
    // 2 4 push 2 to mergedArray
    // 3 4 push 3 to mergedArray
    // undefined 4 push 4 to mergedArray
    // undefined 5 push 5 to mergedArray
    // undefined 6 push 6 to mergedArray
    // undefined undefined
    // If arrayOneData is a valid number arrayTwoData can be a valid number or undefined
    // If arrayTwoData is a valid number arrayOneData can be a valid number or undefined
    // The arrayOneData is a valid number or arrayTwoData is a valid number compare arrayOneData with arrayTwoData
    while (arrayOneData !== undefined || arrayTwoData !== undefined) {
        // // If arrayOneData is undefined and arrayTwoData is undefined jump out the while loop
        // if (arrayOneData === undefined && arrayTwoData === undefined) {
        //     break;
        //
        // }

        // If arrayOneData is equal to arrayTwoData
        if (arrayOneData === arrayTwoData) {
            // Add arrayOneData to mergedArray
            mergedArray.push(arrayOneData);
            // Increment arrayOneIndex
            arrayOneIndex++;
            // Update arrayOneData
            arrayOneData = arrayOne[arrayOneIndex];
            // Add arrayTwoData to mergedArray
            mergedArray.push(arrayTwoData);
            // Increment arrayTwoIndex
            arrayTwoIndex++;
            // Update arrayTwoData
            arrayTwoData = arrayTwo[arrayTwoIndex];

        }

        // If arrayOneData is smaller than arrayTwoData
        else if (arrayOneData < arrayTwoData) {
            // Add arrayOneData to mergedArray
            mergedArray.push(arrayOneData);
            // Increment arrayOneIndex
            arrayOneIndex++;
            // Update arrayOneData
            arrayOneData = arrayOne[arrayOneIndex];

        }

        // If arrayOneData is greater than arrayTwoData
        else if (arrayOneData > arrayTwoData) {
            // Add arrayTwoData to mergedArray
            mergedArray.push(arrayTwoData);
            // Increment arrayTwoIndex
            arrayTwoIndex++;
            // Update arrayTwoData
            arrayTwoData = arrayTwo[arrayTwoIndex];

        }

        // If all the data in arrayOne have been added to the mergedArray and arrayTwo has more data
        // arrayOneData will be undefined and arrayTwoData is a valid number
        else if (arrayOneData === undefined && arrayTwoData !== undefined) {
            // Add arrayTwoData to mergedArray
            mergedArray.push(arrayTwoData);
            // Increment arrayTwoIndex
            arrayTwoIndex++;
            // Update arrayTwoData
            arrayTwoData = arrayTwo[arrayTwoIndex];


        }
        // If all the data in arrayTwo have been added to the mergedArray and arrayOne has more data
        // arrayTwoData will be undefined and arrayOneData is a valid number
        else if (arrayTwoData === undefined && arrayOneData !== undefined) {
            // Add arrayOneData to mergedArray
            mergedArray.push(arrayOneData);
            // Increment arrayOneIndex
            arrayOneIndex++;
            // Update arrayOneData
            arrayOneData = arrayOne[arrayOneIndex];

        }

    }

    // Return mergedArray
    return mergedArray;

}

console.log(mergeArray(arrayOne, arrayTwo));
console.log(mergeSortedArray(arrayThree, arrayFour));
console.log(mergeSortedArr(arrayFive, arraySix));

