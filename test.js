/**
 * Example 10 - Ввод пользователя и ветвления
 * Напиши скрипт, который будет спрашивать логин с помощью prompt и логировать результат в консоль браузера.
 *
 * Если посетитель вводит "Админ", то prompt запрашивает пароль
 * Если ничего не введено или нажата клавиша Esc - вывести строку "Отменено"
 * В противном случае вывести строку "Я вас не знаю"
 * Пароль проверять так:
 *
 * Если введён пароль "Я админ", то вывести строку "Здравствуйте!"
 * Иначе выводить строку "Неверный пароль"
 */


// let user = prompt("enter login");
// console.log(user);
// let password
// if (user === "Админ") {
//     password = prompt("enter password");
// } else if (user === null || user === "") {
//     console.log("Отмена")
// }else {
//     console.log("Я вас не знаю")
// }
// console.log(password)
// if (password === "Я админ") {
//     console.log("Здравствуйте!")
// } else {
//     console.log("Неверный пароль")
// }


/**
 * Example 11
 * На основе строки "JavaScript is a pretty good language"
 * Cделать новую строку, где каждое слово начинается с большой буквы, а пробелы удалены. Использовать цикл for.
 */
// const text = "JavaScript is a pretty good language"
// let newText
// for (let i = 0; i < text.length; i += 1) {
    
  
//     newText = text[i]
    
//     newText += newText
//     console.log(newText)
// }

/**
 * Example 12
 * Порахувати кількість рядків в змінній text. Використовуючи цикл while.
 */

// const text = `Думи мої, думи мої,
// Лихо мені з вами!
// Нащо стали на папері
// Сумними рядами?..
// Чом вас вітер не розвіяв
// В степу, як пилину?
// Чом вас лихо не приспало,
// Як свою дитину?...`;
// console.log(text)
// let i
// while (i <= text.length) {
//     console.log(i)
// }