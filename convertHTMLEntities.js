function convertHTML(str) {
    let output = '';

    for (const char of str) {
        if (char === '&') {
            output += '&amp';
        } else if (char === '<') {
            output += '&lt';
        } else if (char === '>') {
            output += '&gt';
        } else if (char === '"') {
            output += '&quot';
        } else if (char === "'") {
            output += '&apos';
        } else {
            output += char;
        }
    }
    return output;
}

console.log(convertHTML("Dolce & Gabbana"));