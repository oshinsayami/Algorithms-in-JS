//Binary search in JS
let array = [5, 1, 9, 4, 3, 7, 2, 8, 6];

function binarySearch(arr, value) {
    let high = arr.length - 1;
    let low = 0;
    let mid = 0;

    while (low <= high) {
        mid = Math.floor((high + low) / 2);
        if (arr[mid] === value) {
            return arr[mid];
        } else if (value > arr[mid]) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return "Not found";
}

let sorted = array.sort(function (a, b) { return a - b });

console.log(sorted);

let foundNum = binarySearch(sorted, 98);

console.log(foundNum)