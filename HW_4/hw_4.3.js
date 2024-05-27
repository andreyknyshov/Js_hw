//Преобразовать Task 2* таким образом, чтобы age принимался через prompt в привязанной вёрстке, а результат выводился в alert


const age = +prompt ('Enter your age: '); 
const age_2 = 18; 
const age_3 = 60; 
if (isNaN(age)) {
    alert('Error, try again '); 
}   else if (age < age_2) { 
     alert('You don’t have access cause your age is ' + age + ' It’s less then '); 
    } else if ((age >= age_2) && (age < age_3)) { 
    alert('Welcome  !'); 
    } else if (age > age_3) { 
     alert('Keep calm and look Culture channel'); 
    } else alert('Technical work'); 





