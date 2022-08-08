/*
২. কোন একটা সংখ্যা প্রাইম সংখ্যা (prime number) কিনা। সেটা চেক করার একটা ফাংশন লিখো। 
*/

// function declaration for prime number
function primeNumber(number) {

    // declare variable
    let root = Math.sqrt(number);

    // number less than 2 are not prime
    if (number < 2) {
        return false;
    }

    // only even prime number
    if (number === 2) {
        return true;
    }

    // check this number is not even
    if (number % 2 === 0) {
        return false;
    }

    // check this number has factor 
    for (let i = 3; i < root; i += 2) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

let number = 24738041398529;
let isPrime = primeNumber(number);
if (isPrime) {
    console.log(number, 'is a prime number');
}
else {
    console.log(number, 'is not a prime number');
}