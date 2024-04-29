// // use sorted values

let data1 = [3, 7, 12, 34, 56, 90];
let data2 = [4, 9, 25, 45];
let data3 = [];

let i = 0;
let j = 0;
let k = 0;

while (i < data1.length && j < data2.length) {
    if (data1[i] < data2[j]) {
        data3[k] = data1[i];
        i++;
    }
    else {
        data3[k] = data2[j]
        j++;
    }
    k++
}

while (i < data1.length) {
    data3[k] = data1[i]
    i++;
    k++;
    // console.log(data3);
}
// while (j < data2.length) {
//     data3[k] = data2[j];
//     j++;
//     k++;
// }

console.log(data3);
// let data1 =[3,7,12,34,56,90];
// let data2 = [4,9,25,45];
// let data3 =[];
// let d1=0;
// let d2=0;
// let d3=0;
// while(d1<data1.length && d2<data2.length){
//    if(data1[d1]<data2[d2])
//    {
//        data3[d3]=data1[d1];
//        d1++;
//    }else{
//        data3[d3]=data2[d2];
//        d2++;
//    }
//    d3++;
// }
// while(d1<data1.length){
//   data3[d3]=data1[d1];
//        d1++;
//        d3++;
// }
// console.log(data3)