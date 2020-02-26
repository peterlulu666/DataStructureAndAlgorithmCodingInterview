const name = ["Nemo"];
const lotOfName = new Array(1000).fill("Nemo");

function findName(nameArray) {
    let t0 = Date.now();
    for (let i = 0; i < nameArray.length; i++) {
        if (nameArray[i] === "Nemo") {
            console.log("Found name");

        }

    }
    let t1 = Date.now();
    console.log("Found Nemo in " + (t1 - t0) + " milliseconds.");

}

findName(name);
findName(lotOfName);









