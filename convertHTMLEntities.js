const htmlDict = {
    "&": '&amp',
    "<": '&lt',
    ">": '&gt',
    '"': '&quot',
    "'": '&apos'
}


const convertHTML= str =>
    str.split('').map(char => char in htmlDict ? htmlDict[char] : char).join('');

console.log(convertHTML("Dolce & Gabbana"));