const merge = (leftA, rightA) => {
    const output = [];
    let leftI = 0;
    let rightI = 0;

    while (leftI < leftA.length && rightI < rightA.length) {
        const leftE = leftA[leftI];
        const rightE = rightA[rightI];

        if (leftE < rightE) {
            output.push(leftE);
            leftI++;
        } else {
            output.push(rightE);
            rightI++;
        }
    }
    return [...output, ...leftA.slice(leftI), ...rightA.slice(rightI)];
    
}

const mergeSort = (array) => {
    if (array.length <= 1) {
        return array;
    }
    const middleIndex = Math.floor(array.length / 2);
    const leftA = array.slice(0, middleIndex);
    const rightA = array.slice(middleIndex);

    return merge(mergeSort(leftA), mergeSort(rightA));
}

console.log(mergeSort([5, 2, 7, 3, 9, 4, 0, 6]));