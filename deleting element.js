let data = [30, 20, 45, 76, 20, 80];
let position = 3

// start with the index of the el u wnt to delete
for (let i = position; i < data.length - 1; i++) {
    data[i] = data[i + 1];
}
// to remove last element
data.length = data.length - 1;
console.log(data);