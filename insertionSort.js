function insertionSort(arr) {

    const array = arr.alice();
    for (let i = 1; i < array.length; i++){
        for (let j = i; j > 0; j--){
            if (array[j] < array[j - 1]) {
                [array[j], array[j-1]] = [array[j - 1],array[j]];
            } else {
                break;
            }
        }
    }
    return array;
}

console.log(insertionSort([1, 4, 2, 8, 97, 45, 34, 67, 987, 678, 876, 54, 43, 32, 2]));