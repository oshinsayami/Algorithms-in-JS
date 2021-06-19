function pairElement(str) {

    let output = [];
    for (const c of str) {
        if (c === 'A') {
            output.push([c, 'T']);
        } else if (c === 'T') {
            output.push([c, 'A']);
        } else if (c === 'C') {
            output.push([c, 'G']);
        } else if(c === 'G') {
            output.push([c, 'C']);
        }
    }
    return output;

}

console.log(pairElement("GCG"));