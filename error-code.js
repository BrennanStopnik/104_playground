// Throwing Errors

function sumPositive(x, y){
    if (x < 0 || y < 0){
        throw Error(`Invalid input - 1 or more negative numbers`)
    }
    return x + y;
}

console.log(sumPositive(-5, 10));