function whatIsInName(collection, source) {
    const arr = [];

    const keys = Object.keys(source);

    for (const obj of collection) {
        let hasAllKeyValuePairs = true;
        for (const key of keys) {
            if (obj[key] !== source[key]) {
                hasAllKeyValuePairs = false;
                break;
            }
        }

        if (hasAllKeyValuePairs) {
            arr.push(obj);
        }
    }
    return arr;
}

console.log(whatIsInName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }));
