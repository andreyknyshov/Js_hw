/*1. У вас есть массив названий пицц вашего конкурента. Создайте функцию, которая будет принимать ваш набор названий пицц (массив) 
  и возвращать только те, которых нет у конкурента (тоже массив). Если все ваши пиццы есть у конкурента - вернуть null
  Пиццы конкурента:
  const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai']
*/

const competitorPizzas = [
  "Peperoni",
  "Caprichosa",
  "Diablo",
  "4 cheeses",
  "hawai",
];

function getUniquePizza(myPizzaArray) {
  const resultArray = [];
  for (let indexMy = 0; indexMy < myPizzaArray.length; indexMy++) {
    let isTheSame = false;
    for (let indexComp = 0; indexComp < competitorPizzas.length; indexComp++) {
      if (myPizzaArray[indexMy] === competitorPizzas[indexComp]) {
        isTheSame = true;
        break;
      }
    }
    if (!isTheSame) {
      resultArray.push(myPizzaArray[indexMy]);
    }
  }

  if (resultArray.length !== 0) {
    return resultArray;
  } else {
    return null;
  }
}
console.log(
  getUniquePizza(["Peeroni", "Caprichosa", "Diablo", "4 cheses", "hawai"])
);
