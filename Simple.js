function isPalindrome(str) {
    const original = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
    return original === original.split('').reverse('').join('')
}

console.log(isPalindrome('A man, a plan, a canal: Panama'))
console.log(isPalindrome('race a car'))


function extractNumberFromString(str){
    const regularExpression = /\d+/g
    const numbers = str.match(regularExpression)
    return numbers.toString()
}

console.log(extractNumberFromString("The 2023 brabra bra bra brahba 2000 e12eaz2"))


function isPrime(num) {
    if (num <= 1) {
        return false; // จำนวนที่น้อยกว่าหรือเท่ากับ 1 ไม่ใช่จำนวนเฉพาะ
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false; // ถ้าแบ่งลงตัวด้วย i หมายความว่าไม่ใช่จำนวนเฉพาะ
        }
    }
    return true; // ถ้าไม่เจอการหารที่ลงตัว ก็ถือว่าเป็นจำนวนเฉพาะ
}

// ทดสอบฟังก์ชัน
console.log(isPrime(2));  // true
console.log(isPrime(3));  // true
console.log(isPrime(4));  // false
console.log(isPrime(9)); // false