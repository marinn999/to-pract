// function maman(mama) {
//   if (mama > 3) {
//     return 'I love JS';
//   } else {
//     return 'KAPEC';
//   }
// }
// console.log(maman(2));

// let price = 0;
// const day = 'fri';
// if (day === 'monday') {
//   price = 100;
// } else {
//   price = 20;
// }
// console.log(price);

// function checkAge(age) {
//   if (age >= 18) {
//     return 'u r welcome';
//   } else {
//     return 'nonono';
//   }
// }
// console.log(checkAge(32));

// const a = 22;
// const b = 10;

// const biggerNumber = a > b ? a : b;
// console.log(biggerNumber); // 10
// console.log(Boolean(''));

// Функція calculateTotal(number) приймає ціле число(параметр number).Доповни код функції так,
//     щоб вона повертала суму всіх цілих чисел від одиниці до цього числа включно.Наприклад, якщо number дорівнює 3, то сума - це 1 + 2 + 3, тобто 6.

// function calculateTotal(number) {
//   let min = 0;
//   let sum = 0;
//   while (min < number) {
//     min += 1;
//     sum += min;
//   }
//   return sum;
// }
// console.log(calculateTotal(24));

// Змінна clientCounter зберігає кількість зайнятих номерів на поточний момент.
// Змінна maxClients зберігає загальну кількість номерів у готелі.

// Завдяки циклу while місця в готелі будуть заповнюватися доти, доки поточна кількість
// клієнтів не дорівнюватиме максимально допустимій.

// let clientCounter = 7;
// let maxClients = 30;

// while (clientCounter < maxClients) {
//   const numb = maxClients - clientCounter;
//   console.log('available ${numb} rooms');
//   clientCounter += 1;
// }

// for (let i = 0; i < 20; i += 5) {
//   console.log(i);
// }
// Функція calculateTotal(number) приймає ціле число(параметр number) Використовуючи цикл for,
//     доповни код функції так, щоб вона повертала суму всіх цілих чисел від одиниці до цього числа включно.
//         Наприклад, якщо number дорівнює 3, то сума - це 1 + 2 + 3, тобто 6.

// function calculateTotal(number) {
//   let sum = 0;
//   for (let i = 0; i <= number; i++) {
//     sum += i;
//   }
//   return sum;
// }
// console.log(calculateTotal(3));

// Функція calculateEvenTotal(number) приймає ціле число(параметр number).
// Доповни код функції так, щоб вона повертала суму всіх парних цілих чисел від одиниці до цього числа включно.
// Парні числа — це ті, що можна поділити на 2 без остачі(як це зробити розглядалося у
//     темі Арифметичні операції у модулі 1).Наприклад, якщо number дорівнює 6, то сума - це 2 + 4 + 6, тобто 12.

// function calculateEvenTotal(number) {
//   let sum = 0;
//   for (let i = 0; i <= number; i++) {
//     if (i % 2 === 0) {
//       sum += i;
//     }
//   }
//   return sum;
// }
// console.log(calculateEvenTotal(18));
// for (let i = 0; i < 10; i++) {
//   console.log(i);
//   if (i === 5) {
//     console.log('number 5)');
//     break;
//   }
// }
// console.log('after');

// Доповни код таким чином, щоб у змінну number записувалося перше число у
// проміжку від start до end, яке ділиться на 5 без остачі.
// const start = 17;
// const end = 25;
// let number = 0;
// for (let i = start; i <= end; i++) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }
// console.log(number);

// Функція findNumber(start, end, divisor) приймає три параметра, які є цілими числами.

// Доповни код функції таким чином, щоб вона:

// повертала перше число у діапазоні від start до end включно, яке ділиться на divisor без остачі
// не використовуй оператор break

// function findNumber(start, end, divisor) {
//   let number = 0;
//   for (let i = start; i <= end; i++) {
//     if (i % divisor === 0) {
//       number += i;
//       return number;
//     }
//   }
// }
// console.log(findNumber(6, 9, 4));
// const planet = [2, true, 'saf'];
// const pla = planet.length - 1;
// console.log(planet[pla]);
// console.log(planet[1]);
// planet[2] = 3;
// console.log(planet);

// Функція getOrderQuantity(order) приймає один параметр order - масив рядків,
//     які описують продукти в замовленні клієнта.Доповни код функції таким чином,
//     щоб вона повертала число, що дорівнює кількості елементів масиву.

// function getOrderQuantity(order) {
//   const number = order.length;
//   return number;
// }

// console.log(getOrderQuantity([1, 5, 7, 8]));

// Функція getLastElementMeta(array) приймає один параметр array - масив довільних значень.Д
// оповни код функції таким чином, щоб вона повертала новий масив з двох елементів:

// перший елемент - це індекс останнього елементу у масиві array
// другий елемент - це значення останнього елементу у масиві array

// function getLastElementMeta(array) {
//   const lastElIndex = array.length - 1;
//   const lastEl = array[lastElIndex];
//   const newArr = [lastElIndex, lastEl];
//   return newArr;
// }
// console.log(getLastElementMeta([6, 7, 8, 9]));

// Функція getExtremeElements(array) приймає один параметр array - масив елементів довільної довжини.
// Доповни код функції таким чином, щоб вона повертала масив з двох елементів - першого і останнього елементів параметра array.

// function getExtremeElements(array) {
//   const firstEl = array[0];
//   const lastElInd = array.length - 1;
//   const lastEl = array[lastElInd];
//   const newArr = [firstEl, lastEl];
//   return newArr;
// }
// console.log(getExtremeElements([6, 7, 8, 9]));

// const array = [1, true, 'Poly'];
// console.log(String(array)); // "1,true,Poly"
// console.log(array + 'true'); // "1,true,Poly5"

// const array = [6, 7, 9];
// console.log(Number(array));
// console.log(Number([1])); // 1
// console.log(Number([1, 2, 3])); // NaN
// function transformString(string) {
//   const words = string.join('-');
//   return words;
// }

// console.log(transformString('user_age')); // "user-age"
// transformString('price_per_droid'); // "price-per-droid"

// const name = 'Mango';
// const letters = name.split('');
// console.log(letters); // ["M", "a", "n", "g", "o"]

// const message = 'JavaScript essentials';
// const words = message.split(' ');
// console.log(words); // ["JavaScript", "essentials"]

// const slug = 'amazing-french-recipes';
// const slugParts = slug.split('-');
// console.log(slugParts); // ["amazing", "french", "recipes"]

// const xaxa = 'fer-fe f';
// const xaxaPArts = xaxa.split('-');
// console.log(xaxaPArts);

// Функція getLength(array) очікує один параметр array - масив довільних значень.
// Доповни код функції так, щоб вона перетворювала масив у рядок, без роздільників,
//     і повертала кількість символів в отриманому рядку.

// function getLength(array) {
//   const arrayStr = array.join('');
//   const numb = arrayStr.length;
//   return numb;
// }
// console.log(getLength([1, 4, 6, 7, 6, 5455, 7]));

// Сервісу гравірування прикрас потрібна функція, яка б автоматично рахувала ціну гравірування,
//     залежно від кількості слів і ціни за слово.

// Оголошена функція calculateEngravingPrice(message, pricePerWord).
// Ця функція приймає першим параметром рядок, що складається зі слів,
//     розділених лише пробілами(параметр message) та другим параметром - число,
//         що містить ціну гравірування за одне слово(параметр pricePerWord).

// Доповни тіло функції так, щоб вона повертала загальну вартість гравірування усіх слів в рядку.

// function calculateEngravingPrice(message, pricePerWord) {
//   const messArr = message.split(' ');
//   const messArrLength = messArr.length;
//   const sum = messArrLength * pricePerWord;
//   return sum;
// }
// console.log(calculateEngravingPrice('mes hhjf idjf', 5));

// Доповни код таким чином, щоб змінні містили часткові копії вихідного масиву fruits.

// firstTwoEls - масив із перших двох елементів
// nonExtremeEls - масив з усіх елементів, крім першого та останнього
// lastThreeEls - масив із трьох останніх елементів

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];
// const f = fruits.slice(0, 2);
// const s = fruits.slice(1, fruits.length - 1);
// const t = fruits.slice(-3);

// console.log(f);
// console.log(s);
// console.log(t);

// Оголоси змінну allClients та доповни код таким чином, щоб її значенням було посилання на масив,
//     що складається з усіх елементів масивів oldClients і newClients.
//     Спочатку мають іти елементи з масива oldClients, а потім з newClients.

// const oldClients = ['Alex', 'Dima', 'Vova'];
// const newClients = ['Vika', 'Dada', 'Lusia'];
// const allClients = oldClients.concat(newClients);
// console.log(allClients);

// Функція getSlice(array, value) приймає два параметра:

// array - масив довільних елементів
// value - значення елемента масиву для пошуку
// Доповни код функції getSlice(array, value) так, щоб вона виконувала пошук значення value у масиві array і повертала:

// порожній масив, якщо в array немає елемента зі значенням value
// підмасив, що починається з початку array і до елемента зі значенням value включно, якщо такий елемент є в array

