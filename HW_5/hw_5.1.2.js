/*
2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
  Пример в консоли:
  :)
  :):)
  :):):)
  :):):):)
  :):):):):)

  Для Оксаны и ее друзей: также реализовать циклом while
  Рекоммендация: попробуйте метод .repeat()
  */

  const numberOfStrings = 5; // количество строк
  let counter = 1; //счетчик повторов
while (numberOfStrings >= counter) {
    console.log(":)".repeat(counter++));
}