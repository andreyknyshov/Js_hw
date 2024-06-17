/*
4. У вас есть массив со скобками, предположим [ ‘(‘, ‘)’, ‘(‘, ‘)’, ‘)’], количество элементов и последовательность может быть разной.
  Нужно выяснить, у каждой ли скобки есть соответствующая пара (открывающая и закрывающая).
  Усложнение: в массиве могут быть вложены еще массивы на разной глубине. (ПОПРОБУЙТЕ МЕТОД .flat(), изучите как он работает с разными глубинами вложенности)
  Вернуть нужно всё также есть ли у каждой скобочки соответствующая пара. 
  Пример:
  const arr = [[['(']], ')', '(', ')', ')', ['(', ['('], [')']]] */

function checkBrackets(array) {
  const resultArray = array.flat(Infinity); //делаем исходный массив плоским, так как мы не знаем глубину вложенности массивов, применяем Infinity
  let openBr = 0; //счетчик открытых скобок
  let closeBr = 0; //счетчик закрытых скобок
  resultArray.forEach((element) => {
    if (element === "(") {
      openBr++; // увеличиваем счетчик открытых
    } else {
      closeBr++; //увеличиваем счетчик закрытых (предполагаю, что в массиве только скобки согласно условия)
    }
  });
  return openBr === closeBr;
}

if (checkBrackets([[["("]], ")", ")", "(", ")", ["(", ["("], [")"]]])) {
  console.log("Успех! у каждой скобочки есть соответствующая пара");
} else {
  console.log("Все плохо! обнаружены скобочки без соответствующей пары");
}
