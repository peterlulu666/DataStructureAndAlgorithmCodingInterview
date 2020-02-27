fishArray = ["Nemo"];

function findName(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === "Nemo") {
            console.log("Found Nemo");

        }

    }

}

const findFish = array => {
    array.forEach(fish => {
        if (fish === "Nemo") {
            console.log("Found Nemo");

        }

    })

};

const findNemo = array => {
    for (let fish of array) {
        if (fish === "Nemo") {
            console.log("Found Nemo");

        }

    }

};

findName(fishArray);
findFish(fishArray);
findNemo(fishArray);





