/*  
2. Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра и выводит в консоль слово
 с наибольшим количеством букв. 
  Если таких слов несколько - выводит их все.
  */

function getMaxWords(sentence) {
  const words = sentence.split(" "); // формируем массив слов
  let maxLength = 0; // переменная - максимальная длина слова
  const maxLengthWords = []; // массив для самых длинных слов
  for (let index = 0; index < words.length; index++) {
    if (words[index].length > maxLength) {
      maxLength = words[index].length;
    }
  }
  for (let index = 0; index < words.length; index++) {
    if (words[index].length === maxLength) {
      maxLengthWords.push(words[index]);
    }
  }
  console.log(maxLengthWords);
}
getMaxWords("Я помsfd чудное мгн передо мной явась ты");
