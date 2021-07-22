function quickSort(array) {
    if (array.length === 1) {
        return array;
    }
    const pivot = array[array.length - 1];
    const leftA = [];
    const rightA = [];
    for (let i = 0; i < array.length - 1; i++){
        if (array[i] < pivot) {
            leftA.push(array[i]);
        } else {
            rightA.push(array[i]);
        }
    }

    if (leftA.length > 0 && rightA.length > 0) {
        return [...quickSort(leftA), pivot, ...quickSort(rightA)];
    } else if (leftA.length > 0) {
        return [...quickSort(leftA), pivot];
    } else {
        return [pivot, ...quickSort(rightA)];
    }
}

const arr = [2, 6, 3, 7, 4, 8];
console.log(quickSort(arr));