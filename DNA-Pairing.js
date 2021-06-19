const dnaDict = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C'
}

function pairElement(str) {

    let output = [];
    for (const c of str) {
        if (c === 'A') {
            output.push([c, dnaDict[c]]);
        } else if (c === 'T') {
            output.push([c, dnaDict[c]]);
        } else if (c === 'C') {
            output.push([c, dnaDict[c]]);
        } else if(c === 'G') {
            output.push([c, dnaDict[c]]);
        }
    }
    return output;

}

console.log(pairElement("GCG"));