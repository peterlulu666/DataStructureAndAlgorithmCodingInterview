// // Exercise Hash Tables
// class HashTable {
//     constructor(size){
//         this.data = new Array(size);
//     }
//
//     _hash(key) {
//         let hash = 0;
//         for (let i =0; i < key.length; i++){
//             hash = (hash + key.charCodeAt(i) * i) % this.data.length
//         }
//         return hash;
//     }
// }
//
// const myHashTable = new HashTable(50);
// myHashTable.set('grapes', 10000)
// myHashTable.get('grapes')
// myHashTable.set('apples', 9)
// myHashTable.get('apples')

class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
        return hash;
    }

    get(key) {
        console.log(this.data[this._hash(key)][0][1]);

    }

    set(key, value) {
        var address = this._hash(key);
        if (this.data[address] === undefined) {
            this.data[address] = [];
            this.data[address].push([key, value]);

        } else {
            this.data[address].push([key, value]);

        }

        return this.data;
    }

}

const myHashTable = new HashTable(50);
console.log(myHashTable.set('grapes', 10000));
myHashTable.get('grapes');
console.log(myHashTable.set('apples', 9));
myHashTable.get('apples');

