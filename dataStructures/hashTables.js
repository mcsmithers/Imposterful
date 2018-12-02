// The key is the hash of the value that's being stored

const HashTable = function () {
    let count = 0;
    let store = {};

    const createHash = function (val) {
        // DO NOT DO THIS
        return valtoString();
    }

    const add = function (val) {
        count++;
        const idx = createHash(val);
        store[idx] = val;
    }

    const contains = function (val) {
        const idx = createHash(val);
        return store[idx] !== undefined;
    }

    const remove = function (key) {
        count--;
        const idx = createHash(key);
        delete store[idx];
    }
    return {
        add: add,
        remove: remove,
        count: count,
        contains: contains
    }
}

const hash = new HashTable();
hash.add(1);
hash.add(2);
console.log(hash.contains(2));

// // Finding duplicates in an array is a popular interview question
const duplicateDays = function (daysRequested) {
    const hash = new HashTable();
    for (let day of daysRequested) {
        if (hash.contains(day)) {
            return day;
        } else {
            hash.add(day);
        }
    }
    return 0;
}
const daysOff = [1, 2, 3, 3, 4, 5];
console.log(duplicateDays(daysOff));