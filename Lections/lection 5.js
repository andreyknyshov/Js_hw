const log = console.log;

// 1. Что будет в консоли?

// let num = 10;
// switch (num) {
//   case 5:
//     console.log("Five");
//   case 10:
//     console.log("Ten");
//   case 15:
//     console.log("Fifteen");
//   default:
//     console.log("Other");
// }

// 2. Что будет в консоли?
// const a = 10; //!!a === true

// if (! !!a) {
//   console.log("if");
// } else {
//   console.log("else");
// }

// 3. Что в переменной result?
// const a = "0";
// const result = a && +a;
// console.log(result);

// 4. Что в переменной result?
// let a = 0;
// const result = ++a || 5;
// console.log(result);

// 5. Что делает оператор ??
// const a = null;
// const b = a ?? 10;

/*
У нас есть сервис для перевода средств, работающий по следующим требованиям:
  - Средства должны быть типа Number
  - В средствах после запятой указано количество копеек  (100 копеек === 1 денюжка)
  - Минимальная сумма платежа - 1 копейка
  - Максимальная сумма платежа - 1000 денюжек
  - На платежи 1-99 денюжек комиссия составляет 50 копеек
  - На платежи от 100 денюжек - 1 денюжка
  - Сервис выводит сумму, которая принята, сумму которая будет переведена, а также комиссию

  Задача: исправить ошибки и предложить улучшения к коду
*/

// const transferAmount = prompt("Enter amount of money");
// const transferAmount = "10";

// const amount = parseInt(transferAmount, 10); //'123adsajgdja'
// if (
//   !amount || //!Boolean(amount) => true for each falsy value:
//   // Falsy значения:
//   // - 0
//   // - ""
//   // - null
//   // - undefined
//   // - NaN
//   // - false
//   typeof amount !== "number" || // if typeof string or ...
//   amount < 0 || //
//   amount > 1000
// ) {
//   //>= 1000
//   console.log("Invalid data type of transfer amount");
// } else {
//   //,
//   let finalTransferredAmount, transferTaxAmount;

//   if (amount < 100) {
//     // <=100
//     transferTaxAmount = 0.5; //50
//     finalTransferredAmount = amount - transferTaxAmount;
//   } else {
//     transferTaxAmount = 1;
//     finalTransferredAmount = amount - transferTaxAmount;
//   }
//   // else {
//   //   transferTaxAmount = 5;
//   //   finalTransferredAmount = amount - transferTaxAmount;
//   // }
//   const result = "Taken " + amount + "$, taxes are " + transferTaxAmount + "$.\n Final transfered amount is " + finalTransferredAmount + "$.";
//   console.log(result); //empty console.log
// }

//TODO: Циклы
// - while ()

// const age = 10;
// let currentAge = 1;
// while (currentAge < age) {
//   console.log(currentAge);
//   currentAge++;
// }

// let old = 20;
// while (age < old) {
//   console.log(old);
//   old--;
// }

// - do..while()
// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i < 3);

// let i = 5;
// do {
//   console.log(i);
//   i++;
// } while (i < 3);

// const boolCheck = 1 > 0;
// while (boolCheck) {
//   //ЕСЛИ Boolen(boolCheck) === true, то выполнить итерацию цикла
//   //do something
// }

// let i = 0;
// while (true) {
//   console.log(i);
//   i++;
// }

// let i = 0;
// while (false) {
//   console.log(i);
//   i++;
// }

// const age = 10;

// for (let i = 0; i <= age; i++) {
//   console.log(i);
// }

// const age = 10;

// for (let i = 0, j = 20; i <= age, j >= 10; i++, j--) {
//   console.log(i);
//   console.log(j);
// }

//if(i === 5) => ничего не выводить
//if(i === 10) => останавливаем цикл вовсе
//if(i четное) => выводим "четное"
//if(i нечетное) => выводим "нечетное"
// const maxValue = 12;
// const minValue = 0;
// for (let i = minValue; i <= maxValue; i++) {
//   if (i === 5) {
//     continue;
//   }
//   if (i === 10) {
//     break;
//   }

//   if (i % 2) {
//     console.log(`${i} => нечетное`);
//   } else {
//     console.log(`${i} => четное`);
//   }
// }

// for (let leftOperand = 1; leftOperand <= 10; leftOperand++) {
//   console.log(`Проверяем ${leftOperand}:`);
//   for (let rightOperand = 1; rightOperand <= 10; rightOperand++) {
//     console.log(`При умножении ${leftOperand} на ${rightOperand} будет ${leftOperand * rightOperand}`);
//   }
// }

