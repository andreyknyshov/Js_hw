/*
Task3**. Напишите программу, которая принимает целое положительное число n (одно любое число от 1 до 9), и выводит сумму равную 
n + nn + nnn, где n не перемножаются, а конкатенируются
*/

const n = 3;
const nString = "" + n;
const nnString = nString + nString;
const nnnString = nString + nString + nString;
const sum1 = n + (+nnString) + (+nnnString);
console.log ("Сумма = " + sum1);


