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
// let newText = ""
// for (let i = 0; i < text.length; i += 1) {
//     if (text[i] === " ") {
//         continue
//     } else if (text[i - 1] === " ") {
//         newText += text[i].toUpperCase()
//     }
//     else {
//        newText += text[i]; 
//     }
    
    // if (text[i] === text[i].toLowerCase()) {
    //     newText = text[i].toUpperCase()
    //     newText += newText
    // } if (text[i] === " ") {
    //     continue
    // } else {
    //     newText = text[i].toLowerCase()
        
    // }
    
    // console.log(newText)
// }
// console.log(newText);
// console.log(newText)

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


// let counter = 1

// for (let i = 0; i < text.length; i += 1) {
//     // concole.log(text[i])
//     if (text[i] === "\n") {
//         console.log(text[i])
//         counter +=1
//     }
// }
// console.log(counter)

// let i = 0
//     while ( i < text.length){
//         if (text[i] === "\n") {
//             counter += 1
//         }
//         i += 1
//     }
// console.log(counter)

// function findLongestWord(string) {
//   // Change code below this line
//     let array = string.split(" ")
//     let word = array[0]
//     for (i = 0; i < array.length; i += 1){
//         if (array[i].length > word.length) {
//             word = array[i]
//         }
//     }
//     return word

//   // Change code above this line
// }

// console.log(findLongestWord("May the for be  with you"))



// function createArrayOfNumbers(min, max) {
//   const numbers = [min];
//   // Change code below this line
//     for (let i = min + 1; i <= max; i += 1){
//     numbers.push(i)
//   }
//   // Change code above this line
//   return numbers;
// }
// console.log(createArrayOfNumbers(10, 17))

// function filterArray(numbers, value) {
//    // Change code below this line
//   let array = []
//     for (i = 0; i < numbers.length; i += 1 ){
//       numbers[i] > value ? array.push(numbers[i]) : false
//   }
//   return array

//   // Change code above this line
// }
// console.log(filterArray([12, 24, 8, 41, 76], 20))

// function getCommonElements(array1, array2) {
//   // Change code below this line
//     let array = []
//     for (i = 0; i < array1.length; i += 1){
//         if (array2.includes(array1[i])) {
//             array.push(array1[i])
//         }
//     }
//     return array

//  // Change code above this line
// }
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]))

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Change code below this line
//   let total = 0
//   for (const product of products){
//     if(product.name === productName){
//       total = product.price * product.quantity
//     }
    
//     }
//     return total
//   // Change code above this line
// }

// console.log(calculateTotalPrice("Scanner"))


// function getProductPrice(productName) {
//   // Change code below this line
//   let sum = null;
//    for (let product of products){
//      if (product.name === productName){
//        sum = product.price
//      }
//    }
//   return sum

//   // Change code above this line
// }

// function getAllPropValues(propName) {
//   // Change code below this line
//     let objectValues = []
//     for (const product of products) {
//         if(product[propName])
//         objectValues.push(product[propName])
//     }
//     return objectValues
//   // Change code above this line
// }


// console.log(getAllPropValues('price'))

// function add(...args) {
//   let total = 0
//   for (let arg of args){
//     total += arg
//   }
//   return total
//   // Change code above this line
// }
// console.log(add(7, 5, 12))

// const bookShelf = {
//   // Change code below this line
//   books: ["The last kingdom", "The guardian of dreams"],
//   getBooks() {
//     return "Returning all books";
//   },
//   addBook(bookName) {
//     this.books.push(bookName)
//     return `Adding book ${bookName}`;
//   },
//   removeBook(bookName) {
//     this.books.push(bookName)
//     return `Deleting book ${bookName}`
//   },
//   updateBook(oldName, newName){
//     const index = this.books.indexOf(oldName)
//     this.books.splice(index, 1, newName)
//     return `Updating book ${oldName} to ${newName}`
//   }
//   // Change code above this line
// };

// // bookShelf.addBook("Sands of dune")
// console.log(bookShelf.updateBook("Sands of dune", "Dune"))

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for(let potion of this.potions)
//     if (potion.name === newPotion.name) {
//       return `Error! Potion ${newPotion.name} is already in your inventory!`;
//     }

//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     for (let i = 0; i < this.potions.length; i++) {
//       if (this.potions[i].name === potionName) {
//         this.potions.splice(i, 1);
//         console.log(this.potions[i].name)
//         return this.potions
//       }
      
//     }
    
//     return `Potion ${potionName} is not in inventory!`;
//   },

//   updatePotionName(oldName, newName) {
//     for(let potion of this.potions)
//       if (potion.name === oldName) {
//         potion.name = newName;
//         return console.log(this.potions)
//       }
    
//     return `Potion ${oldName} is not in inventory!`

//   },
//   // Change code above this line
// };

// console.log(atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion"))
// lemon = function(){}
// fruits = ["mango", lemon, "apple", "cherry", "orange"];
// console.log(fruits.findIndex(lemon))



// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line
// function makeMessage(pizzaName, callback) {
// return  callback(pizzaName);
// }
// console.log(makeMessage("Ultracheese", deliverPizza))

// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });
// // Change code below this line

// makePizza("Ultracheese", function eatPizza(pizzaName) {
//     console.log(`Eating pizza ${pizzaName}.`)
// })

// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName, onSuccess, onError ) {
//     if(pizzaPalace.pizzas.includes(pizzaName)){
//       return onSuccess(pizzaName)
//     }
//     return onOrderError(pizzaName)
//   },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// pizzaPalace.order("Smoked", makePizza, onOrderError);
// pizzaPalace.order("Four meats", makePizza, onOrderError);
// pizzaPalace.order("Big Mike", makePizza, onOrderError);
// pizzaPalace.order("Vienna", makePizza, onOrderError);
// console.log(pizzaPalace.order("Smoked", makePizza, onOrderError))

// function changeEven(numbers, value) {
//   // Change code below this line
//   const newArray = []
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//       newArray.push(numbers[i] + value) ;
//     }
//     else {
//         newArray.push(numbers[i])
//     }
//   }
//   return newArray
//   // Change code above this line
// }
// console.log(changeEven([1, 2, 3, 4, 5, 8], 10))

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const titles = []
// books.map(book => titles.push(book.title));
// console.log(titles)
// console.log(books)

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = books
// .filter(book => book.rating > MIN_BOOK_RATING)
// .map(book => book.author)
// .sort((a, b) => a.localeCompare(b));
//   console.log(names)


// const getTotalBalanceByGender = (users, gender) => {
//     const totalBalance = [...users]
//     .filter(user => user.gender === gender)
//     .reduce((total, user) => total + user.balance, 0);
//     return totalBalance
// };
