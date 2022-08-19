/*
Function that takes in a number parameter and returns that number multiplied by all the numbers below it.

parameter = 4
4! = 4 * 3 * 2 * 1 
return 24

parameter = 5
5! = 5 * 4 * 3 * 2 * 1
return 120
*/

console.log(`For loop`)
function factorial(n){
    let total = n;
    for (let i = n; i > 1; i--){
        total *= i -1;
    }
    return total;
}
console.log(factorial(5));


// How Recursion works. 
    // Base case = condition that causes the recursion to stop
    // Recursive case = condition that performs the function call on itself
    // The recursive case heads to the base case

console.log(`\nRecursion`);
function factorialRecursion(n){
    // Base
    if (n === 1){
        return 1
    }
    // Recursion
    return (n * factorialRecursion(n-1));
}
console.log(factorialRecursion(5));


console.log(`\nRecursion with in function explanation`);
function factorialRec(n){
    console.log(`factorialRec(${n}) =`);
    //base case = condition that causes the recursion to stop
    //the recursive case heads towards the base case
    if(n === 1 || n === 0){
        console.log(`${n}\n`);
        return 1;
    }
    //recursive case = case that performs the function call on itself
    //console.log(n);
    console.log(`${n} * factorialRec(${n-1})\n`);
    return (n * factorialRec(n-1))

}
console.log(factorialRec(5));

/*
-factorialRec(5)
n = 5;
check if n is equal to 1
false

return 5 * factorialRec(5-1)
return 5 * factorialRec(4)

-factorialRec(4)
n = 4;
check if n is equal to 1
false
return 4 * factorialRec(3)

//same thing happens for 3 and 2
-return 3 * factorialRec(2)

-return 2 * factorialRec(1)

-factorialRec(1)
n = 1;
check if n is equal to 1
true BASE CASE
return 1


factorialRec(2) = return 2 * 1
factorialRec(3) = return 3 * factorialRec(2) = return 3 * 2 * 1
factorialRec(4) = return 4 * 3 * 2 * 1
factorialRec(5) = 5 * 4 * 3 * 2 * 1

factorial(5) =
5 * factorial(4)

factorial(4) =
4 * factorial(3)

factorial(3) =
3 * factorial(2)

factorial(2) =
2 * factorial(1)

factorial(1) =
1
*/
