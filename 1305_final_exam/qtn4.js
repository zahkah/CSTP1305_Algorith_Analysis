
// Find all the duplicates in an array and return which is the smallest one. (5 MARKS)

let duplicates = [4, 10, 5, 1, 11, 5, 1, 4, 1];
let duplicates2 = [1, 10, 1, -1, 10, -1];

function findSmallestDuplicate(arr) {
    let map = new Map();
    let smallest = Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) {
             map.set(arr[i], map.get(arr[i]) + 1);
             if (map.get(arr[i]) < smallest) {
                smallest = arr[i];
            }
        }else {
            map.set(arr[i], 1);
        }
    }
    return smallest;
}

console.log(findSmallestDuplicate(duplicates));
console.log(findSmallestDuplicate(duplicates2));
// Output: 1, -1
// Output: 1, -1
