// head and tail recursion

// function colors() {
//     let data = 20;
//     console.log(data);
//     if (true) {
//         console.log(data * 20);
//     } else {
//         console.log(data / 20);
//     }
// }
// function days() {
//     colors();
// }
// function fruits() {
//     days();
// }
// function topFunction() {
//     fruits();
// }
// topFunction();



//  recursion func k uppr operation perform krte h toh vh hota h head recursion aur recursion func k niche operation perform krte h toh vh hota h tail recursion aur 
function test(x) {
    // console.log(x) //head recursion
    if (x > 0) {
        test(x - 1) //ye func recursion kr rha h
    }
    // console.log(x) //tail recursion
}
let data = 5;
test(data)

// answer will be vice versa