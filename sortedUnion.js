function uniteUnique(arr) {

    const arrOfArrs = [...arguments];

    const output = [];
    for (const arr of arrOfArrs) {
        for (const num of arr) {
            if (!output.includes(num)) {
                output.push(num);
            }
        }
    }
    return output;
}

console.log(uniteUnique([1, 3, 4], [5, 2, 1, 4], [2, 1]));