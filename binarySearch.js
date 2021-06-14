//Binary search in JS

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

let array = [2,4,5,9,12,14,45,67,69,80,85];

let sorted = array.sort(function (a, b) { return a - b });

let foundNum = binarySearch(sorted, 67);

console.log(foundNum);