/*
Task2*. Решить квадратные уравнения. Переменные называть по правилам.
Вывести в консоль ответы в виде "Ответ к уравнению 1: <корень>", "Ответ к уравнению 2: <корень> и <корень>"
1.  x2 - 6x + 9 = 0. - один корень
2.  x2 - 4x - 5 = 0. - два корня
*/

//Задача 1 
//x2 - 6x + 9 = 0. - один корень

const a = 1;
const b = -6;
const c = 9;
//Формула дискриминанта D = b^2 - 4 * a * c
const discriminant = b ** 2 - 4 * a * c;
// переменные для определения корней уравнения 
let x1;
let x2;

if (discriminant === 0) 
// Если дискриминант равен нулю - у уравнения есть один корень
{
    x1 = - b / (2 * a);
    console.log("Ответ к уравнению 1: " + x1);
}   else if (discriminant > 0) 
    // Если дискриминант больше нуля - у уравнения есть два корня
    {   
        x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        console.log("Ответ к уравнению 1: " + x1 + " и " + x2);
    }
        else
        // Если дискриминант меньше нуля - у уравнения действительных корней нет
        {
            console.log("Ответ к уравнению 1: Действительных корней нет");    
        }


//Задача 2 
//2.  x2 - 4x - 5 = 0. - два корня
const a2 = 1;
const b2 = -4;
const c2 = -5;
//Формула дискриминанта D = b^2 - 4 * a * c
const discriminant2 = b2 ** 2 - 4 * a2 * c2;
// переменные для определения корней уравнения 
let x3;
let x4;

if (discriminant2 === 0) 
// Если дискриминант равен нулю - у уравнения есть один корень
{
    x3 = - b2 / (2 * a2);
    console.log("Ответ к уравнению 2: " + x3);
}   
else if (discriminant2 > 0) 
    // Если дискриминант больше нуля - у уравнения есть два корня
    {   
        x3 = (-b2 + Math.sqrt(discriminant2)) / (2 * a2);
        x4 = (-b2 - Math.sqrt(discriminant2)) / (2 * a2);
        console.log("Ответ к уравнению 2: " + x3 + " и " + x4);
    }
    else
        // Если дискриминант меньше нуля - у уравнения действительных корней нет
        {
            console.log("Ответ к уравнению 2: Действительных корней нет");    
        }