// function getSlice(array, value) {
//   const f = array.indexOf(value);
//   const valueToAdd = f + 1;
//   if (f === -1) {
//     return [];
//   } else {
//     const newArr = array.slice(0, valueToAdd);
//     return newArr;
//   }
// }
// console.log(getSlice([1, 2, 7, 4, 5], 7));

// Функція createArrayOfNumbers(min, max) приймає два параметра:

// min - ціле число, з якого починаються обчислення
// max - ціле число, до якого включно триватимуть обчислення
// Доповни код функції createArrayOfNumbers(min, max) таким чином,
//     щоб вона повертала масив усіх цілих чисел від значення min до max включно.

// function createArrayOfNumbers(min, max) {
//   const arr = [];
//   for (let i = min; i <= max; i++) {
//     arr.push(i);
//   }
//   return arr;
// }
// console.log(createArrayOfNumbers(3, 6));
// const planets = ['Earth', 'Mars', 'Venus'];

// for (let i = 0; i < planets.length; i += 1) {
//   console.log(planets[i]);
// }

// Функція calculateTotalPrice(order) приймає один параметр order - масив чисел.
// Доповни функцію так, щоб вона повертала загальну суму елементів з масиву order.

// function calculateTotalPrice(order) {
//   let sum = 0;
//   for (let i = 0; i < order.length; i++) {
//     sum += order[i];
//   }
//   return sum;
// }
// console.log(calculateTotalPrice([5, 10, 20]));

// Функція getEvenNumbers(start, end) має два параметри start та end, які є цілими числами.
// Доповни код функції так, щоб вона повертала масив усіх парних чисел від start до end.
// Якщо жодного парного числа немає, то масив має бути пустим.
// Парним вважається число, яке ділиться на 2 без остачі(10 % 2 === 0).Використовуй цикл for.

// function getEvenNumbers(start, end) {
//   let arr = [];
//   for (let i = start; i <= end; i++) {
//     if (i % 2 === 0) {
//       arr.push(i);
//     } else {
//       [];
//     }
//   }
//   return arr;
// }
// console.log(getEvenNumbers(3, 7));

// Функція checkStorage(storage, item) приймає два параметри:

// storage - масив рядків, що описує доступні товари на складі
// item - рядок з назвою товара, наявність якого потрібно перевірити
// Доповни код функції таким чином, щоб вона перевіряла, чи присутній такий товар в масиві storage і повертала:

// рядок "<item> is available to order!", де item - це назва товара, якщо товар було знайдено
// рядок "Sorry! We are out of stock!", якщо такого товара немає в масиві
// Зроби так, щоб пошук за ім'ям товару був незалежний від регістру, тобто наприклад
// "plum" і "pLuM" мають бути знайдені у масиві["apple", "plum", "pear"].

// function checkStorage(storage, item) {
//   const incl = storage.includes(item.toLowerCase());
//   if (incl) {
//     return `${item} is available to order!`;
//   } else {
//     return 'Sorry! We are out of stock!';
//   }
// }
// console.log(checkStorage(['apple', 'plum', 'pear'], 'plum'));

// Перед розв'язанням цієї задачі варто зазначити, що таке спільні елементи.
// Спільними елементами масивів називають ті елементи, які присутні у всіх масивах.

//     Наприклад, у двох масивах[1, 3, 5] і[0, 8, 5, 3] спільними будуть числа 3 і 5,
//         оскільки вони присутні в обох вхідних масивах.А числа 0, 1 і 8 присутні тільки в одному з масивів.

// Функція getCommonElements(array1, array2), приймає два масиви (array1 та array2) довільної довжини в якості параметрів.

// Доповни код функції:

// Створи порожній масив для зберігання нового масиву.
// Використай цикл for для ітерації кожного елемента у array1.
// У тілі циклу перевір, чи поточний елемент існує у array2 за допомогою методу includes.
// Якщо він існує, то додай елемент до нового масиву.
// Поверни наповнений масив спільних елементів як результат роботи функції.

// function getCommonElements(array1, array2) {
//   let newArr = [];
//   for (let i = 0; i < array1.length; i++) {
//     if (array2.includes(array1[i])) {
//       newArr.push(array1[i]);
//     }
//   }
//   return newArr;
// }
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));

// const planets = ['Earth', 'Mars', 'Venus'];

// for (const planet of planets) {
//   console.log(planet);
// }

// Доповни код функції calculateTotalPrice(order) так, щоб
// вона повертала загальну суму чисел в масиві order.Використай цикл for...of для перебору масиву.

// function calculateTotalPrice(order) {
//   let sum = 0;
//   for (const item of order) {
//     sum += item;
//   }
//   return sum;
// }
// console.log(calculateTotalPrice([5, 10, 20]));

// function sum(a, b) {
//   console.log(arguments);
//   return a + b;
// }

// sum(2, 5);

// function foo() {
//   // У змінній args буде повноцінний масив з усіх аргументів
//   const args = Array.from(arguments);
//   return args.join('-');
// }

// console.log(foo(1, 2, 3)); // Поверне "1-2-3"
// Функція createReversedArray() може приймати довільну кількість аргументів.
// Доповни код функції так, щоб вона повертала масив усіх аргументів,
//     але в масиві вони повинні йти у зворотному порядку.Тобто,
//     при виклику createReversedArray(1, 2, 3), функція має повернути масив[3, 2, 1].
//     Використовуй цикл або метод масиву toReversed(), який застосовується до масиву
//     і результатом роботи повертає новий масив з елементами у зворотньому порядку.

// function createReversedArray() {
//   const args = Array.from(arguments);
//   return args.toReversed();
// }
// console.log(createReversedArray(1, 2, 3));

// function createReversedArray() {
//   const args = Array.from(arguments);
//   const revArr = [];
//   for (let i = args.length - 1; i >= 0; i--) {
//     revArr.push(args[i]);
//   }
//   return revArr;
// }
// console.log(createReversedArray(1, 2, 3));

// Функція calculateTax(amount, taxRate) оголошує два параметри:

// amount - число, сума від якої потрібно обчислити податок. Обов'язковий параметр.
// taxRate - число, податкова ставка. Необов'язковий параметр. За замовчуванням його значення має бути 0.2.
// Доповни код функції так, щоб вона повертала суму податку - результат множення суми на податкову ставку.

// function calculateTax(amount, taxRate = 0.2) {
//   const sum = amount * taxRate;
//   return sum;
// }
// console.log(calculateTax(100));

// const favoriteBooks = {
//   1984: 'George Oruell',
//   'Master and Margarita': 'Mykhailo Bulhakov',
//   'Harry Potter': 'Joanne Rouling',
// };
// function displayBooks(books) {
//   for (const book in books) {
//     console.log(` The name of the book is ${book}, author: ${books[book]}`);
//   }
// }
// console.log(displayBooks(favoriteBooks));

// const classSubjects = {
//   Dasha: ['math', 'eng'],
//   Lena: ['history', 'geography'],
//   Petya: ['chemistry', 'biology'],
// };
// function displaySubjects(mates) {
//   for (const mate in mates) {
//     console.log(`Mate ${mate} likes ${mates[mate]}`);
//   }
// }
// console.log(displaySubjects(classSubjects));

// Виконай рефакторинг функції countProps(object), замінивши перебір ключів за допомогою
// циклу for…in на метод Object.keys() для отримання масиву властивостей.Функція має повернути кількість властивостей в об'єкті object.

// function countProps(object) {
//   let propCount = 0;

//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }

//   return propCount;
// }

// function countProps(object) {
//   const keys = Object.keys(object);

//   return keys.length;
// }
// console.log(countProps({}));

// Функція countTotalSalary(salaries) приймає об'єкт зарплат (salaries) в якості параметра. Кожна властивість
// об'єкта salaries — це ключ, що містить ім'я співробітника, та значення - його відповідна зарплатня.

// Доповни код функції countTotalSalary(salaries) так, щоб вона повертала загальну суму зарплат всіх співробітників.

// Поради:

// Ініціалізуй змінну totalSalary зі значенням 0, яка буде відповідати за загальну суму зарплат усіх співробітників
// Використай метод Object.values() для отримання значень (зарплат) з об'єкта salaries
// Пройдись по отриманих значеннях за допомогою циклу та додай кожне значення до змінної totalSalary.
// Поверни totalSalary як результат

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   const values = Object.values(salaries);
//   for (const value of values) {
//     totalSalary += value;
//   }
//   return totalSalary;
// }
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));

// Напиши функцію getAllPropValues(propName), яка приймає один параметр propName - і
// м'я (ключ) властивості. Функція повинна повернути масив усіх значень властивості з таким ім'ям з
// кожного об'єкта в масиві products. Якщо в об'єктах відсутні властивості з таким ім'ям, функція повинна повернути порожній масив.

// function getAllPropValues(propName) {
//   const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
//   ];
//   let arr = [];

//   for (const product of products) {
//     if (propName in product) {
//       arr.push(product[propName]);
//     }
//   }
//   return arr;
// }
// console.log(getAllPropValues('name'));

// Функція calculateTotalPrice(productName) приймає один параметр productName - назва товару.
// Функція містить масив об'єктів products з такими властивостями, як name — ім'я товару, price — ціна і quantity — кількість.

