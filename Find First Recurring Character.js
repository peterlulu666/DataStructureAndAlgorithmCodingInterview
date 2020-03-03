//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined


// Count frequency
// Create hashMap
// If array[i] is not in the hashMap add the array[i] as the key and let the value equal to 1
// If array[i] is in the hashMap increment the value
// If count[array[i] === 2] jump out the for loop

var array = [2, 5, 5, 2, 3, 5, 1, 2, 4];

function firstRecurringCharacter(array) {
    var count = {};
    for (let i = 0; i < array.length; i++) {
        if (count[array[i]] === 2) {
            break;

        } else if (!(array[i] in count)) {
            count[array[i]] = 1;

        } else {
            count[array[i]] = count[array[i]] + 1;
            break;

            // if (count[array[i]] === 2) {
            //     break;
            //
            // }
        }

    }

    for (let key in count) {
        if (count[key] === 2) {
            return key;

        }

    }

    return undefined;

}

console.log(firstRecurringCharacter(array));


//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2