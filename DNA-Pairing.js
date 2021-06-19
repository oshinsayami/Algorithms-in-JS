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

const pairElement = (str) => str.split('').map(c => [c, dnaDict[c]]);

console.log(pairElement("GCG"));