// Доповни код функції так, щоб вона повертала загальну вартість (ціна * кількість) товару з таким ім'ям з масиву products.

// Якщо продукту з такою назвою немає, то функція повинна повертати рядок "Product <productName> not found!",
//     де < productName > — це ім'я товару.

// function calculateTotalPrice(productName) {
//   const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
//   ];
//   let sum = 0;
//   for (const product of products) {
//     if (productName === product.name) {
//       return (sum = product.price * product.quantity);
//     }
//   }
//   return `Product ${productName} not found!`;
// }
// console.log(calculateTotalPrice('Radar'));

// До нас звернулася власниця крамниці зілля «У старої жаби» і замовила програму
// для ведення інвентарю.Програма має додавати, видаляти, шукати та оновлювати зілля.

// Оголоси об'єкт atTheOldToad з наступними властивостями:
// potions — масив, де будуть зберігатися зілля. Нехай зараз він буде порожнім
// getPotions() — метод, який повертає рядок "List of all available potions"
// addPotion(potionName) — метод, який повертає рядок "Adding <potionName>",
//     де potionName — це значення параметра potionName

// const atTheOldToad = {
//   potion: [],
//   getPotions() {
//     return 'List of all available potions';
//   },
//   addPotion(potionName) {
//     return `Adding ${potionName}`;
//   },
// };
// console.log(atTheOldToad.addPotion('Invisibility'));

// const bookShelf = {
//   books: ['The Last Kingdom', 'The Mist'],
//   getBooks() {
//     console.log(this);
//   },
// };

// console.log(bookShelf.getBooks()); // {books: ["The Last Kingdom", "The Mist"], getBooks: f}
// const bookShelf = {
//   books: ['The Last Kingdom', 'The Mist'],
//   getBooks() {
//     return this.books;
//   },
// };

// console.log(bookShelf.getBooks()); // ["The Last Kingdom", "The Mist"]

// Об'єкт atTheOldToad має наступні властивості:

// potions — масив рядків, з назвами зілль
// getPotions() — метод, який повертає значення властивості potions
// addPotion() — метод, який приймає параметр рядок з назвою зілля potionName
// Зміни код методу addPotion(potionName) так, щоб він додавав зілля potionName в
//  кінець масиву у властивості potions.

// const atTheOldToad = {
//   potions: ['Speed potion', 'Stone skin'],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(potionName) {
//     return this.potions.push(potionName);
//   },
// };
// console.log(atTheOldToad.addPotion('Invisibility'));
// console.log(atTheOldToad.getPotions());

// const bookShelf = {
//   books: [
//     { title: 'The Last Kingdom', rating: 8 },
//     { title: 'The Mist', rating: 6 },
//   ],
//   getBooks() {
//     return this.books;
//   },
//   addBook(newBook) {
//     this.books.push(newBook);
//   },
// };

// bookShelf.addBook({ title: 'Dream Guardian', rating: 9 });
// console.log(bookShelf.getBooks());

// const bookShelf = {
//   books: [
//     { title: 'The Last Kingdom', rating: 8 },
//     { title: 'The Mist', rating: 6 },
//   ],
//   getAvarageRating() {
//     let totalRating = 0;

//     for (const book of this.books) {
//       totalRating += book.rating;
//     }

//     return totalRating / this.books.length;
//   },
// };

// // 7
// console.log(bookShelf.getAvarageRating());

// Замовниця хоче, щоб кожне зілля було представлено не тільки ім'ям, але й ціною.
// Тому зараз у властивості potions буде зберігатися масив об'єктів з властивостями name та price.

// Об'єкт atTheOldToad має наступні властивості:

// potions — масив рядків, з назвами зілль
// getPotions() — метод, який повертає значення властивості potions
// addPotion() — метод, який приймає параметр об'єкт нового зілля newPotion і
// додає його в кінець масиву у властивості potions.
// Додай метод getTotalPrice(), який має повертати загальну вартість усіх зілль з
// властивості potions.

// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Stone skin', price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     return this.potions.push(newPotion);
//   },
//   getTotalPrice() {
//     let totSum = 0;
//     for (const potion of this.potions) {
//       totSum += potion.price;
//     }
//     return totSum;
//   },
// };
// atTheOldToad.addPotion({ name: 'speed', price: 400 });
// console.log(atTheOldToad.getTotalPrice());

// Об'єкт atTheOldToad має наступні властивості:

// potions — масив об'єктів зілль
// getPotions() — метод, який повертає значення властивості potions
// updatePotionName() — метод, який приймає два параметра рядків oldName і newName
// Доповни метод updatePotionName(oldName, newName) таким чином, щоб він оновлював назву
// зілля з oldName на newName в масиві зілля у властивості potions.

// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Stone skin', price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   updatePotionName(oldName, newName) {
//     for (const potion of this.potions) {
//       if (potion.name === oldName) {
//         return (potion.name = newName);
//       }
//     }
//   },
// };
// atTheOldToad.updatePotionName('Stone skin', 'Invisibility');
// console.log(atTheOldToad.getPotions());

// Якщо змінна a дорівнює 10, виведіть 'Вірно', інакше виведіть 'Невірно'.
// function checkNumber(number) {
//   if (number === 10) {
//     return 'Вірно';
//   }
//   return 'Невірно';

//   return number === 10 ? 'Вірно' : 'Невірно';
// }
// console.log(checkNumber(10));

// Змінна num може набувати 4 значення: 1, 2, 3 або 4. Якщо вона має
// значення '1', то у змінну result запишемо 'зима', якщо має значення
// '2' - 'весна' і так далі.

// function checkSeason(num) {
//   switch (num) {
//     case 1:
//       return 'зима';
//     case 2:
//       return 'весна';
//     case 3:
//       return 'summer';
//     case 4:
//       return 'autumn';
//     default:
//       return 'please write a number form 1 to 4';
//   }
// }
// console.log(checkSeason(5));

// Напишіть програму, яка отримає від користувача число (кількість хвилин) і виведе у консоль
//рядок у форматі годин і хвилин 70 === 01:10

// function formatTime(totalMinutes) {
//   const hours = Math.floor(totalMinutes / 60);
//   const modifiedHours = String(hours).padStart(2, 0);
//   const minutes = totalMinutes % 60;
//   const modifiedMinutes = String(minutes).padStart(2, 0);
//   return `${modifiedHours} : ${modifiedMinutes}`;
// }
// console.log(formatTime(14765));

//Напишіть цикл, який виводить у консоль числа від max до min за спаданням
// Додайте усі парні числа від min до max
// const max = 50;
// const min = 23;
// function showNumbers(min, max) {
//   let sum = 0;
//   for (let i = max; i >= min; i--) {
//     if (i % 2 === 0) {
//       sum += i;
//     }

//     // console.log(i);
//   }
//   console.log(sum);
// }
// showNumbers(23, 50);

// Створіть масив styles з елементами «Джаз» та «Блюз».Додайте "Рок-н-рол" в кінець.
// Замініть значення "Блюз" на "Класика".
//Видалить перший елемент масиву і виведіть його в консоль.
//Вставте «Реп» і «Реггі» на початок масиву.

// const styles = ['Джаз', 'Блюз'];
// styles.push('Рок-н-рол');
// const index = styles.indexOf('Блюз');
// styles[index] = 'Класика';
// if (index !== -1) {
//   styles.splice(index, 1, 'Класика');
// }
// console.log(styles.shift());
// styles.unshift('Реп', 'Pеггі');
// console.log(styles);

//Напиши функцію findSmallerNumber(numbers) яка шукає найменше число в масиві.
// const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];
// function findSmallerNumber(numbers) {
// return Math.min(...numbers);
//   let smallerNumber = numbers[0];
//   for (const number of numbers) {
//     if (smallerNumber > number) {
//       smallerNumber = number;
//     }
//   }
//   return smallerNumber;
// }
// console.log(findSmallerNumber(numbers));

//Напишіть функцію caclculateAverage() яка приймає довільну кількість аргументів і повертає їхнє середнє значення.
//Додати перевірку, що аргументи це числа.

// function caclculateAverage(...args) {
//   let sum = 0;
//   let count = 0;
//   for (const arg of args) {
//     console.log(typeof arg);
//     if (typeof arg === 'number') {
//       sum += arg;
//       count += 1;
//     }
//   }

//   return sum / count;
// }
// console.log(caclculateAverage(5, 10, 15, 'Hello'));

//Напиши функцію findLongestWord(string) яка приймає довільний рядок що складається лише з розділених слів
//пробілом (параметр string) і повертає найдовше слово у цьому рядку

// function findLongestWord(string) {
//   const array = string.split(' ');
//   let longestWord = array[0];
//   for (const word of array) {
//     if (longestWord.length < word.length) {
//       longestWord = word;
//     }
//   }
//   return longestWord;
// }
// console.log(
//   findLongestWord(
//     'яка приймає довільний рядок що складається лише з розділених слів'
//   )
// );

