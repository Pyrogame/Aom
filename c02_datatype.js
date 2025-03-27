
function test1ex1(a,b,c) { //problem
    return a ** b ** c    
}

function test1ex2(a,b,c) { //answer
    return a ** (b ** c)
}

function test2conditional1(a,b,c,d,e) { //problem2
    return a ? b : c ? d : e
}

function test2conditional2(a,b,c,d,e) { //answeer2
    return a ? b : (c ? d : e)
}

function test3loginandcompare1(a,b,c,d,) { // ==, && , ||, ! (must no be the last one) //problem
    return a && b  == !c || d 
}

function test3loginandcompare2(a,b,c,d,) { // ==, && , ||, ! (must no be the last one) // answer
    return ((a && (b  == (!c))) || d)
}

function test4comparison(a,b,c,d,e){ // ==, !=, <=, >= //problem
    return a <= b == c != d >= e
}

function test4comparison2(a,b,c,d,e){ // ==, !=, <=, >= //answer
    return (((a <= b) != c) == (d >= e))
}