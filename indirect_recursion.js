let money = 100;
let apple = 0;

function buyApple(x) {
    if (x > 0) {
        console.log(`I have ${x} rs and ${apple} apple`);
        buyMore(x - 10);
    } else {
        console.log("I don't have more money and apples - ", apple);
    }
}
function buyMore(x) {
    apple++;
    buyApple(x - 5);
}

buyApple(money);
