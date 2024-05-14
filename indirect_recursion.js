let money = 100;
let totalApple = 0;

function buyApple(x) {
    if (x > 0) {
        console.log("I have", x, "RS", totalApple);
        buyMore(x - 10);
    } else {
        console.log("I don't have more money and apples - ", totalApple);
    }
}
function buyMore(x) {
    totalApple++;
    buyApple(x - 5);
}

buyApple(money);
function test(x) {
    // console.log(x)
    if (x > 0) {
        test(x - 1)
    }
    console.log(x)
}

let data = 5;
test(data)