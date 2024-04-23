// let data1 = [3, 7, 14, 5, 6, 7, 8]
// let data2 = [45, 65, 85, 41, 52, 56]
// let data3 = []

// 1 way
// for (let i = 0; i < data1.length; i++) {
//     data3.push(data1[i])
// }

// for (let i = 0; i < data2.length; i++) {
//     data3[data1.length + i] = data2[i]
// }

// console.log(data3);

// concate using spread operator(2 way)
let data1 = [3, 7, 14, 5, 6, 7, 8]
let data2 = [45, 65, 85, 41, 52, 56]

let data3 = [...data1, ...data2]
console.log(data3);