/*
boolean: true, false
number: 0, non-zero, Nan, Infintiy, -Infintity
string: "0", "", "non-zero", "non-"
array: [], [4], [5,2]
object: {}, {k: 3}
undefined
null
*/

plusSign()
function plusSign() {
    console.log(5 + "7") 
    console.log(null + "")
    console.log(typeof(true + 5),(true + 5))
    console.log(typeof (5 + "7") , 5+"7")
    x = false - undefined
    console.log(typeof(x),x)
    console.log("-----------------------------------")
}

function arithmetic() {// -, *, /, %, **

    
}
Logic()
function Logic() {// !, &&, ||
    console.log(null||null||null||null||3) //return ตัวเเรกที่จริง เเต่ถ้าหาตัวที่จริงจะไม่ได้จะreturnตัวสุดท้าย
    console.log(3&&4&&3&&3&&3) //return ตัวเเรกที่เท็จ เเต่ถ้าหาตัวที่เท็จจะไม่ได้จะreturnตัวสุดท้าย
    console.log(null??null??null??null??null) //return ตัวเเรกที่ไม่ใช้null หากเจอตัวที่ไม่ใช่nullตัวเเรกจะreturnตัวนั้น
    console.log(null || !5)
    console.log(null || -5)
    console.log("-----------------------------------")
}
equality()
function equality() { // ==, !=, ===, !==
    console.log(null == false)
    console.log(null == undefined)
    var a 
    var b
    console.log(a === b)
    console.log(a !== b)
    console.log(!a === true)
    console.log(undefined === true)
    console.log("-----------------------------------")
}
comparsion()
function comparsion() {// <, >, <=, >= 

    console.log(undefined == 0 )
    console.log(1 - "2" + 3)
}

