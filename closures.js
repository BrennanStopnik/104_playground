function add(){
    let ctr = 0;
};
// console.log(ctr);
// Not a global variable so can't print ctr


let a = 7;
console.log(a);
// Will print 7 because it's a global variable


function adder(){
    let ctr = 0;

    function addOne(){
        ctr += 1;
    };
    addOne();
    return ctr;
};
console.log(adder());
console.log(adder());
// Can only call the nested function when calling adder(). And it doesn't add a running total because it is a Local function inside the adder function. 


let adding = (function() {
    let ctr = 0;

    return function () {
        ctr += 1;
        return ctr;
    }
})();
console.log(adding());
console.log(adding());
console.log(adding());
console.log(adding());



let b = 10;
function test(){
    console.log("1. " + b);
    let b = 20;
    console.log("2. " + b);
};
test();
// Won't run because the variable was reinitialized with "let"

let c = 10;
function tester(){
    console.log("1. " + c);
    var c = 20;
    console.log("2. " + c);
};
tester();
// Will run after the "var" is put in. Initial console.log won't

let d = 10;
function testing(){
    console.log("1. " + d);
    d = 20;
    console.log("2. " + d);
};
testing();
// Will run just fine beacuse not reinitializing. 