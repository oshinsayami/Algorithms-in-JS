function diffArray(arr1, arr2) {
    // const union = [];
    // for (let i = 0; i < arr1.length; i++){
    //     if (!union.includes(arr1[i])) {
    //         union.push(arr1[i]);
    //     }
    // }
    // for (let i = 0; i < arr2.length; i++){
    //     if (!union.includes(arr2[i])) {
    //         union.push(arr2[i]);
    //     }
    // }

    //using SET (ES6)
    const union = new Set([...arr1, ...arr2])

    const symmDiff = [];
    // for (let i = 0; i < union.length; i++){
    //     const currentEl = union[i];
    for(const currentEl of union){
        if (arr1.includes(currentEl) && !arr2.includes(currentEl)){
            symmDiff.push(currentEl);
        } else if (arr2.includes(currentEl) && !arr1.includes(currentEl)) {
            symmDiff.push(currentEl);
        }
    }
    return symmDiff;


}

console.log(diffArray([1, 2, 3,5], [1,2,3,4,5]));

