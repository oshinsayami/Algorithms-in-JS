function destroyer(arr) {
    // const argArr = Array.from(arguments);
    const argArr = [...arguments].slice(1);

    const filteredArr = arr.filter(el => !argArr.includes(el))

    // const filteredArr = [];
    // // for (let i = 0; i < arr.length; i++){
    //     for(const el of arr){
    //     if (!argArr.includes(el)) {
    //         filteredArr.push(el)
    //     }
    // }
    return filteredArr;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));