//Напиши скрипт, який для об'єкта user,
//Послідовно:
//1 додати поле mood зі значенням 'happy'
//2 замінити hobby на 'skydiving'
//3 замінити значення premium на false
//4 виводити вміст об'єкта user у форматі
//ключ:значення використовуючи Object.keys() і for...of
// const user = {
//   name: 'John',
//   age: 20,
//   hobby: 'tenis',
//   premium: true,
// };

// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = false;
// const keys = Object.keys(user);

// for (const key of keys) {
//   console.log(`${key} : ${user[key]}`);
// }
// console.log(user);

//У нас є об'єкт, у якому зберігатимуться зарплати нашої команди
//Напишіть код для сумування всіх зарплат і збережіть його результат у змінній sum.
//Якщо об'єкт salaries порожній, то результат має бути 0

// const salaries = {
//   Mango: 100,
//   Poly: 160,
//   Ajax: 1470,
// };
// function calculateSalary(potato) {
//   console.log(salaries === potato);

//   let sum = 0;
//   const values = Object.values(salaries);
//   for (const value of values) {
//     sum += value;
//   }
//   return sum;
// }
// console.log(calculateSalary(salaries));

//Напишіть ф-цію calcTotalPrice(stones, stonesName),
//яка приймає масив об'єктів і
//Рядок з назвою каменю.
//Функція повертає загальну вартість каменів з ​​таким ім'ям, ціною та кількістю з об'єкта

// const stones = [
//   { name: 'Смарагд', price: 1300, quantity: 4 },
//   { name: 'Діамант', price: 2700, quantity: 6 },
//   { name: 'Сапфір', price: 400, quantity: 7 },
//   { name: 'Щебінь', price: 150, quantity: 100 },
// ];

// function calcTotalPrice(stones, stonesName) {
//   for (const stone of stones) {
//     if (stonesName === stone.name) {
//       return stone.price * stone.quantity;
//     }
//   }
//   return `kapec`;
// }
// console.log(calcTotalPrice(stones, 'Діамт'));

//Створіть об'єкт calculator із трьома методами
//read(a, b) - приймає два аргументи та зберігає їх як властивості об'єкта
//sum() - повертає суму збережених значень
//mult() - перемножує збережені значення та повертає результат

// const calculator = {
//   read(number1, number2) {
//     this.number1 = number1;
//     this.number2 = number2;
//   },
//   sum() {
//     return this.number1 + this.number2;
//   },
//   mult() {
//     return this.number1 * this.number2;
//   },
// };
// calculator.read(10, 15);
// console.log(calculator.sum());
// console.log(calculator.mult());
// console.log(calculator);

// Створіть функцію, яка приймає рядок тексту та повертає кількість голосних букв у цьому тексті.
// Голосні букви - це літери 'a', 'e', 'i', 'o' та 'u'.

// function countVowels(text) {
//   let vowelLetters = 0;
//   const vowel = ['a', 'e', 'i', 'o', 'u'];
//   for (let i = 0; i < text.length; i++) {
//     const currentLetter = text[i].toLowerCase();
//     if (vowel.includes(currentLetter)) {
//       vowelLetters += 1;
//     }
//   }
//   return vowelLetters;
// }
// console.log(countVowels('JavaScript is awesome!')); // Очікувано: 8

// Створіть функцію`calculateTotal`, яка приймає вхідний об'єкт з покупками,
// де ключі - це назви товарів, а значення - це ціни за кожен товар.
// Функція має обчислити загальну суму всіх товарів у кошику та повернути це значення.
//     Також, додатково, функція має вивести у консоль повідомлення про те,
//     чи користувач може придбати товари без знижки(якщо загальна сума перевищує 1000 грн, наприклад).

// const purchases = {
//   Smartphone: 15000,
//   Headphones: 700,
//   Charger: 200,
// };
// function calculateTotal(purchases) {
//   let sum = 0;
//   const salaries = Object.values(purchases);
//   for (const salary of salaries) {
//     sum += salary;
//   }
//   return sum;
// }
// console.log(calculateTotal(purchases));

// Задача: Перевірка пароля

// Створіть функцію`checkPassword`, яка приймає рядок(пароль) в якості вхідного параметру.
// Функція повинна перевіряти, чи відповідає пароль таким вимогам:

// 1. Пароль має бути довшим за 8 символів.
// 2. Пароль має містити принаймні одну цифру.
// 3. Пароль має містити принаймні одну велику літеру.
// 4. Пароль має містити принаймні один спеціальний символ (наприклад, !, @, #, тощо).

// Якщо пароль відповідає усім цим вимогам, функція повертає `true`, інакше - `false`.

// function checkPassword(password) {
//   for (let i = 0; i < password.length; i++) {
//     if (
//       password.length > 8 &&
//       password.match(/\d/) !== null &&
//       password.match(/[A-Z]/) !== null &&
//       password.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/) !== null
//     ) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// }
// console.log(checkPassword('pas6dff(K7'));

// Напиши функцію slugify(title), яка приймає заголовок статті, параметр title і повертає slug, створений із цього рядка.
// Значенням параметра title будуть рядки, слова яких розділені лише пробілами.
// Усі символи slug повинні бути в нижньому регістрі.
// Усі слова slug повинні бути розділені тире.

// function slugify(title) {
//   const slug = title.toLowerCase().split(' ');
//   return slug.join('-');
// }
// console.log(slugify('Arrays for begginers')); // "arrays-for-begginers"
// console.log(slugify('English for developer')); // "english-for-developer"
// console.log(slugify('Ten secrets of JavaScript')); // "ten-secrets-of-javascript"
// console.log(slugify('How to become a JUNIOR developer in TWO WEEKS')); // "how-to-become-a-junior-developer-in-two-weeks"

// Напиши функцію під назвою makeArray, яка приймає три параметри: firstArray(масив), secondArray(масив) і maxLength(число).
// Функція повинна створювати новий масив, який містить усі елементи з firstArray, а потім усі елементи з secondArray.
// Якщо кількість елементів у новому масиві перевищує maxLength, функція повинна повернути копію масиву з довжиною maxLength елементів.
// В іншому випадку функція повинна повернути весь новий масив.

// function makeArray(firstArray, secondArray, maxLength) {
//   const arr = firstArray.concat(secondArray);
//   return arr.length > maxLength ? arr.slice(0, maxLength) : arr;
// }
// console.log(makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3)); // ["Mango", "Poly", "Ajax"]
// console.log(makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
// console.log(makeArray(['Mango'], ['Ajax', 'Chelsea', 'Poly', 'Houston'], 3)); // ["Mango", "Ajax", "Chelsea"]
// console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 2)); // ["Earth", "Jupiter"]
// console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
// console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus', 'Venus'], 0)); // []

// Напиши функцію filterArray(numbers, value), яка приймає масив чисел(numbers) та значення(value) як параметри.
// Функція повинна повертати новий масив лише тих чисел із масиву numbers, які більші за значення value.

// Усередині функції:
// Створи порожній масив, у який будеш додавати підходящі числа.
// Використай цикл для ітерації кожного елемента масиву numbers.
// Використовуй умовний оператор if усередині циклу для перевірки кожного елемента и додавання до свого масиву.
// Поверни свій новий масив з підходящими числами як результат.

// function filterArray(numbers, value) {
//   let arr = [];
//   for (const number of numbers) {
//     number > value ? arr.push(number) : arr;
//   }
//   return arr;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
// console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]

// Станція з продажу ремонтних дроїдів готова до запуску, залишилося написати програмне забезпечення
// для відділу продажів.Оголоси функцію makeTransaction(quantity, pricePerDroid, customerCredits),
//     яка складає та повертає повідомлення про купівлю ремонтних дроїдів.
// Вона оголошує три параметри, значення яких будуть задаватися під час її виклику:
// quantity — кількість замовлених дроїдів
// pricePerDroid — ціна одного дроїда
// customerCredits — сума коштів на рахунку клієнта
// function makeTransaction(quantity, pricePerDroid, customerCredits) {
//   const sum = quantity * pricePerDroid;

//   if (sum <= customerCredits) {
//     return `You ordered ${quantity} droids worth ${sum} credits!`;
//   } else {
//     return 'Insufficient funds!';
//   }
// }
// console.log(makeTransaction(5, 3000, 23000)); // "You ordered 5 droids worth 15000 credits!"
// console.log(makeTransaction(3, 1000, 15000)); // "You ordered 3 droids worth 3000 credits!"
// console.log(makeTransaction(10, 5000, 8000)); // "Insufficient funds!"
// console.log(makeTransaction(8, 2000, 10000)); // "Insufficient funds!"
// console.log(makeTransaction(10, 500, 5000)); // "You ordered 10 droids worth 5000 credits!"

//  Оголоси функцію formatMessage(message, maxLength), яка приймає рядок(параметр message) та перевіряє його
//  довжину відповідно до заданої максимальної довжини(параметр maxLength).
// Доповни код функції таким чином, що:
// Якщо довжина рядка дорівнює або менша за maxLength, то функція повертає початковий рядок без змін.
// Якщо довжина перевищує maxLength, то функція обрізає рядок до maxLength символів, додає трикрапку "..." в кінці
// та повертає обрізану версію.

