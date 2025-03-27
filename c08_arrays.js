// //c08_arrays.js

// function p(...a) { console.log(...a) }

// //creating()
// //typingAndEmptySlots()
// //accessingAndLooping()
// //addingAndRemovingElements() // as Stack and Queue
// //slicing()
// //splicing()
// generating()

// // -------------------------
// function creating() {
//     let ar1 = [10, "two", false, 20, null, "two"] // literal
//     let ar2 = new Array("X", "y", undefined)      // object initialization
//     let ar3 = Array(5)                        // array of size 5 with empty slots
//     let ar4 = Array(5, 7)                     // array of size 2 = [5,7]
//     let ar5 = Array.of(5)            // array containing 1 element (i.e., 5) 
//     let ar6 = Array.of(5, 7)         // array containing 2 elements (i.e., 5, 7) 
//     let ar7 = Array.from("hello")    // can be from any iterable: ['h','e','l','l','o']
//     let ar8 = Array.from([9,8,7])    // can be from any iterable: [9,8,7]
//     p("ar1 (log):", ar1)
//     p(`ar1: [${ar1}], length: ${ar1.length}`)
//     p(`ar2: [${ar2}], length: ${ar2.length}`)
//     p("ar3 (log):", ar3)
//     p(`ar3: [${ar3}], length: ${ar3.length}`)
//     p(`ar4: [${ar4}], length: ${ar4.length}`)
//     p(`ar5: [${ar5}], length: ${ar5.length}`)
//     p(`ar6: [${ar6}], length: ${ar6.length}`)
//     p(`ar7: [${ar7}], length: ${ar7.length}`)
//     p(`ar8: [${ar8}], length: ${ar8.length}`)
// }

// function typingAndEmptySlots() {
//     let ar = [10, "two", false, 20, null, "two"]
//     p("ar:", ar)
//     p("typeof ar:", typeof ar)
//     p("typeof ar === 'object':", typeof ar === 'object')
//     p("ar instanceof Array:", ar instanceof Array)
//     p("Array.isArray(ar):", Array.isArray(ar))
//     p("ar.constructor === Array:", ar.constructor === Array)
//     p("ar.length:", ar.length)
//     ar.length = 3
//     p("ar.length:", ar.length)
//     p("ar:", ar)
//     ar.length = 5
//     p("ar.length:", ar.length)
//     p("ar:", ar)
//     ar[9] = "nine"
//     p("ar.length:", ar.length)
//     p("ar:", ar)
// }

// function accessingAndLooping() {
//     let ar = ["zero", 10, 20, undefined, null, Infinity]
//     p("ar:", ar, ", length:", ar.length)
//     ar.length = 8
//     p("changing ar.length to 8")
//     p("ar:", ar, ", length:", ar.length)
//     p()

//     p("ar[0]:", ar[0])         // 'zero'
//     p("ar[-3]:", ar[-3])       // undefined
//     p("ar[7] (empty):", ar[7]) // empty slot -> undefined
//     p("ar[10]:", ar[10])       // undefined
//     p()

//     p("ar.at(0):", ar.at(0))   // 'zero'
//     p("ar.at(-3):", ar.at(-3)) // from the back -> Infinity
//     p("ar.at(7) (empty):", ar.at(7)) // empty slot -> undefined
//     p("ar.at(10):", ar.at(10)) // undefined
//     p()

//     delete ar[0] // not recommended
//     p("after deletion of [0]")
//     p("ar:", ar, ", length:", ar.length)
//     p()

//     p("forEach (skip empty slots)")
//     ar.forEach(e => p(e))
//     p()

//     p("for-of loop with increment (not effect the original)")
//     for (let e of ar) { e++; p(e) }
//     p("ar:", ar, ", length:", ar.length)
//     p()

//     for (let i = 0; i < ar.length; i++) { ar[i]++ }
//     p("after for-index loop")
//     p("ar:", ar, ", length:", ar.length)
// }

