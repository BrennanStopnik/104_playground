// Throwing Errors

function sumPositive(x, y){
    if (x < 0 || y < 0){
        throw Error(`Invalid input - 1 or more negative numbers`)
    }
    return x + y;
}

console.log(sumPositive(5, 10));

// Try / Catch block
    // help you because it still runs your code even though there's an error. You can make sure that the rest of your code works. 

function printNum(){
    try{
        console.log(num);
    } catch (error) {
        console.log(error);
        console.log(`Num doesn't exist`)
    }
    
}
printNum()