// function formatMessage(message, maxLength) {
//   const check = message.length;
//   if (message.length > maxLength) {
//     return `${message.slice(0, maxLength)}...`;
//   } else {
//     return message;
//   }
// }
// console.log(formatMessage('Curabitur ligula sapien', 16)); // "Curabitur ligula..."
// console.log(formatMessage('Curabitur ligula sapien', 23)); // "Curabitur ligula sapien"
// console.log(formatMessage('Vestibulum facilisis purus nec', 20)); // "Vestibulum facilisis..."
// console.log(formatMessage('Vestibulum facilisis purus nec', 30)); // "Vestibulum facilisis purus nec"
// console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 15)); // "Nunc sed turpis..."
// console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 41)); // "Nunc sed turpis a felis in nunc fringilla"

// Функція checkForSpam(message) приймає рядок(параметр message), перевіряє його на вміст заборонених слів spam і sale,
//     і повертає результат перевірки.Слова в рядку параметра message можуть бути в довільному регістрі, наприклад SPAM або sAlE.

// Доповни код функції таким чином, що:
// Якщо знайдено заборонене слово (spam або sale), то функція повертає буль true
// Якщо в рядку відсутні заборонені слова, функція повертає буль false
// function checkForSpam(message) {
//   return (
//     message.toLowerCase().includes('spam') ||
//     message.toLowerCase().includes('sale')
//   );
// }
// console.log(checkForSpam('Latest technology news')); // false
// console.log(checkForSpam('JavaScript weekly newsletter')); // false
// console.log(checkForSpam('Get best sale offers now!')); // true
// console.log(checkForSpam('Amazing SalE, only tonight!')); // true
// console.log(checkForSpam('Trust me, this is not a spam message')); // true
// console.log(checkForSpam('Get rid of sPaM emails. Our book in on sale!')); // true
// console.log(checkForSpam('[SPAM] How to earn fast money?')); // true

// Оголоси функцію getShippingCost(country), яка повинна перевіряти можливість доставки товару в країну
// користувача(параметр country) і повертати повідомлення про результат.Обов'язково використовуй інструкцію switch.
// Формат рядка, що повертається "Shipping to <country> will cost <price> credits", де замість < country > і < price >
//     необхідно підставити відповідні значення.

// Список країн і вартість доставки:
// China — 100 кредитів
// Chile — 250 кредитів
// Australia — 170 кредитів
// Jamaica — 120 кредитів

// Зі списку видно, що доставка можлива не скрізь.Якщо зазначена країна відсутня у списку,
//     то функція повинна повернути рядок "Sorry, there is no delivery to your country".
// function getShippingCost(country) {
//   let price = 0;
//   switch (country) {
//     case 'China':
//       price = 100;
//       break;
//     case 'Chile':
//       price = 250;
//       break;
//     case 'Australia':
//       price = 170;
//       break;
//     case 'Jamaica':
//       price = 120;
//       break;
//     default:
//       return 'Sorry, there is no delivery to your country';
//   }
//   return `Shipping to ${country} will cost ${price} credits`;
// }
// console.log(getShippingCost('Australia')); // "Shipping to Australia will cost 170 credits"
// console.log(getShippingCost('Germany')); // "Sorry, there is no delivery to your country"
// console.log(getShippingCost('China')); // "Shipping to China will cost 100 credits"
// console.log(getShippingCost('Chile')); // "Shipping to Chile will cost 250 credits"
// console.log(getShippingCost('Jamaica')); // "Shipping to Jamaica will cost 120 credits"
// console.log(getShippingCost('Sweden')); // "Sorry, there is no delivery to your country"

// Функція makeMessage приймає один параметр ім'я піци, що доставляється, pizzaName та повертає рядок з повідомленням клієнту.

// Доповни функцію makeMessage таким чином, щоб вона очікувала другим параметром(параметр callback)
// колбек - функцію і повертала результат її виклику.Функції deliverPizza або makePizza будуть передаватися
// як колбек для makeMessage і очікувати аргументом ім'я готової піци, що доставляється.

// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }
// console.log(makeMessage('Royal Grand', makePizza));
// console.log(makeMessage('Ultracheese', deliverPizza));

// Функція calculateTotalPrice(orderedItems) приймає один параметр orderedItems - масив чисел, і розраховує загальну суму
// його елементів, яка зберігається у змінній totalPrice і повертається як результат роботи функції.

// Доповни виклик метода forEach, передавши йому колбек - функцію, яка на кожній ітерації додає до totalPrice значення поточного
// елемента масива orderedItems.
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

//   orderedItems.forEach(item => {
//     totalPrice += item;
//   });

//   return totalPrice;
// }
// console.log(calculateTotalPrice([412, 371, 94, 63, 176])); // 1116

// Функція filterArray(numbers, value) приймає першим параметром масив чисел numbers і повертає новий масив, в
// якому будуть тільки ті елементи оригінального масиву, які більші за значення другого параметра числа value.
// Якщо таких значень не буде знайдено, функція повертає порожній масив.

// Виконай рефакторинг функції таким чином, щоб замість циклу for, вона використовувала метод forEach.

// function filterArray(numbers, value) {
//   let newArr = [];
//   numbers.forEach(number => {
//     number > value ? newArr.push(number) : newArr;
//   });
//   return newArr;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
// console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]

// Виконай рефакторинг функції calculateTotalPrice(orderedItems), замінивши її оголошення на стрілочну функцію.
// Також заміни колбек - функцію, передану в метод forEach(), на стрілочну функцію.
// const calculateTotalPrice = orderedItems => {
//   let totalPrice = 0;
//   orderedItems.forEach(item => {
//     totalPrice += item;
//   });

//   return totalPrice;
// };
// console.log(calculateTotalPrice([12, 85, 37, 4])); // 138
// console.log(calculateTotalPrice([164, 48, 291])); // 503
// console.log(calculateTotalPrice([412, 371, 94, 63, 176])); // 1116

// Заміни оголошення функції filterArray() і колбек для методу forEach() на стрілочні функції.

// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];

//   numbers.forEach(number => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   return filteredNumbers;
// };

// console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
// console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]

// Функція changeEven(numbers, value) приймає масив чисел numbers і оновлює кожен елемент, значення якого - це парне число,
// додаючи до нього значення параметра value, який точно є числом.

// Виконай рефакторинг функції таким чином, щоб вона стала чистою - не змінювала масив чисел numbers, а створювала,
//     наповнювала і повертала новий масив з оновленими значеннями.
// function changeEven(numbers, value) {
//   let newArr = [];
//   numbers.forEach(number => {
//     newArr.push(number % 2 === 0 ? number + value : number);
//   });
//   return newArr;
// }
// console.log(changeEven([1, 2, 3, 4, 5], 10)); // [1, 12, 3, 14, 5]
// console.log(changeEven([2, 8, 3, 7, 4, 6], 10)); // [12, 18, 3, 7, 14, 16]
// console.log(changeEven([17, 24, 68, 31, 42], 100)); // [17, 124, 168, 31, 142]

// Масив books містить колекцію об'єктів книг, кожен з яких містить властивості title, author, rating.
// Використовуючи метод map(), зроби так, щоб у змінній titles вийшов масив назв усіх книг(властивість title) з масиву books.

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
// ];

// const newArr = books.map(book => book.title);
// console.log(newArr);
// Значення змінної titles - це масив["The Last Kingdom", "Beside Still Waters",
//     "The Dream of a Ridiculous Man", "Redder Than Blood", "Enemy of God"]

// Масив books містить колекцію об'єктів книг, кожен з яких містить властивість genres, значенням якої є масив жанрів.
// Використовуючи метод flatMap(), зроби так, щоб у змінній genres вийшов масив жанрів усіх книг(властивість genres) з масиву books.
// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     genres: ['adventure', 'history'],
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     genres: ['fiction'],
//   },
//   {
//     title: 'Redder Than Blood',
//     author: 'Tanith Lee',
//     genres: ['horror', 'mysticism'],
//   },
// ];

// const genres = books.flatMap(book => book.genres);
// console.log(genres); // ["adventure", "history", "fiction", "horror", "mysticism"]

// Цей масив об'єктів ми будемо передавати в параметр users під час виклику функції із завдання.

// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     skills: ['ipsum', 'lorem'],
//     gender: 'male',
//     age: 37,
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
//     gender: 'female',
//     age: 34,
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
//     gender: 'male',
//     age: 24,
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     skills: ['adipisicing', 'irure', 'velit'],
//     gender: 'female',
//     age: 21,
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     skills: ['ex', 'culpa', 'nostrud'],
//     gender: 'male',
//     age: 27,
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     skills: ['non', 'amet', 'ipsum'],
//     gender: 'male',
//     age: 38,
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     skills: ['lorem', 'veniam', 'culpa'],
//     gender: 'female',
//     age: 39,
//   },
// ];
// Доповни стрілочну функцію getUserEmails(users) таким чином, щоб вона повертала масив поштових адрес користувачів
//     (властивість email) з масиву об'єктів в параметрі users.

