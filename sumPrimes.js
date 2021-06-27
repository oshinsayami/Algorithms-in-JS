function sumPrime(num) {
    if (num < 2) {
        return 0;
    }

    const primeNumbers = [];
    for (let i = 2; i <= num; i++){
        let isComposite = false;
        for (const a of primeNumbers) {
            if (i % a === 0) {
                isComposite = true;
                break;
            }
        }

        if (!isComposite) {
            primeNumbers.push(i);
        }
    }

    let sum = 0;
    for (const p of primeNumbers) {
        sum += p;
    }
    console.log(primeNumbers);

    return sum;
}

console.log(sumPrime(10));