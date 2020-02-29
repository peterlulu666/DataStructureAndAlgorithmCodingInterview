var str = "Timbits Hi";

function reverseStr(str) {
    // Traverse from the last character to the first character
    // Print from the last character to the first character
    var reversedStr = "";
    for (let i = str.length; i >= 0; i--) {
        reversedStr = reversedStr + str.charAt(i);

    }

    // Return the reversedStr
    return reversedStr;

}

function reversedString(str) {
    // String to array
    // Reverse array
    // Array to string

    // // String to array
    // var array = str.split("");
    //
    // // Reverse array
    // var reversedArray = [];
    // for (let i = 0; i < array.length; i++) {
    //     reversedArray[i] = array[array.length - 1 - i];
    //
    // }

    // String to reversed array
    var reversedArray = [];
    // for (let i = 0; i < str.length; i++) {
    //     reversedArray.push(str[str.length - 1 - i]);
    //     // reversedArray[i] = str[str.length - 1 - i];
    //
    // }
    for (let i = str.length - 1; i >= 0; i--) {
        reversedArray.push(str[i]);

    }

    // Array to string
    var reversedStr = reversedArray.join("");
    return reversedStr;

}

function revStr(str) {
    // String to array
    // Reverse array
    // Array to string
    return str.split("").reverse().join("");

}

const revString = str => [...str].reverse().join("");

console.log(reverseStr(str));
console.log(reversedString(str));
console.log(revStr(str));
console.log(revString(str));



















