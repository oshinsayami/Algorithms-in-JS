const dnaDict = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C'
}

function pairElement(str) {

    let output = [];
    for (const c of str) {
        output.push([c, dnaDict[c]]);
    }
    return output;

}

console.log(pairElement("GCG"));