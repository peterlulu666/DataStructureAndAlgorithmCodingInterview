// Find the duplicate item
// arrayOne = ['a', 'b', 'c']
// arrayTwo = ['x', 'u', 'c']
// Return true
// arrayOne = ['a', 'b', 'c']
// arrayTwo = ['x', 'y', 'z']
// Return false

// Compare 'a' with 'x'
// Compare 'a' with 'u'
// Compare 'a' with 'c'
// Compare 'b' with 'x'
// Compare 'b' with 'u'
// Compare 'b' with 'c'
// Compare 'c' with 'x'
// Compare 'c' with 'u'
// Compare 'c' with 'c'
// Time complexity is O(n^2)
function duplicateItem() {
    const arrayOne = ['a', 'b', 'c'];
    const arrayTwo = ['x', 'u', 'c'];
    var isDuplicate = false;
    for (let arrayOneIndex = 0; arrayOneIndex < arrayOne.length; arrayOneIndex++) {
        for (let arrayTwoIndex = 0; arrayTwoIndex < arrayTwo.length; arrayTwoIndex++) {
            if (arrayOne[arrayOneIndex] === arrayTwo[arrayTwoIndex]) {
                isDuplicate = true;

            }

        }

    }
    if (isDuplicate) {
        console.log("Found item");

    } else {
        console.log("There is no duplicated item.");

    }

}

duplicateItem();

// Create a hashMap
// 'a' 'b' 'c' are the key
// true and false are value
// Check hashMap['x'] is true or false
// Check hashMap['u'] is true or false
// Check hashMap['c'] is true or false
// Time complexity is O(n)
function duplicateElement() {
    const arrayOne = ['a', 'b', 'c'];
    const arrayTwo = ['x', 'y', 'z'];
    var hashMap = {};
    var isDuplicate = false;
    for (let i = 0; i < arrayOne.length; i++) {
        // Check key in hashMap
        if (!(arrayOne[i] in hashMap)) {
            hashMap[arrayOne[i]] = true;

        }

        // if (!hashMap[i]) {
        //     hashMap[arrayOne[i]] = true;
        //
        // }

    }
    for (let i = 0; i < arrayTwo.length; i++) {
        // Check key in hashMap
        if (arrayTwo[i] in hashMap) {
            isDuplicate = true;

        }

    }
    if (isDuplicate) {
        console.log("Found item");

    } else {
        console.log("There is no duplicated item.");

    }

}

duplicateElement();





