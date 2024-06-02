//2. Сделать из "*" в консоли равнобедренный треугольник и ромб
// треугольник
let i = 1;
const numberOfStrings = 5;
let spaces;
let stars;
while (i <= numberOfStrings) {
    // Создаем и выводим строку с пробелами и звездами
    spaces = ' '.repeat(numberOfStrings - i);
    stars = '*'.repeat(2 * i - 1);
    console.log(spaces + stars);
    i++;
}
// ромб
i = 1;
while (i <= numberOfStrings) {
    // Создаем и выводим строку с пробелами и звездами
    spaces = ' '.repeat(numberOfStrings - i);
    stars = '*'.repeat(2 * i - 1);
    console.log(spaces + stars);
    i++;
}
i = numberOfStrings;
while (i > 0) {
    // Создаем и выводим строку с пробелами и звездами
    spaces = ' '.repeat(numberOfStrings - i);
    stars = '*'.repeat(2 * i - 1);
    console.log(spaces + stars);
    i--;
}