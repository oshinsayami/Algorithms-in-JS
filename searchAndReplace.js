function myReplace(str, before, after) {
    const isCapitalized = before[0] >= 'A' && before[0] <= 'Z';
    let casedAfter;
    if (isCapitalized) {
        casedAfter = after[0].toUpperCase() + after.substring(1);
    } else {
        casedAfter = after[0].toLowerCase() + after.substring(1);
    }
    let replacedStr = str;
    for (let i = 0; i < replacedStr.length; i++){
        const iString = replacedStr.substring(i, i + before.length);
        if (iString === before) {
            replacedStr = replacedStr.substring(0, i) + casedAfter + replacedStr.substring(i + before.length);
            i += casedAfter.length - 1;
        }
    }
    return replacedStr;
}

console.log(myReplace("I am Good girl", "Good", "bad"));