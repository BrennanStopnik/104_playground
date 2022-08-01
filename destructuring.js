let alpha = ['a', 'b', 'c', 'd'];
let beta = ['e', 'f', 'g', 'h'];

// let a = alpha[0];
// let b = alpha[1];

// Array Destructuring
    // Doesn't matter what this variable is called, It's going to start from the front and move it's way through each index. It will only print the ones that we make a variable for.

let [a,b,duh] = alpha;
console.log(a);
console.log(b);
console.log(duh);
console.log(`---------------`);


// This is how you can skip any variables in the array. Take the variable out but leave the commas.

let [x, ,z] = alpha;
console.log(x);
console.log(z);
console.log(`---------------`);

let [q, , , t] = alpha;
console.log(q);
console.log(t);
console.log(`---------------`);


// Spread Operator
    // grabs everything that hasn't been accounted for in the array. The only thing that is accounted for in the array below is the first variable.
    // The spread must be last in destructuring an array.

let [j,...theRest] = alpha;
console.log(j);
console.log(theRest);
console.log(`---------------`);

let [l, m,...n] = alpha;
console.log(l);
console.log(m);
console.log(n);
console.log(`---------------`);

    // Using the spread op in one variable, you can take 2 arrays and concat them together and make one array out of the one line.

let alphabeta = [...alpha, ...beta];
console.log(alphabeta);
console.log(`---------------`);

    // Used on a string it breaks every character into it's own letter.

let str1 = 'hello';
let str2 = 'world';
let hw = [...str1, ...str2];
console.log(hw)
console.log(`---------------`);




