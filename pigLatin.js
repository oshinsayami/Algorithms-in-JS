//Pig Latin takes the front consonant (or consonant cluster) of an Wnglish word, moves it to the end of the word and suffixes an 'ay'.
//If a word begin with vowel , add 'way'

function translatePigLatin(str) {
    const VOWELS = ['a', 'e', 'i', 'o', 'u'];
    const firstChar = str[0];
    if (VOWELS.includes(firstChar)) {
        return str + way;
    }

    let hasNoVowels = true;
    for (const c of str) {
        if (VOWELS.includes(c)) {
            hasNoVowels = false;
            break;
        }
    }
    if (hasNoVowels) {
        return str + ay;

    }

    let consonantClus = '';
    let firstVowelIndex = 0;
    for (let i = 0; i < str.length; i++) {
        const c = str[i];
        if (VOWELS.includes(c)) {
            firstVowelIndex = i;
            break;
        }
        consonantClus += c;
    }
    return str.substring(firstVowelIndex) + consonantClus + 'ay'
}

console.log(translatePigLatin("consonant"));