let d = new Date();
// console.log(d.toString());

let year = d.getFullYear();
let month = d.getMonth() + 1;
let day = d.getDate();
let dayofweek = d.getDay();


console.log(year + '年' + month + '月' + day + '日');