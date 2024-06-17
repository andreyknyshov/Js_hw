/*1. На вход функции подаётся предложение, например “I am the best AQA ever!” Преобразуйте строку таким образом, 
  чтобы вместо каждой буквы была цифра, показывающая сколько раз эта буква встречается в предложении. 
  Пробелы и знаки препинания оставляем без изменения. Регистр не должен играть роли.
*/

function numLetter(sentence) {
  sentence = sentence.toLowerCase(); //Регистр не должен играть роли.
  sentenceArray = sentence.split("");
  const counts = {}; //создаем объект для подсчета повторений

  sentenceArray.forEach((element) => {
    if (element >= "a" && element <= "z") {
      counts[element] = counts[element] ? counts[element] + 1 : 1;
    }
  });

  let resultSentence = ""; //собираем результат
  sentenceArray.forEach((element) => {
    if (element >= "a" && element <= "z") {
      resultSentence += counts[element];
    } else {
      resultSentence += element;
    }
  });

  return resultSentence;
}
console.log(numLetter("I am the best AQA ever!"));
