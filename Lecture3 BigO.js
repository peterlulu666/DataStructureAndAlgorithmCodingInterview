// Create an array containing Nemo
const name = ["Nemo"];
// Create an array and copy array item 1000 times
const lotOfName = new Array(1000).fill("Nemo");

function findName(nameArray) {
    // Timer start
    let t0 = Date.now();
    for (let i = 0; i < nameArray.length; i++) {
        if (nameArray[i] === "Nemo") {
            console.log("Found name");

        }

    }
    // Timer end
    let t1 = Date.now();
    console.log("Found Nemo in " + (t1 - t0) + " milliseconds.");

}

findName(name);
findName(lotOfName);









