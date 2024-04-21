let data = [60, 30, 10, 67, 40];
let newEl = 70;
let position = 2;

// start from last(reverse loop)
for (let i = data.length - 1; i >= 0; i--) {
    if (i >= position) {
        data[i + 1] = data[i];
        if (i === position) {
            data[i] = newEl;
        }
    }
}
// after element is inserted
console.log(data);



// replace the value using loop
let data2 = [45, 25, 65, 10, 50, 70]
let newEl2 = 4;
let position2 = 2;

// 1 way
data2[position2] = newEl2

// 2 way using loop
// for (let i = 0; i < data.length; i++) {
//     if (i === position) {
//         data2[i] = newEl2;
//     }
// }

console.log(data2);