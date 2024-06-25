let data = [5, 12, 65, 89, 0];
let temp;

function reverseFunc(data, start, end) {
    console.log(data);
    if (start <= end) {

        temp = data[start];
        data[start] = data[end];
        data[end] = temp;

        reverseFunc(data, start + 1, end - 1);
    }
}

reverseFunc(data, 0, data.length - 1);// which data u have to enter,starting point,end point -1





// bydefault js func for array reversing
let item = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(item.reverse());