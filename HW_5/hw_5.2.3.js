/*
3.  Вам нужно вывести в консоль числа от 1 до 100.
    Если число делится без остатка на 3, то выведете в консоль “число - делится на 3”.
    Если число делится на 5 без остатка, то то выведете в консоль “число - делится на 5”.
    Если число делится и на 3 и на 5 без остатка, то то выведете в консоль “число - делится и на 3 на 5”.
    Число 15 делится без остатка на 3 и на 5 -- пример сообщения в консоле.
*/

let number = 1; // число, которое будем выводить
while (number <= 100){
   if ((number % 3 == 0) && (number % 5 == 0 )) {
    console.log("Число " + number + " делится без остатка на 3 и на 5" );
   }    else {
            if (number % 3 === 0){
                console.log("Число " + number + " делится без остатка на 3" );
            }   else {
                    if (number % 5 === 0){
                        console.log("Число " + number + " делится без остатка на 5" );
                    }   else console.log("Число " + number);
                }
        }
number++;
}

