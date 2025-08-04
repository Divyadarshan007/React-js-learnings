let str = "{[()]}";
let strArr = str.split('');

const charCodeArr = strArr.map((char) => char.charCodeAt())
// let stackOpen = [];
// let stackClose = [];
// let count = strArr.length / 2
// for (let i = 0; i < strArr.length; i++) {
//     if (i < count) {
//         stackOpen.push(strArr[i])
//     } else {
//         stackClose.push(strArr[i])
//     }
// }

// console.log(stackOpen);
// console.log(stackClose);

console.log(charCodeArr)