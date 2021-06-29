function palindrome(str) {
    const lowerCaseStr = str.toLowerCase();
    const alphaNumeric = lowerCaseStr.split('').filter((char) => /[a-zA-Z0-9]/.test(char)).join('');
    
    for (let i = 0; i < Math.floor(alphaNumeric.length/ 2);i++){
        if (alphaNumeric[i] !== alphaNumeric[alphaNumeric.length - 1-i]) {
            return false;
        }
    }
    return true;
}

console.log(palindrome("Race Car"));