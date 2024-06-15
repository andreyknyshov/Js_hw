/*
3. Напишите функцию, которая принимает на вход массив слов и возвращает отсортированный массив по по следующему критерию: 
количество гласных букв.
  Массив должен быть отсортирован по возврастанию количества гласных букв в слове.
*/

function countVowels(word) {
  const vowels = "аеёиоуэюя";
  let count = 0;
  for (let char of word) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

function sortByVowels(words) {
  return words.sort((word1, word2) => countVowels(word1) - countVowels(word2));
}
const words = [
  "тигр",
  "слон",
  "обезьяна",
  "пингвин",
  "лев",
  "кошка",
  "собака",
  "жираф",
  "хомяк",
  "еж",
];
console.log(sortByVowels(words));
