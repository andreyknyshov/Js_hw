/*
Task3**. Напишите программу, которая принимает целое положительное число n (одно любое число от 1 до 9), и выводит сумму равную 
n + nn + nnn, где n не перемножаются, а конкатенируются
*/

let n = 3;
let nString = "" + n;
let nnString = nString + nString;
let nnnString = nString + nString + nString;
let sum1 = n + (+nnString) + (+nnnString);
console.log ("Сумма = " + sum1);


