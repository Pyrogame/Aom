function create(){
    p("Regular Expression");
    let t = 'this Regular Expression test.';
    p(`t: [${t}]`);
}

let r = /[aeiou]/g
let o = new RegExp("is","ig")

//create
p(`r: [${r}], typeof r: ${typeof r}`)
p(`o: [${o}], typeof r: ${typeof o}`)
p(`r instanceof RegExp:`, r instanceof RegExp)
p(`r.r.constructor === RegExp:`, r.constructor === RegExp)
// string
// properties
p("r.source:", r.source)
p("r.flags:",r.flags)
p("r.ignoreCase:",r.ignoreCase)
p("r.global:",r.global)
p("r.Lastindex:",r.lastIndex)
p("r.test(t):",r.test(t), r.lastIndex)
p("r.test(t):",r.test(t), r.lastIndex)
function p(...a/* the rest */) {console.log(...a)/* sqread */}


function match