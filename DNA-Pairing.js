const dnaDict = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C'
}

// function pairElement(str) {

//     let output = [];
//     for (const c of str) {
//         output.push([c, dnaDict[c]]);
//     }
//     return output;

// }

const pairElement = (str) => {
    const result = str.split('').map(c => [c, dnaDict[c]]);
    return result;
}

console.log(pairElement("GCG"));