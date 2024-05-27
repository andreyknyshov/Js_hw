

/*3.
Преобразовать Task 2 - 1 таким образом, чтобы значение НАПРИМЕР '2' (т.е. ЛЮБАЯ строка в которой лежат ТОЛЬКО ЦИФРЫ) пропускалось, 
  преобразовываясь в number
  */

  const age = 10; 
  const age_2 = 18; 
  const age_3 = 60;
  if (!isNaN(age)) {
  switch (true) {
      case (age < age_2) :
          console.log('You don’t have access cause your age is ' + age + ' It’s less then ');   
          break;
      case ((age >= age_2) && (age < age_3)) :
          console.log('Welcome  !');
          break;
      case (age > age_3) :
          console.log('Keep calm and look Culture channel');
          break;
      default : 
          console.log('Technical work');
  }
 } else console.log('Requires a string containing only digits');