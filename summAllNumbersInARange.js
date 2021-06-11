function sumAll(arr) {
    //using ternary operator
    const min = arr[0] < arr[1] ? arr[0] : arr[1];
    const max = arr[0] > arr[1] ? arr[0] : arr[1];

    // let min, max;
    // if (arr[0] > arr[1]) {
    //     max = arr[0];
    //     min = arr[1];
    // } else {
    //     max = arr[1];
    //     min=arr[0];
    // }

    let sum = 0;
    for (let i = min; i <= max; i++){
        sum += i;
    }
    return sum;
}

console.log(sumAll([4, 4]));