// const getUserEmails = users => {
//   const mails = users.map(user => user.email);
//   return mails;
// };
// console.log(getUserEmails(users)); // [
//   'moorehensley@indexia.com',
//   'sharlenebush@tubesys.com',
//   'rossvazquez@xinware.com',
//   'elmahead@omatom.com',
//   'careybarr@nurali.com',
//   'blackburndotson@furnigeer.com',
//   'shereeanthony@kog.com',
// ];

// Доповни код так, щоб у змінній evenNumbers був масив парних чисел із масиву numbers, а у змінній oddNumbers —
//  масив непарних.Обов'язково використовуй метод filter().

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// const evenNumbers = numbers.filter(number => number % 2 === 0);
// const oddNumbers = numbers.filter(number => number % 2 !== 0);

// console.log(evenNumbers); // [24, 82, 36, 18, 52]
// console.log(oddNumbers); // [17, 61, 47, 73]

// const LOW_SCORE = 50;
// const HIGH_SCORE = 80;
// const students = [
//   { name: 'Mango', score: 83 },
//   { name: 'Poly', score: 59 },
//   { name: 'Ajax', score: 37 },
//   { name: 'Kiwi', score: 94 },
//   { name: 'Houston', score: 64 },
// ];

// const best = students.filter(student => student.score >= HIGH_SCORE);
// console.log(best); // Масив об'єктів з іменами Mango і Kiwi

// const worst = students.filter(student => student.score < LOW_SCORE);
// console.log(worst); // Масив з одним об'єктом Ajax

// const average = students.filter(
//   student => student.score >= LOW_SCORE && student.score < HIGH_SCORE
// );
// console.log(average); // Масив об'єктів з іменами Poly і Houston

// Масив books містить колекцію об'єктів книг, кожен з яких містить властивості title, author, rating.
// Використовуючи метод filter(), доповни код таким чином, щоб:

// У змінній topRatedBooks утворився масив книг, рейтинг яких (властивість rating) більший за або дорівнює значенню змінної MIN_RATING.
// У змінній booksByAuthor утворився масив книг, написаних автором з ім'ям (властивість author), яке збігається зі значенням
// у змінній AUTHOR.
// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
// ];
// const MIN_RATING = 8;
// const AUTHOR = 'Bernard Cornwell';
// const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter(book => book.author === AUTHOR);
// console.log(topRatedBooks);
// console.log(booksByAuthor);

// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//   },
// ];
// Доповни функцію getUsersWithEyeColor(users, color) таким чином, щоб вона повертала масив користувачів,
//     у яких колір очей(властивість eyeColor) збігається зі значенням другого параметра color.
// const getUsersWithEyeColor = (users, color) => {
//   const eyes = users.filter(user => user.eyeColor === color);
//   return eyes;
// };
// console.log(getUsersWithEyeColor(users, 'blue'));

// Ігровому сервісу необхідний функціонал підрахунку середнього часу, проведеного в іграх, одним гравцем.
// У змінній players зберігається об'єкт, де ключ це ім'я гравця, а значення - його ігровий час.
// У змінній playtimes зберігається масив значень об'єкта players, тобто масив ігрового часу усіх гравців.
// Значенням змінної averagePlayTime буде середній час, проведений одним гравцем в іграх.

// Доповни код таким чином, щоб у змінній totalPlayTime вийшов загальний ігровий час з масиву playtimes.
// Використовуй метод reduce().
// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244,
// };
// const playtimes = Object.values(players);
// console.log(playtimes); // Значення змінної playtimes - це масив [1270, 468, 710, 244]
// const totalPlayTime = playtimes.reduce((player, time) => player + time, 0);
// console.log(totalPlayTime); // Значення змінної totalPlayTime - це число 2692
// const averagePlayTime = totalPlayTime / playtimes.length;
// console.log(averagePlayTime);

// у нас є масив студентів з балами за тест. Необхідно отримати середній бал.

// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Poly", score: 59 },
//   { name: "Ajax", score: 37 },
//   { name: "Kiwi", score: 94 },
//   { name: "Houston", score: 64 },
// ];

// // Назва акумулятора може бути довільною, це просто параметр функції
// const totalScore = students.reduce((total, student) => {
//   return total + student.score;
// }, 0);

// const averageScore = totalScore / students.length;

// Припустимо, що у нас є масив з різними словами. Ми хочемо підрахувати кількість кожного слова у цьому масиві.

// const words = ['apple', 'banana', 'orange', 'apple', 'banana', 'apple'];
// function lklk(wordToCount) {
//   let number = 0;
//   for (const word of words) {
//     if (word === wordToCount) {
//       number += 1;
//     }
//   }
//   return number;
// }
// console.log(lklk('apple'));

// OR WITH REDUCE

// const wordsToCount = words => {
//   const wordsNumber = words.reduce((acc, word) => {
//     if (word in acc) {
//       acc[word]++;
//     } else {
//       acc[word] = 1;
//     }
//     return acc;
//   }, {});
//   console.log(wordsNumber);
// };
// wordsToCount(['apple', 'banana', 'orange', 'apple', 'banana', 'apple']);

// OR WITH REDUCE WITHOUT FUNCTION

// const words = ['apple', 'banana', 'orange', 'apple', 'banana', 'apple'];
// const wordsNumber = words.reduce((acc, word) => {
//   if (word in acc) {
//     acc[word]++;
//   } else {
//     acc[word] = 1;
//   }
//   return acc;
// }, {});
// console.log(wordsNumber);

// У змінній players зберігається масив об'єктів, кожен з яких має властивості name, playtime та gamesPlayed.
// Нашому сервісу необхідно розрахувати середній час, проведений в одній грі для кожного гравця, і отримати загальну
// суму цих значень часу у змінній totalAveragePlaytimePerGame.Розрахувати час для кожного з гравців можна,
//     розділивши його час(властивість playtime) на кількість ігор(властивість gamesPlayed).
// const players = [
//   { name: 'Mango', playtime: 1270, gamesPlayed: 4 },
//   { name: 'Poly', playtime: 469, gamesPlayed: 2 },
//   { name: 'Ajax', playtime: 690, gamesPlayed: 3 },
//   { name: 'Kiwi', playtime: 241, gamesPlayed: 1 },
// ];
// const totalAveragePlaytimePerGame = players.reduce((acc, player) => {
//   const playTimePerGame = player.playtime / player.gamesPlayed;

//   return acc + playTimePerGame;
// }, 0);
// console.log(totalAveragePlaytimePerGame); // Значення змінної totalAveragePlaytimePerGame - це число 1023

// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//   },
// ];
// Доповни функцію calculateTotalBalance(users) таким чином, щоб вона рахувала і повертала суму всіх коштів
//     (властивість balance), які зберігають користувачі з масиву users.
// Виклик функції із зазначеним масивом користувачів повертає число 20916

// const calculateTotalBalance = users => {
//   return users.reduce((acc, user) => {
//     //Перший return (`return acc + user.balance;`)**: Цей return вказує на те, що після кожного кроку обробки масиву
//     //   користувачів `reduce` повертає нове значення`acc`, яке є сумою попереднього та балансу поточного користувача.

//     return acc + user.balance; //Другий return (`return users.reduce(...);`)**: Цей return вказаний для самої функції
//     //s`calculateTotalBalance` і повертає кінцевий результат після того як виконався `reduce` для всього масиву користувачів.
//   }, 0);
// };
// console.log(calculateTotalBalance(users));

// У вас есть массив объектов, представляющих расходы в течение недели.Каждый объект имеет два свойства: `day`
//     (день недели) и`amount`(сумма расхода в этот день).Вам нужно посчитать общую сумму расходов за неделю:
// const expenses = [
//   { day: 'Monday', amount: 50 },
//   { day: 'Tuesday', amount: 30 },
//   { day: 'Wednesday', amount: 40 },
//   { day: 'Thursday', amount: 20 },
//   { day: 'Friday', amount: 60 },
// ];
// const totalExpenses = expenses.reduce(
//   (acc, expense) => acc + expense.amount,
//   0
// );
// console.log(totalExpenses);

// У вас есть массив строк, представляющих цены товаров.
// Вы хотите посчитать общую стоимость всех товаров.

// const prices = ['10.50', '23.00', '7.25', '15.75'];
// const totalPrice = prices.reduce((acc, price) => acc + parseFloat(price), 0);
// console.log(totalPrice);

// Змінна releaseDates - це масив чисел, років видання книг. Змінна authors - це масив рядків, авторів книг.

// Доповни код таким чином, щоб у змінній ascendingReleaseDates вийшла копія масиву releaseDates,
//     відсортована за зростанням, а у змінній alphabeticalAuthors - копія масиву імен авторів authors,
//         відсортована за алфавітом.Використовуй метод toSorted()
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   'Tanith Lee',
//   'Bernard Cornwell',
//   'Robert Sheckley',
//   'Fyodor Dostoevsky',
// ];
// const ascendingReleaseDates = releaseDates.toSorted();
// const alphabeticalAuthors = authors.toSorted();
// console.log(ascendingReleaseDates);
// console.log(alphabeticalAuthors);

