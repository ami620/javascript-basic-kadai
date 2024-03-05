let userHeight = 1.7;
let userWeight = 68;

// 丸め誤差対応のため、toFixedメソッドを使用
let bmi = userWeight / (userHeight * userHeight).toFixed(2);

console.log(bmi);


