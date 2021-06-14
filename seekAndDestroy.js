function destroyer(arr) {
    // const argArr = Array.from(arguments);
    const argArr = [...arguments].slice(1);

    const filteredArr = [];
    for (let i = 0; i < arr.length; i++){
        if (!argArr.includes(arr[i])) {
            filteredArr.push(arr[i])
        }
    }
    return filteredArr;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));