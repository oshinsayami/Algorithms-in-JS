let a = [1, 2, 4, 5, 3, 2, 1, 6];
let b = [];
let length = a.length;

for (let i = 0; i < length; i++){
    if (b.indexOf(a[i]) === -1) {
        b.push(a[i]);
    }
}

console.log(b);