// Масив books містить масив об'єктів книг, кожен з яких містить властивості title, author, rating.
// Доповни код таким чином, щоб:
// У змінній sortedByAuthorName вийшов масив книг, відсортований за ім'ям автора в алфавітному порядку.
// У змінній sortedByReversedAuthorName вийшов масив книг, відсортований за ім'ям автора у зворотному алфавітному порядку.
// У змінній sortedByAscendingRating вийшов масив книг, відсортований за зростанням рейтингу.
// У змінній sortedByDescentingRating вийшов масив книг, відсортований за спаданням рейтингу.

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   {
//     title: 'Redder Than Blood',
//     author: 'Tanith Lee',
//     rating: 7.94,
//   },
//   {
//     title: 'Enemy of God',
//     author: 'Bernard Cornwell',
//     rating: 8.67,
//   },
// ];
// const sortedByAuthorName = books.toSorted((a, b) =>
//   a.author.localeCompare(b.author)
// );
// console.log(sortedByAuthorName);
// const sortedByReversedAuthorName = books.toSorted((a, b) =>
//   b.author.localeCompare(a.author)
// );
// console.log(sortedByReversedAuthorName);
// const sortedByAscendingRating = books.toSorted((a, b) => a.rating - b.rating);
// console.log(sortedByAscendingRating);
// const sortedByDescentingRating = books.toSorted((a, b) => b.rating - a.rating);
// console.log(sortedByDescentingRating);

// Масив books містить масив об'єктів книг, кожен з яких містить властивості title, author, rating.
// Доповни код таким чином, щоб у змінній names вийшов масив імен авторів в алфавітному порядку,
//     рейтинг книг яких більший за значення змінної MIN_BOOK_RATING.Використовуй ланцюжок методів.

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   {
//     title: 'The Dreams in the Witch House',
//     author: 'Howard Lovecraft',
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// const names = books
//   .toSorted((a, b) => a.author.localeCompare(b.author))
//   .filter(book => book.rating > MIN_BOOK_RATING)
//   .map(book => book.author);
// console.log(names);

// 'use strict';

// const library = {
//   books: 1923,
//   logBookCount() {
//     console.log(this.books);
//   },
// };

// function showBooks(callback) {
//   callback();
// }

// showBooks(library.logBookCount.bind(library));

// Напиши стрілочну функцію getUserNames(users), яка прийматиме один параметр users — масив об’єктів користувачів.
// Функція має повертати масив імен усіх користувачів(властивість name) із масиву users.
// y", "Sharlene Bush", "Ross Vazquez", "Elma Head", "Carey Barr", "Blackburn Dotson", "Sheree Anthony"]

// const getUserNames = users => {
//   return users.map(user => user.name);
// };

// console.log(
//   getUserNames([
//     {
//       name: 'Moore Hensley',
//       email: 'moorehensley@indexia.com',
//       balance: 2811,
//     },
//     {
//       name: 'Sharlene Bush',
//       email: 'sharlenebush@tubesys.com',
//       balance: 3821,
//     },
//     {
//       name: 'Ross Vazquez',
//       email: 'rossvazquez@xinware.com',
//       balance: 3793,
//     },
//     {
//       name: 'Elma Head',
//       email: 'elmahead@omatom.com',
//       balance: 2278,
//     },
//     {
//       name: 'Carey Barr',
//       email: 'careybarr@nurali.com',
//       balance: 3951,
//     },
//     {
//       name: 'Blackburn Dotson',
//       email: 'blackburndotson@furnigeer.com',
//       balance: 1498,
//     },
//     {
//       name: 'Sheree Anthony',
//       email: 'shereeanthony@kog.com',
//       balance: 2764,
//     },
//   ])
// ); // ["Moore Hensley", "Sharlene Bush", "Ross Vazquez", "Elma Head", "Carey Barr", "Blackburn Dotson", "Sheree Anthony"]

// Напиши стрілочну функцію getUsersWithFriend(users, friendName) , яка прийматиме два параметра:
// перший параметр users — масив об’єктів користувачів
// другий параметр friendName — ім’я друга для пошуку.
// Функція має повертати масив усіх користувачів із масиву users, у яких є друг з іменем friendName.
// Друзі кожного користувача зберігаються у властивості friends.Якщо користувачів, у яких є такий других немає,
//     то функція має повернути порожній масив.

// const allUsers = [
//   {
//     name: 'Moore Hensley',
//     friends: ['Sharron Pace'],
//   },
//   {
//     name: 'Sharlene Bush',
//     friends: ['Briana Decker', 'Sharron Pace'],
//   },
//   {
//     name: 'Ross Vazquez',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//   },
//   {
//     name: 'Elma Head',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//   },
//   {
//     name: 'Carey Barr',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//   },
//   {
//     name: 'Blackburn Dotson',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//   },
//   {
//     name: 'Sheree Anthony',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//   },
// ];
// const getUsersWithFriend = (users, friendName) => {
//   return users.filter(user => user.friends.includes(friendName));
// };

// console.log(getUsersWithFriend(allUsers, 'Briana Decker'));
// // [
// //   {
// //     name: "Sharlene Bush",
// //     friends: ["Briana Decker", "Sharron Pace"]
// //   },
// //   {
// //     name: "Sheree Anthony",
// //     friends: ["Goldie Gentry", "Briana Decker"]
// //   }
// // ]

// console.log(getUsersWithFriend(allUsers, 'Goldie Gentry'));
// // [
// //   {
// //     name: "Elma Head",
// //     friends: ["Goldie Gentry", "Aisha Tran"]
// //   },
// //   {
// //     name: "Sheree Anthony",
// //     friends: ["Goldie Gentry", "Briana Decker"]
// //   }
// // ]

// console.log(getUsersWithFriend(allUsers, 'Adrian Cross')); // []

// Напиши стрілочну функцію sortByDescendingFriendCount(users) , яка прийматиме один параметр users — масив об’єктів користувачів.
// Функція має повертати масив усіх користувачів, відсортованих за спаданням кількостій їх друзів (властивість friends).
// Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її роботи.
// const sortByDescendingFriendCount = users => {
//   return users.toSorted((a, b) => b.friends.length - a.friends.length);
// };

// console.log(
//   sortByDescendingFriendCount([
//     {
//       name: 'Moore Hensley',
//       friends: ['Sharron Pace'],
//       gender: 'male',
//     },
//     {
//       name: 'Sharlene Bush',
//       friends: ['Briana Decker', 'Sharron Pace'],
//       gender: 'female',
//     },
//     {
//       name: 'Ross Vazquez',
//       friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//       gender: 'male',
//     },
//     {
//       name: 'Elma Head',
//       friends: ['Goldie Gentry', 'Aisha Tran'],
//       gender: 'female',
//     },
//     {
//       name: 'Carey Barr',
//       friends: ['Jordan Sampson', 'Eddie Strong'],
//       gender: 'male',
//     },
//     {
//       name: 'Blackburn Dotson',
//       friends: ['Jacklyn Lucas', 'Linda Chapman'],
//       gender: 'male',
//     },
//     {
//       name: 'Sheree Anthony',
//       friends: ['Goldie Gentry', 'Briana Decker'],
//       gender: 'female',
//     },
//   ])
// );
// [
//   {
//     name: "Ross Vazquez",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     friends: ["Briana Decker", "Sharron Pace"],
//     gender: "female"
//   },
//   {
//     name: "Elma Head",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     gender: "female"
//   },
//   {
//     name: "Moore Hensley",
//     friends: ["Sharron Pace"],
//     gender: "male"
//   }
// ]
// Напиши стрілочну функцію getTotalBalanceByGender(users, gender), яка прийматиме два параметра:
// перший параметр users — масив об’єктів користувачів,
// другий параметр gender — рядок, що зберігає стать.
// Функція має використовувати ланцюжок виклику методів та повертати загальний баланс користувачів(властивість balance),
//     стать яких(властивість gender) збігається зі значенням параметра gender.

// const getTotalBalanceByGender = (users, gender) => {
//   return users
//     .filter(user => user.gender === gender)
//     .reduce((acc, user) => acc + user.balance, 0);
// };

// const clients = [
//   {
//     name: 'Moore Hensley',
//     gender: 'male',
//     balance: 2811,
//   },
//   {
//     name: 'Sharlene Bush',
//     gender: 'female',
//     balance: 3821,
//   },
//   {
//     name: 'Ross Vazquez',
//     gender: 'male',
//     balance: 3793,
//   },
//   {
//     name: 'Elma Head',
//     gender: 'female',
//     balance: 2278,
//   },
//   {
//     name: 'Carey Barr',
//     gender: 'male',
//     balance: 3951,
//   },
//   {
//     name: 'Blackburn Dotson',
//     gender: 'male',
//     balance: 1498,
//   },
//   {
//     name: 'Sheree Anthony',
//     gender: 'female',
//     balance: 2764,
//   },
// ];
// console.log(getTotalBalanceByGender(clients, 'male')); // 12053

// console.log(getTotalBalanceByGender(clients, 'female')); // 8863

// const parent = {
//   name: 'Stacey',
//   surname: 'Moore',
//   age: 54,
//   heritage: 'Irish',
// };

// const child = Object.create(parent);
// child.name = 'Jason';
// child.age = 27;
// console.log(child);

// Створи клас Storage, який створюватиме об'єкти для управління складом товарів. Клас очікує лише один аргумент — початковий
// масив товарів, який записується до створеного об'єкта в приватну властивість items.
// Оголоси наступні методи класу:
// getItems() — повертає масив поточних товарів у приватній властивості items.
// addItem(newItem) — приймає новий товар newItem і додає його до масиву товарів у приватну властивість items об'єкта.
// removeItem(itemToRemove) — приймає рядок з назвою товару itemToRemove і видаляє його з масиву товарів у приватній
// властивості items об'єкта.

// class Storage {
//     #items;
//     construclor(elements) {
//         this.#items = items;
//     }
//     getItems() {
//         return this.#items;
//     }
//     addItem(newItem) {

//     }
// }

// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// storage.removeItem("Scaner");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// const startTime = Date.now();

// // Твій код, виконуваний упродовж деякого часу
// for (let i = 0; i <= 200; i += 1) {
//   console.log(i);
// }

// const endTime = Date.now();
// const elapsedTime = endTime - startTime;

// console.log(`Elapsed time: ${elapsedTime} ms`);

// Дана строка. Выведите в консоль последний символ строки.
// const string = 'lorem ipsum lololou';
// console.log(string[string.length - 1]);

// Дано число.Проверьте, четное оно или нет.
// const numb = 7;
// numb % 2 === 0 ? console.log(true) : console.log(false);

// Даны два слова. Проверьте, что первые буквы этих слов совпадают.
// const first = 'opa';
// const second = 'soma';
// first[0] === second[0] ? console.log('yep') : console.log('nope');

// Дано слово. Получите его последнюю букву. Если слово заканчивается на мягкий знак, то получите предпоследнюю букву.

// const word = 'somewordь';
// word[word.length - 1] === 'ь'
//   ? console.log(word[word.length - 2])
//   : console.log(word[word.length - 1]);

// Дано число. Выведите в консоль первую цифру этого числа.

// const numb = 67;
// console.log(numb.toString()[0]);

// Дано число.Выведите в консоль последнюю цифру этого числа.

// const numb = 789;
// console.log(numb.toString()[numb.toString().length - 1]);

// Дано число. Выведите в консоль сумму первой и последней цифры этого числа.

// const numb = 1234;
// const sum =
//   Number(numb.toString()[0]) +
//   Number(numb.toString()[numb.toString().length - 1]);
// console.log(sum);

// Дано число.Выведите количество цифр в этом числе.
// const numb = 1234567890;
// console.log(numb.toString().length);

// Даны два числа. Проверьте, что первые цифры этих чисел совпадают.
// const first = 1234567890;
// const second = 1987654321;
// first.toString()[0] === second.toString()[0]
//   ? console.log('yep')
//   : console.log('nope');

// Дана строка.Если в этой строке более одного символа, выведите в консоль предпоследний символ этой строки.
// const string = 'lorem ipsum lalalap';
// string.length > 1 ? console.log(string[string.length - 2]) : console.log('nea');

// Даны два целых числа. Проверьте, что первое число без остатка делится на второе.
// const first = 24;
// const second = 7;
// first % second === 0 ? console.log(true) : console.log('ne');

// Выведите в консоль все целые числа от 1 до 100.

// for (let i = 1; i <= 100; i++) {
//   console.log(i);
// }

// Выведите в консоль все целые числа от -100 до 0.
// for (let i = -100; i < 0; i++) {
//   console.log(i);
// }

// Выведите в консоль все четные числа из промежутка от 1 до 100.
// for (let i = 1; i <= 100; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// Выведите в консоль все числа кратные трем в промежутке от 1 до 100.
// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0) {
//     console.log(i);
//   }
// }
// Найдите сумму всех целых чисел от 1 до 100.
// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//   sum += i;
//   console.log(sum);
// }

// Найдите сумму всех целых четных чисел в промежутке от 1 до 100.
// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//   if (i % 2 === 0) {
//     sum += i;
//     console.log(sum);
//   }
// }
// Найдите сумму всех целых нечетных чисел в промежутке от 1 до 100.
// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//   if (i % 2 !== 0) {
//     sum += i;
//     console.log(sum);
//   }
// }
// Даны два целых числа. Найдите остаток от деления первого числа на второе.
// const first = 5;
// const second = 2;
// const diff = first % second;
// console.log(diff);

// Дана некоторая строка.Переберите и выведите в консоль по очереди все символы с конца строки.
// const stringo = words => {
//   const arr = words.split('');

//   for (let i = arr.length - 1; i >= 0; i--) {
//     console.log(arr[i]);
//   }
// };
// stringo('asdfghjkl');

// Дан массив с числами. Найдите сумму квадратов элементов этого массива.
// const func = arr => {
//   let sum = 0;
//   for (let i = 0; i <= arr.length - 1; i++) {
//     sum += arr[i] ** 2;
//   }
//   console.log(sum);
// };
// func([1, 2, 3]);

// Дан массив с числами. Найдите сумму квадратных корней элементов этого массива.
// const func = arr => {
//   let sum = 0;
//   for (let i = 0; i <= arr.length - 1; i++) {
//     sum += arr[i] ** (1 / 2);
//   }
//   console.log(sum);
// };
// func([1, 4, 9]);

// Дан массив с числами. Найдите сумму положительных элементов этого массива.
// const func = arr => {
//   let sum = 0;
//   for (let i = 0; i <= arr.length - 1; i++) {
//     if (arr[i] > 0) {
//       sum += arr[i];
//     }
//   }
//   console.log(sum);
// };
// func([1, 4, 9, -8, -19]);

// Дан массив с числами. Найдите сумму тех элементов этого массива, которые больше нуля и меньше десяти.
// const func = arr => {
//   let sum = 0;
//   for (let i = 0; i <= arr.length - 1; i++) {
//     if (arr[i] > 0 && arr[i] < 10) {
//       sum += arr[i];
//     }
//   }
//   console.log(sum);
// };
// func([1, 4, 9, 10, -8, -19]);

// №1
// Дана строка:
// 'abcde'
// Получите массив букв этой строки.
// const letters = 'abcde';
// console.log(letters.split(''));

// №2
// Дано некоторое число:
// 12345
// Получите массив цифр этого числа.
// const numbs = 12345;
// console.log(numbs.toString().split(''));

// №3
// Дано некоторое число:
// 12345
// Переверните его:
// 54321
// const numb = 12345;
// console.log(
//   numb
//     .toString()
//     .split('')
//     .toSorted((a, b) => b - a)
//     .join('')
// );

// №4
// Дано некоторое число:
// 12345
// Найдите сумму цифр этого числа.
// const numb = 12345;
// const arr = numb.toString().split('').map(Number);
// let sum = 0;
// for (let i = 0; i <= arr.length - 1; i++) {
//   sum += arr[i];
// }
// console.log(sum);

// Заполните массив целыми числами от 1 до 10.
// let arr = [];
// for (let i = 1; i <= 10; i++) {
//   arr.push(i);
// }
// console.log(arr);

// Заполните массив четными числами из промежутка от 1 до 100.
// let arr = [];
// for (let i = 0; i <= 100; i++) {
//   if (i % 2 === 0) {
//     arr.push(i);
//   }
// }
// console.log(arr);

// Дан массив с дробями:
// [1.456, 2.125, 3.32, 4.1, 5.34]
// Округлите эти дроби до одного знака в дробной части.
// const arr = [1.456, 2.125, 3.32, 4.1, 5.34];
// let arr1 = [];
// for (let i = 0; i < arr.length; i++) {
//   arr1.push(arr[i].toFixed(1));
// }
// console.log(arr1);

// Дан массив со строками. Оставьте в этом массиве только те строки, которые начинаются на http://.
// const arr = [
//   'ghhjfkdjhgfdfghjklkjhg.html',
//   'http://.dfghjkjhgfdfghjk',
//   'fghjkjhgfcvbnm',
// ];
// const newArr = arr.filter(str => str.startsWith('http://'));
// console.log(newArr);

// Дан массив со строками. Оставьте в этом массиве только те строки, которые заканчиваются на .html.
// const arr = [
//   'ghhjfkdjhgfdfghjklkjhg.html',
//   'http://.dfghjkjhgfdfghjk',
//   'fghjkjhgfcvbnm',
// ];
// const newArr = arr.filter(str => str.endsWith('.html'));
// console.log(newArr);

// Дан массив с числами.Увеличьте каждое число из массива на 10 процентов.
// const arr = [10, 2, 3, 4, 5, 6, 7];
// const newArr = arr.map(item => item * 1.1);
// console.log(newArr);

// Заполните массив случайными числами из промежутка от 1 до 100.
const arr = [];
console.log(arr.push(Math.random() * 100));

// Дано некоторое число:
// 12345
// Выведите в консоль все его символы с конца.

// Дан некоторый массив, например, вот такой:
// [1, 2, 3, 4, 5, 6]
// По очереди выведите в консоль подмассивы из двух элементов нашего массива:
// [1, 2]
// [3, 4]
// [5, 6]

// Даны два массива:
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// Слейте эти массивы в новый массив:
// [1, 2, 3, 4, 5, 6]
