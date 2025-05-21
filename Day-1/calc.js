//default import
const a=require("./add");
const b=require("./sub");
const c=require("./multi");
const d=require("./div")
//named import
const {multi,div}=require("./muldiv");

a(5,10)
b(5,10)
c(5,10)
d(10,5);

multi(50,10);
div(50,10)

