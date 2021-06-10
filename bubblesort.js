function bubbleSort(array) {
     
    for (let i = 0; i < array.length-1; i++){
        for (let j = 0; j < array.length - 1-i; j++){
            if (array[j] > array[j + 1]) {
                const temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}

console.log(bubbleSort([3,6,8,3,5,1,2,9,6,3,8,1,1]))

