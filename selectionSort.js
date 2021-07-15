function selectionSort(array) {

    for (let i = 0; i < array.length - 1; i++){
        let minIndex = i;
        for (let j = i+1; j < array.length; j++){
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }

        const temp = array[i];
        array[i] = array[minIndex];
        array[minIndex] = temp;
    }
    return array;
}

console.log(selectionSort([1, 4, 5, 8, 345, 234, 56, 123, 43, 2, 55, 1, 234, 92]));
