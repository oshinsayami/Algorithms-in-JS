function uniteUnique(arr) {

    const arrOfArrs = [...arguments];

    const newArr = arrOfArrs.flat();

    const uniqArr = [...new Set(newArr)];

    return uniqArr;

    // const output = [];
    // for (const num of newArr) {
    //     if (!output.includes(num)) {
    //         output.push(num);
    //     }
    // }
    // return output;
}

console.log(uniteUnique([1, 3, 4], [5, 2, 1, 4], [2, 1]));