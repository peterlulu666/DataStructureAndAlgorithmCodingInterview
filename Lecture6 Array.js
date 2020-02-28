var stringArray = ["a", "b", "c", "d"];

// Grab string at index 2
console.log(stringArray[2]);

// Add last
// O(1)
stringArray.push("e");
console.log(stringArray);

// Remove last
// O(1)
console.log(stringArray.pop());
console.log(stringArray.pop());
console.log(stringArray);

// Add first
// O(n)
stringArray.unshift("x");
console.log(stringArray);

// Add middle
// O(n)
stringArray.splice(2, 0, "Alice");
console.log(stringArray);

// Remove first
// O(n)
console.log(stringArray.shift());
console.log(stringArray);




