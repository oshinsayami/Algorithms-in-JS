const htmlDict = {
    "&": '&amp',
    "<": '&lt',
    ">": '&gt',
    '"': '&quot',
    "'": '&apos'
}


function convertHTML(str) {
    let output = '';

    for (const char of str) {
        return str.split('').map(char => char in htmlDict ? htmlDict[char] : char).join('');
    }
    return output;
}

console.log(convertHTML("Dolce & Gabbana"));