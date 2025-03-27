//c06_loops.js


// write a countDigit() function that receives a num (a non-negative integer) and a digit
// (i.e., 0-9). This function returns the number of occurrences of the digit in the num; 
// and returns null if the inputs are invalid. E.g., countDigit(406705,0) returns 2.
// Do NOT use functions related to strings.

function countDigit(num,digit){
    // input validation
    if ( !Number.isInteger(num)) return null ;
    if ( num < 0) return null ;
    if ( !Number.isInteger(digit)) return null ;
    if ( digit < 0 || digit > 9 ) return null ; 
    // counting the number of occurrences of digit
    let counter = 0
    while (num > 0) {
        let lastdigit = num % 10;
        if ( lastdigit == digit ) counter ++;
        num = (num - lastdigit ) / 10;
    }
    return counter

}
function testCountDigit() {
    console.log(countDigit(123456, 5)); // 1
    console.log(countDigit(1001001, 0)); // 3
    console.log(countDigit(123, 1)); // 1
    console.log(countDigit(123, 5)); // 0
    console.log(countDigit(-123, 1)); // null
    console.log(countDigit(123, -1)); // null
    console.log(countDigit(123, 10)); // null
    console.log(countDigit('123', 1)); // null
    console.log(countDigit(123, '1')); // null
    console.log(countDigit(0, 0)); // 1
}


// • write a sumDigit() function that receives a value and returns the summation of the 
// product of each digit and its position: e.g., sumDigit(705) = 7*3+0*2+5*1 = 26; 
// returns null if the input value is not a non-negative integer. 
// Do NOT use functions related to strings.

function testsumDigit(value){
    //value
    if (!Number.isInteger(value) || value < 0) return null;

    //process
    let sum = 0
    let count = 1
    while (value > 0){
        let last = value % 10;
        sum += count * last
        count += 1
        value = (value - last) / 10

    }
    return sum;

}




















function sumDigit(value){
    // input validayion
    if (!Number.isInteger(value) || value < 0 ) return null;

    // processing
    let sum = 0;
    let pos = 1;
    while (value > 0){
        let lastdigit = value % 10;
        sum += pos++ * lastdigit;
        value = (value - lastdigit) / 10;
    }
    // for (let pos = 1; value > 0; pos++){
    //     let lastdigit = value % 10;
    //     sum += pos++ * lastdigit;
    //     value = (value - lastdigit) / 10;
    // }
    
    return sum;
}



// • write a isPrime() function that receives a value and returns true if the input value is 
// a prime number, otherwise returns false. A prime number is a positive integer > 1 and 
// divisible by itself and 1 only and no other positive integers that can divide a prime number.

function isPrime(value){
    //input validaion 
    if ( !Number.isInteger(value)|| value < 2 ) return null
    // main processing
    for (let i = 2; i <= Math.sqrt(value); i++) {
        if (value % i == 0) return false;
    }
    return true;
}
 function secondprime(value){
    if ( !Number.isInteger(value)|| value < 2 ) return null
    //process
    let i = 2;
    while (i <= Math.sqrt(value)) {
        if (value % i == 0) return false;
        i++;
    }
    return true;
}

console.log(secondprime(2))

// • write a nextPrime() function that receives a value and returns the smallest prime number 
// that is greater than the input value. Return null if the input value is not an integer. 
// Use isPrime() function to check if a number is a prime number