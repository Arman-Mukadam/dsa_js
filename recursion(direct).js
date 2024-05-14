// call itself again and again
// we have to use condition in the function to stop the recursion till the condition is true


// direct recursion (basic recursion)
function apple(x) {
    console.log(x);
    if (x < 7) {
        // x++;
        return apple(x + 1); // Return the result of recursive call
    }
    return x; // Return x when x is greater than or equal to 7
}
apple(4);
function factorial(n) {
    if (n === 0) {
        return 1;

    }
    return n * factorial(n - 1)
}

console.log(factorial(4));
