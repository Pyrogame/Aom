/*
var
- not hoisted
- function scope
- can be used mltiple time

let
- hostied
- blockscope
- can be used one time

function
- hoisted
*/

function grading(score){
    if (score <= 100) {
        if (score >= 80) return "A";
        if (score >= 70) return "B";
        if (score >= 60) return "c";
        if (score >= 0) return "F";
        return "as"
    }
    return"unknow"
}
console.log(grading(70))



/*{
    if (score > 100)return "UNKNOWN";
    if (score >= 80)grade = "A";
    if (score >= 70)grade = "B";
    if (score >= 60)grade = "c";
    if (score >= 0)grade = "F";
    return "unknow";
}
*/