//TODO: String

// const str = "papa";
// const str2 = new String("mama");

// const str3 = "sda"; // "asdsad" `fdafds`

// const result = `string1 = ${str}, string2 = ${str2}`;
// const result = `string1 = ${str}, \nstring2 = ${str2}`;
// const result = 'My name is "Anatoly"';
// console.log(result);

// str > str2;

// console.log("b".codePointAt(0));
// console.log("ab" < "ac");

// console.log("A".codePointAt(0));
// console.log("A" < "a");

// log("12345".length);

// const str = "Andrew";
// for (let i = 0; i <= str.length; i++) {
//   str[i] = "_";
//   console.log(str[i]);
//   console.log(str.at(i));
//   // console.log(str.at(-1));
//   // console.log(str.charAt(i));
// }
// console.log(str.at(-2)); // 2е с конца

// const str = "Andrew".toLowerCase();
// console.log(str);
// for (let i = 0; i < str.length; i++) {
//   console.log(str[i].toLowerCase());
//   console.log(str[i].toUpperCase());
// }

// const str = "Andrew and Mari";

// const andrew = str.slice(0, 6);
// console.log(andrew);

// const str = "Andrew and Mari";

// const AIndex = str.indexOf("A");
// const wIndex = str.indexOf("w");

// const andrew = str.slice(AIndex, wIndex + 1);
// console.log(andrew);

// const str = "Andrew and Mari";

// const lastIndexOfa = str.lastIndexOf("a");
// const aIndex = str.indexOf("a");
// // log(lastIndexOfa);
// // log(aIndex);

// for (let i = 0; i < str.length; i++) {
//   const index = str.indexOf(str[i]);
//   const lastIndex = str.lastIndexOf(str[i]);
//   // console.log(`Index of ${str[i]} === ${index}`);
//   // console.log(`Last index of ${str[i]} === ${lastIndex}`);
//   if (index === lastIndex) {
//     console.log(str[i]);
//   }
// }

// str.substring(startIndex, endIndex)
// str.substr(startIndex, endIndex)
// const str = "Andrew and Mari";

// const result = str.includes("Andrew");
// log(result);

// const promptValue = "                       value           ";
// log(promptValue.trim());

// const str = "aaa1aaa";
// console.log(str.replace("1", "b"));

// const str = "a1aa1a1aa";
// console.log(str.replaceAll("1", "b"));

// const str = "a1aa1a1aa";
// console.log(str.split(""));

// const str = "aNdReW";

// const result = str[0].toUpperCase() + str.slice(1, str.length).toLowerCase();
// console.log(result);

// const str = "aNdReW";

// const result = str[0].toUpperCase() + str.toLowerCase().slice(1, str.length);
// console.log(result);

//TODO: Number

// const num = 25;

// console.log(String(num));
// console.log("" + num);
// console.log(num.toString());

// const floatNum = 25.546;

// console.log(Math.round(floatNum));
// console.log(Math.ceil(floatNum));
// console.log(Math.floor(floatNum));
// console.log(floatNum.toFixed(2));
//-- Math.trunc() => number, Производит удаление дробной части без округления: 3.1 становится 3, а -1.1 — -1.
// console.log(Math.trunc(floatNum));

// const s = "sdasd";
// console.log(isNaN(s));
// console.log(s);

// const str = "aaa123";
// const str2 = "123aaa123";

// console.log(parseInt(str));
// console.log(parseInt(str2));

// const str = "123.4aa";

// console.log(parseFloat(str));

// const num = 4;
// console.log(Math.pow(num, 2));
// console.log(Math.sqrt(num));
// console.log(0.1 + 0.2); //БЕДА

// console.log(Math.random().toFixed(1) * 10);
// const min = 1;
// const max = 25;
// console.log(Math.floor(Math.random() * (max - min + 1) + min));

// Infinity - //бесконечност
//   Infinity; // минус бесконечность

// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MIN_SAFE_INTEGER);
// console.log(Number.POSITIVE_INFINITY);
// console.log(Number.NEGATIVE_INFINITY);

// console.log(Math.max(1, 3, 5, 9, 2, 18, 3, 24, 50));

// const million = 1_000_000;
// console.log(million);

// const str1 = "a"; //97
// const str2 = "b"; //98
// log(str1.localeCompare(str2)); //-1
// log(str2.localeCompare(str1)); //1
// log("aa".localeCompare("aa")); //0
