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

    return primeNumbers.reduce((acc, p) => acc + p, 0);
}

console.log(sumPrime(10));