// function addingAndRemovingElements() { // as Stack and Queue
//     let a = []
//     p("a:", a)
//     a.push("first")                        // add to the end
//     a.push("second")                       // add to the end
//     p("a:", a, " (after pushing 2 elements)")
//     let popped = a.pop()                   // remove from the end
//     p("a:", a, " (popped:", popped, ")")
//     a.unshift("front")                     // add to the front
//     p("a:", a, " [after a.unshift('front')]")
//     let shifted = a.shift()                // remove from the front
//     p("a:", a, " (shift:", shifted, ")")
//     shifted = a.shift()                    // remove from the front
//     p("a:", a, " (shift:", shifted, ")")
//     shifted = a.shift()                    // undefined // nothing left to be shifted
//     p("a:", a, " (shift:", shifted, ")")
// }

// function slicing() {
//     let a = [10, 20, 200, 500, 'a', NaN, Infinity, 80]
//     p("a:", a, " length:", a.length)
//     p()

//     let sliced = a.slice(3)
//     p("a.slice(3):", sliced)            // [3,end]
//     p("a:", a, " length:", a.length)    // original not change
//     p("a.slice(3,5):", a.slice(3,5))    // [3,5)
//     p("a.slice(-6,5):", a.slice(-6,5))  // -ve -> count from the back
//     p("a.slice(3,-2):", a.slice(3,-2))  
//     p("a.slice(3,20):", a.slice(3,20))  // too large -> count to the end
//     p("a.slice(5,2):", a.slice(5,2))    // 5 > 2 -> no range
// }

// function splicing() {
//     let a = [10, 20, 200, 500, 'a', NaN, Infinity, 80]
//     p("a:", a, " length:", a.length)
//     p()
    
//     // a.toSpliced(start,deleteCount, ... list of new elements)
//     let sp = a.toSpliced(2,4,'x','y','z','w','v') 
//     p("a.toSpliced(2,4,'x','y','z','w','v'):", sp)
//     p("a:", a, " length:", a.length)
//     p()

//     // a.splice(start,deleteCount, ... list of new elements)
//     sp = a.splice(2,4,'x','y','z','w','v') 
//     p("a.splice(2,4,'x','y','z','w','v'):", sp)
//     p("a:", a, " length:", a.length)
// }

// function generating() {
//     let a = [10,20,30]
//     let b = ['x','y','z']
//     p("a:", a, " b:", b)
//     p()

//     let c = a.concat(b)
//     p("after c = a.concat(b); // side-effect free")
//     p("a:", a, " b:", b, " c:", c)
//     p()

//     let d = [a,b]
//     p("after d = [a, b]; // side-effect free")
//     p("a:", a, " b:", b, " d:", d)
//     a[2] = ['m','n']
//     p("a[2] = ['m','n']")
//     p("a:", a, " b:", b)
//     p("c:", c, " d:", d)
//     p()

//     let e = [...a, ...b] // spread operation
//     p("e = [...a, ...b]")
//     p("a:", a, " b:", b, " e:", e)
//     let m,n,q
//     [m,...n] = [1,2,3,'x','y'] // destructure
// }

/*

ar1.reverse()                          // .reverse() reverse order in place
ar1.sort()                             // sort in place, lexicographically
p(ar1.includes("two"))
p(ar1.indexOf("two"))
p(ar1.lastIndexOf("two"))

//functional
p(ar1.find(x => x > 2))
p(ar1.findIndex(x => x > 2))
ar1.forEach((v, i) => p(i, v))
let mapped = ar1.map(x => x * 2)
let filtered = ar1.filter(x => x > 2)
let reduced = ar1.reduce((sum, x) => sum + x, 0)

//creating new arrays from old
let ar12 = ar1.concat(ar2)        // merge
let ar15 = [...ar1, ...ar5]       // spread/rest operator
let sorted = ar1.toSorted()       // new sorted array

//converting arrays
p(ar1.join("-"))
p(ar1.toString())

*/
function replaceAllNegativeValueWith(ar, increment) {
    //change all negative numbers (except -Infinity) in the array 
    //by adding "increment" to them until they are positive
    //everything else remain the same
    //return the result but do not change the original array
}

function replaceAllNegativeValueWith(ar, increment) {
        let nonNegative_ar = [...ar];
        for (let i = 0; i < nonNegative_ar.length; i++) {
            while (nonNegative_ar[i] < 0) {
                nonNegative_ar[i] += increment;
            }
        }
        return nonNegative_ar;
    }

    let arr = [-20, 7,-11,-20,0];
    let result = replaceAllNegativeValueWith(arr, 1);
    console.log(result);



    