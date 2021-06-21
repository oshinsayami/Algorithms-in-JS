function fearNotLEtter(str) {
    let output;

    for (let i = 0; i < str.length - 1; i++){
        const currentCode = str.charCodeAt(i);
        const nextCode = str.charCodeAt(i + 1);

        if (nextCode - currentCode !== 1) {
            output = String.fromCharCode(currentCode + 1);
            break;
        }
    }

    return output; 
}

console.log(fearNotLEtter("abce"));
console.log(fearNotLEtter("abcdefghijklmnopqrstuvwxyz"));