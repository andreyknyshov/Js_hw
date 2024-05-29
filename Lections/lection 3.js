"use strict";

// let

//const

//var

// let numberOfStudentsInGroup = 75;
// let numberOfStudentsToday = 46;
// let newVariable;

// // numberOfStudentsInGroup = 75;
// // numberOfStudentsToday = 46;
// console.log(numberOfStudentsInGroup);
// console.log(numberOfStudentsToday);
// console.log(newVariable);
// // console.log(globalThis);

// let $aaaBBB132$_ = 5;
// console.log($aaaBBB132$_);

// //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar

// numberOfStudentsToday = 45;
// console.log(numberOfStudentsToday);

// numberOfStudentsToday = "Hellos";
// console.log(numberOfStudentsToday);

// const numberOfLections = 24;

// // numberOfLections = 14;

// const PORT = 5000;

// const PORT_FOR_DATA_BASE = 3000;

// let studentOksana; //top usage
// let student_Oksana, student_oksana; //less

// expect(currentUser).toBe("Anatoly");

//TODO: data types

/*
Примитивные типы
1. number - число от -(2**53) до (2**53) 
2. string - 'sadasd', "dasdas", `gfgfg`
3. boolean - true/false
4. undefined - ЗНАЧЕНИЕ НЕ ПРИСВОЕНО
5. null - ЗНАЧЕНИЕ УКАЗЫВАЮЩЕЕ ЧТО НЕТ ЗНАЧЕНИЯ
6. BigInt - число за границами [-(2**53), (2**53) ] const bigInt = 1234567890123456789012345678901234567890n;

СЛожные типы
7. object - структура данных типа пар ключ-значение const student = { name: 'Oksana', age: 18 }
8. symbol - уникальный идентификатор для обьекта, точнее для ключа обьекта

const studentsNames = ['Dzmitry', 'Kseniya', 'Elena'] [0] => 'Dzmitry', [1] => 'Kseniya', [2] => 'Elena'

*/

// TODO: to String

// let numberOfStudents = 43;

// numberOfStudents = String(numberOfStudents);

// console.log(numberOfStudents);
// console.log(typeof numberOfStudents);

// let isOlegsHandRised = false;

// // isOlegsHandRised = String(isOlegsHandRised);

// isOlegsHandRised = "" + isOlegsHandRised;

// console.log(isOlegsHandRised);
// console.log(typeof isOlegsHandRised);

//TODO: to Number

// let numberOfStudents = "" + 43.512;
// // numberOfStudents = Number(numberOfStudents);
// let numberOfStudentsInteger = parseInt(numberOfStudents);
// let numberOfStudentsFloat = parseFloat(numberOfStudents);

// console.log(numberOfStudents);
// console.log(numberOfStudentsInteger);
// console.log(numberOfStudentsInteger);
// console.log(typeof numberOfStudents);

// let studentName = "Ksenia";

// // const numberedKsenia = Number(studentName);
// const numberedKsenia = +studentName;
// console.log(numberedKsenia);
// console.log(typeof numberedKsenia);

/*
to NUmber
1. number => number
2. string => '43' => 43, 'a43' => NaN, '' => 0
3. boolean - true => 1, false => 0
4. undefined - => NaN
5. null - => 0
*/

/*
to Boolean

string -  "" => false, '1' => true,
number => number не равно 0 => true, 0 => false
null => false
undefined => false
NaN => false 
*/

// console.log(Boolean(" "));

// /*
// Falsy значения:
// - 0
// - ""
// - null
// - undefined
// - NaN
// */

// // let x = 1
// let x = 1 + 1;

// let y = +"1";

//TODO: Математические Операторы

//Сложение:
// let numberPlusNumber = 2 + 4; // 6
// let stringPlusString = "Oksana" + "Elena"; //OksanaElena
// let stringPlusNumber = 2 + "4"; // '24'
// console.log(stringPlusNumber);
// console.log(typeof stringPlusNumber);

// let stringPlusNumber = "4" + 2; // '24'
// console.log(stringPlusNumber);
// console.log(typeof stringPlusNumber);

// let result = 1 + 1 + "1";
// console.log(result);
// console.log(typeof result);

// let result = "1" + 1 + 1;
// console.log(result);
// console.log(typeof result);

//Вычитание

// let test1 = "2" - 1;
// let test2 = 2 - "1";
// let test3 = "2" - "1";
// let test4 = "2" - "a";

// console.log(test1);
// console.log(typeof test1);

// console.log(test2);
// console.log(typeof test2);

// console.log(test3);
// console.log(typeof test3);

// console.log(test4);
// console.log(typeof test4);

// let result = 3 - true;

// console.log(result);
// console.log(typeof result);

// console.log("5" + -"2");

let first = "2";
let second = "4";

//Умножение

// let result1 = first * second; // Number(first) * Number(second)

// let result2 = first / second; // Number(first) / Number(second)

// let result3 = first ** second; // Number(first) ** Number(second)

// let result4 = Math.sqrt(second);
// console.log(result1);
// console.log(result2);
// console.log(result3);
// console.log(result4);

// let result5 = 5 % 2;

// console.log(result5); Number('a') => NaN

// let result = "b" + "a" + +"a" + "a"; //baNaNa
// console.log(result);

//ОЧЕРЕДНОСТЬ ВЫПОЛНЕНИЯ ОПЕРАТОРОВ
//https://learn.javascript.ru/operators

// let a, b, c;
// a = b = c = 1 + 1;
// console.log(a);
// console.log(b);
// console.log(c);

// let a = 5;
// a = a + 1;
// a += 1; // a = a + 1;
// a -= 1; // a = a - 1
// a *= 1; // a = a * 1
// a /= 1; // a = a / 1

// a++; // a = a + 1;
// a--; // a = a - 1;
// console.log(a);

let a = 1;
// // a++; // a = a + 1;
// console.log(a++);

// let b = 1;
// // ++b; // b = b + 1;
// console.log(++b);

// const result = 1 + a++;
const result = 1 + ++a;
console.log(result);
