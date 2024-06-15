/*1. На вход функции подаётся предложение, например “I am the best AQA ever!” Преобразуйте строку таким образом, 
  чтобы вместо каждой буквы была цифра, показывающая сколько раз эта буква встречается в предложении. 
  Пробелы и знаки препинания оставляем без изменения. Регистр не должен играть роли.
*/

function numLetter(sentence) {
  sentence = sentence.toLowerCase(); //Регистр не должен играть роли.
  const counts = {}; //создаем объект для подсчета повторений
  for (let index = 0; index < sentence.length; index++) {
    const element = sentence[index];
    counts[element] = counts[element] ? counts[element] + 1 : 1; //если буква уже есть - увеличиваем на 1, иначе присваиваем =1(буква найдена впервые)
  }

  let resultSentence = ""; //собираем результат
  for (let index = 0; index < sentence.length; index++) {
    const element = sentence[index];
    if (element >= "a" && element <= "z") {
      resultSentence += counts[element];
    } else {
      resultSentence += element;
    }
  }
  return resultSentence;
}
console.log(numLetter("I am the best AQA ever!"));
