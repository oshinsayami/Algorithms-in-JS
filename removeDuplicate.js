let a = [1, 2, 4, 5, 3, 2, 1, 6];
obj = {};
for (let i of a) {
    obj[i] = true;
}

let b = Object.keys(obj);

console.log(b);