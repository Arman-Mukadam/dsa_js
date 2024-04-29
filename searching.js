// let data = [10, 20, 30, 40, 50]
// let index;
// let item = 40
// 1 way
// for (i = 0; i < data.length; i++) {
//     if (data[i] === item) {
//         index = i;
//         break;
//     }

// }
//2 way(by default func())
// console.log(data.indexOf(item));
// console.log(index);

// if array consists 2 same val 
let data = [10, 20, 30, 40, 50, 20]
let index = [];
let item = 20

for (i = 0; i < data.length; i++) {
    if (data[i] === item) {
        index.push(i)
    }
}
console.log(index);//find the position
