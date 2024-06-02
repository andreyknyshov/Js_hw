// 4. Написать скрипт, который преобразует любое предложение в camelCase. Первое слово должно начинаться с буквы в нижнем регистре, 
// у остальных -  верхнем. Пример: I am super engineer => iAmSuperEngineer
// Принимаю, что в предложении нет специальных символов. Пусть в исходной строке будут только буквы (латиница)


let inputString = "This is the input string and hello world";
let resultString = ""; // результирующая строка. Вначале пустая
let flagCamel = false; // флаг включается если найден пробел 

for (let index = 0; index < inputString.length; index++) {
    const char = inputString[index];
    if (char === " ")  {
        flagCamel = true;
        continue; // встретили пробел. переходим к следующему символу строки
    }
    if (flagCamel) {
    resultString = resultString + char.toUpperCase();
    flagCamel = false; // выключаем флаг - взводим в начальное состояние
    }
    else {
        if (resultString.length === 0) {
            // Преобразуем первый символ в нижний регистр и добавляем его в результирующую строку
            resultString = resultString + char.toLowerCase();
        } else {
            // Просто добавляем текущий символ 
            resultString = resultString + char;
        }
    }
}
console.log(resultString);
