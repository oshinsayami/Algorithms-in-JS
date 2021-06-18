function myReplace(str, before, after) {
    const isCapitalized = before[0] >= 'A' && before[0] <= 'Z';
    let casedAfter;
    if (isCapitalized) {
        casedAfter = after[0].toUpperCase() + after.substring(1);
    } else {
        casedAfter = after[0].toLowerCase() + after.substring(1);
    }
    return str.replace(before, casedAfter);
}

console.log(myReplace("I am Good", "good", "bad"));