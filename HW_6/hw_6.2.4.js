//4. Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом

function palindrome(word) {
  let revWord = ""; // Переменная для хранения перевернутого слова

  // реверс слова
  for (let i = word.length - 1; i >= 0; i--) {
    revWord = revWord + word[i];
  }

  if (word === revWord) {
    return "Слово '" + word + "' является палиндромом";
  } else {
    return "Слово '" + word + "' не является палиндромом";
  }
}

console.log(palindrome("довод"));
