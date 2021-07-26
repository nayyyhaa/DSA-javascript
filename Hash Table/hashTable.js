// HASH TABLE

//generate hash key
const hash = (key, size) => {
    let hashedKey = 0;

    //generate charcode from the string-key
    for(let i=0; i<key.length; i++) {
        hashedKey = key.charCodeAt(i);
    }
    return hashedKey % size;
}

//Implement HashTable
class HashTable {

    constructor() {
        this.size = 10;
        this.buckets = Array(this.size);

        //manage collisions by storing other collections in each of it's buckets
        for(let i=0; i<this.buckets.length; i++) {
            this.buckets[i] = new Map();
        }
    }

    insert(key, value) {
        const idx = hash(key, this.size);
        this.buckets[idx].set(key, value);
    }

    remove(key) {
        const idx = hash(key, this.size);
        let deletedValue = this.buckets[idx].get(key);
        this.buckets[idx].delete(key);
        return deletedValue;
    }

    search(key) {
        const idx = hash(key, this.size);
        let searchedValue = this.buckets[idx].get(key);
        return searchedValue;
    }
 }

 // function implementations

 let hashTable = new HashTable();
 hashTable.insert("fruit", "apple");
 hashTable.insert("vegetable", "tomato");
 hashTable.insert("planet", "venus");
 hashTable.insert("flower", "lily");

 console.log(hashTable);
 /*
 HashTable {
  size: 10,
  buckets: [
    Map(0) {},
    Map(1) { 'vegetable' => 'tomato' },
    Map(0) {},
    Map(0) {},
    Map(1) { 'flower' => 'lily' },
    Map(0) {},
    Map(2) { 'fruit' => 'apple', 'planet' => 'venus' }, //collision
    Map(0) {},
    Map(0) {},
    Map(0) {}
  ]
}
*/

hashTable.search('fruit');
hashTable.remove("fruit");
console.log(hashTable);


