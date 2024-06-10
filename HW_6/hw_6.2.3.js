// 3. Напишите функцию, которая принимает на вход массив чисел, убирает из него дубликаты
// и возвращает массив с только уникальными значениями.
/*
function removeDuplicateNums(numbers) {
  const uniqueNumbers = []; // Массив для уникальных чисел
  for (let i = 0; i < numbers.length; i++) {
    let isUniqueNumber = true;
    // Проверка - было ли такое число уже в uniqueNumbers
    for (let j = 0; j < uniqueNumbers.length; j++) {
      if (numbers[i] === uniqueNumbers[j]) {
        isUniqueNumber = false;
        break;
      }
    }
    // Если число уникально и проверка не переключила флаг в false -  добавляем это число в uniqueNumbers
    if (isUniqueNumber) {
      uniqueNumbers.push(numbers[i]);
    }
  }

  return uniqueNumbers;
}

console.log(removeDuplicateNums([1, 1, 1, 2, 2, 3, 4, 4, 5]));
*/

function removeDuplicateNums(numbers) {
  const uniqueNumbers = []; // Массив для уникальных чисел
  for (const num of numbers) {
    if (!uniqueNumbers.includes(num)) {
      uniqueNumbers.push(num); // Если число уникально и проверка не переключила флаг в false -  добавляем это число в uniqueNumbers
    }
  }
  // Если число уникально и проверка не переключила флаг в false -  добавляем это число в uniqueNumbers

  return uniqueNumbers;
}

console.log(removeDuplicateNums([1, 1, 1, 2, 2, 3, 4, 4, 5, 5]));
