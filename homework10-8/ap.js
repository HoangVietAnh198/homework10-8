// bai 1

// function sum (a,b) {
//     return a+b;
// }
// let a = Number(prompt(`nhap so a`))
// let b = Number(prompt(`nhap so b`))
// console.log(sum(a,b));

// bai 2
// array = [1,2,3,4,5,6];
// function tong (a){
//     let sum = 0;
//     for (i=0;i<array.length;i++){
//         if(a[i]%2===1) {
//             sum = sum + a[i]
//         }
//     }
//     return sum;
// }
// console.log(tong(array))

// baif 3
// function soSanh (a,b) {
//     if (a>b) {
//         console.log(`Số ${a} lớn hơn số ${b}`);
//     } else {
//         console.log(`Tổng 2 số là ${a+b}`); 
//     }
// }
// let a = Number(prompt(`Hãy nhập số a`))
// let b = Number(prompt(`Hãy nhập số b`))
// soSanh(a,b)

// bai 4
// function addNumbers() {
//     firstNum = 4;
//     secondNum = 8;
//     result = firstNum + secondNum;
//     return result;
// }
// result = 0;
// alert (`số result trước khi thêm hàm là ${result}`)
// result = addNumbers();
// alert (`số result sau khi thêm hàm là ${result}`)

// Bai 5
// function footToMeter(foot) {
//     let meter = 0.305*foot
//     return meter;
// }
// function meterToFoot(meter) {
//     let foot = 3.279*meter
//     return foot;
// }

// let inPut = Number(prompt(`Nhập số foot muốn đổi`))
// console.log(inPut+"foot = "+footToMeter(inPut)+"meter")
// let inPut2 = Number(prompt(`Nhập số meter muốn đổi`))
// console.log(inPut2+"meter = "+meterToFoot(inPut2)+"food")

// Bai 6
// function isPrime(){
//     let a = 0;
//     let b = "";
//     for (let i = 2;i<=100;i++) {
//         for (let j=2;j<=i;j++) {
//         if (i%j===0){
//             a = a + 1
//         }
//         if(a===1){
//             b = b + "," + i
//         }
//     }
//     }
//     return b;
// }

// // let inPut = Number(prompt(`Nhập số muốn kiểm tra`))
// console.log(isPrime());
// if (inPut<2) {
//     console.log(`Số ${inPut} không phải là số nguyên tố`);
// } else if (isPrime(inPut)===0) {
//     console.log(`Số ${inPut} là số nguyên tố`);
// }
