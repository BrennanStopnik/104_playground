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