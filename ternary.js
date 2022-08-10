let statement = '';
let num = 0;

if (num > 10){
    statement = 'Your number is greater than 10'
} else {
    statement = 'Your number is not greater than 10'
}

// Ternary operator (same exact logic as above)
    // variable = conidtional ? if conditional evaluates true : if conditional evaluates false

let statement1 = '';
statement1 = num > 10 ? 'Your number is greater than 10' : 'Your number is not greater than 10';

// Different wayt to right it

let statement2 = '';
statement2 = 
    num > 10 
    ? 'Your number is greater than 10' 
    : 'Your number is not greater than 10';


console.log(statement);
console.log(statement1);
console.log(statement2);