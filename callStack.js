function add(a,b) {
    return a+b;
}
function average(a,b) {
    return add(a,b)/2;
}
console.log(average(5,10));

for (let i = 0; i < 5; i++){
    average(5,10);
}


// This is a recursive function that will lead to stack overflow

// function fn() {
//     fn();
// }