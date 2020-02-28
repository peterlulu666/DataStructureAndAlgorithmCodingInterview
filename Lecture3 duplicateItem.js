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
function lecture3DuplicateItem() {
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

lecture3DuplicateItem();

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
    for (let arrayOneIndex = 0; arrayOneIndex < arrayOne.length; arrayOneIndex++) {
        // Check key in hashMap
        if (!(arrayOne[arrayOneIndex] in hashMap)) {
            hashMap[arrayOne[arrayOneIndex]] = true;

        }

        // if (!hashMap[arrayOneIndex]) {
        //     hashMap[arrayOne[arrayOneIndex]] = true;
        //
        // }

    }
    for (let arrayTwoIndex = 0; arrayTwoIndex < arrayTwo.length; arrayTwoIndex++) {
        // Check key in hashMap
        if (arrayTwo[arrayTwoIndex] in hashMap) {
            isDuplicate = true;

        }
        // if (hashMap[arrayTwo[arrayTwoIndex]]){
        //     isDuplicate = true;
        //
        // }

    }
    if (isDuplicate) {
        console.log("Found item");

    } else {
        console.log("There is no duplicated item.");

    }

}

duplicateElement();

function findDuplicate() {
    const arrayOne = ['a', 'b', 'c'];
    const arrayTwo = ['x', 'y', 'z'];
    return arrayOne.some(item => arrayTwo.includes(item))

}

console.log(findDuplicate());







