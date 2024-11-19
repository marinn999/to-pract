// let status = null;
// console.log(typeof status);
//--------------------------------1----------------------------
// Дана некоторая строка. Найдите позицию первого нуля в строке.
// let a = 'lala zuzu index of first 0 is 25';
// const zero = a.indexOf(0);
// console.log(zero);
// function findFirstZeroPosition(smth) {
//   return smth.indexOf(0);
// }

// const exampleToTry = 'lala zuzu index of first 0 is 25';
// const position = findFirstZeroPosition(exampleToTry);
// console.log(position);
//---------------------------------2---------------------------
// Выведите в консоль все числа в промежутке от 1 до 1000,
//     сумма первой и второй цифры которых равна пяти.

// for (let i = 1; i < 1000; i++) {
//   const str = i.toString();
//   if (str.length >= 2) {
//     const firstNumb = parseInt(str[0]);
//     const secondNumb = parseInt(str[1]);
//     if (firstNumb + secondNumb === 5) {
//       console.log(i);
//     }
//   }
// }
// Пояснення коду:

// 	1.	Цикл for проходить через всі числа від 1 до 1000.
// 	2.	Число i перетворюється в рядок str, щоб легко отримати доступ до окремих цифр.
// 	3.	Перевіряється, чи число має принаймні дві цифри (бо одноцифрові числа не відповідають вимозі).
// 	4.	Якщо сума першої та другої цифр дорівнює 5, число виводиться в консоль.

// --------------------------------- 3---------------------------
//Дан массив. Удалите из него элементы с заданным значением.
// function newArrayWithoutDeletedItems(arr, value) {
//   return arr.filter(element => element !== value);
// }
// let array = [3, 4, 5, 6, 7];
// let valueToRemove = 5;
// let result = deletedItems(array, valueToRemove);
// console.log(result);
// Пояснення:
// •	Метод filter() повертає новий масив, залишаючи тільки ті елементи, які відповідають
// умові(element !== value), тобто всі елементи, які не рівні value.
// •	Цей спосіб не змінює вихідний масив, а повертає новий масив без елементів з заданим значенням.

//Якщо ви хочете змінити сам масив (видалити елементи без створення нового масиву)
// function changedArrayWithoutDeletedItems(arr, value) {
//   for (let i = arr.length - 1; i >= 0; i--) {
//     if (arr[i] === value) {
//       arr.splice(i, 1);
//     }
//   }
// }
// let array = [3, 4, 5, 6, 7];
// changedArrayWithoutDeletedItems(array, 5);
// console.log(array);

//------------------------------------4--------------------------------
// Дан некоторый массив, например, вот такой:
// [1, 2, 3, 4, 5, 6]
// Найдите сумму первой половины элементов этого массива.
// const arr = [1, 2, 3, 4, 5, 6];
// const sum = arr[0] + arr[1] + arr[2];
// console.log(sum);

// const array = [1, 2, 3, 4, 5, 6];
// function sumFirstHalf(arr) {
//   const middleOfArr = arr.length / 2;
//   const firstHalf = arr.slice(0, middleOfArr);
//   const sum = firstHalf.reduce((acc, curVal) => acc + curVal, 0);
//   return sum;
// }
// console.log(sumFirstHalf(array));

// Пояснення:

// 	1.	Math.floor(arr.length / 2) — обчислює середину масиву, округлюючи вниз у разі непарної довжини.
// 	2.	arr.slice(0, middleIndex) — бере підмасив від початку до середнього індексу (не включаючи його).
// 	3.	reduce() — обчислює суму елементів у підмасиві.

//------------------------------------5--------------------------------
// Дан массив с числами. Подсчитайте количество отрицательных чисел в этом массиве.
// function sumOfNegativeNum(arr) {
//   const negNumbArr = arr.filter(el => el < 0);
//   return negNumbArr.length;
// }
// const array = [-1, 2, 3, 4, 5, -2, -3];
// console.log(sumOfNegativeNum(array));

//------------------------------------6--------------------------------
// Дан массив с числами. Оставьте в нем только положительные числа.
// function arrWithPosNumbs(arr) {
//   return arr.filter(el => el > 0);
// }
// const array = [-1, -4, 7, 8, -6, 1];
// console.log(arrWithPosNumbs(array));

//------------------------------------7--------------------------------
// Дана строка. Удалите предпоследний символ из этой строки.
// const str = 'aaaaaaafa';
// function minusPenultimateCharacter(str) {
//   const arr = str.split('');
//   const penultChIndex = arr.length - 2;
//   console.log(arr[penultChIndex]);
//     const newArr = arr.splice(penultChIndex, 1);
//   console.log(newArr);
//   const newStr = newArr.join('');
//   return newStr;
// }
// const string = 'aaaaaaafa';
// console.log(minusPenultimateCharacter(string));

//------------------------------------8--------------------------------
// Дан некоторый массив, например, вот такой:
// [1, 2, 3, 4, 5, 6]
// Поделите сумму первой половины элементов этого массива на сумму второй половины элементов.

// function sumToSum(arr) {
//   const middleOfArr = Math.floor(arr.length / 2);
//   const firstHalf = arr.slice(0, middleOfArr);
//   const secondHalf = arr.slice(middleOfArr);
//   const sumOne = firstHalf.reduce((acc, init) => acc + init, 0);
//   const sumSec = secondHalf.reduce((acc, init) => acc + init, 0);
//   if (sumSec !== 0) {
//     return sumOne / sumSec;
//   }
// }
// const array = [1, 2, 3, 4, 5, 6];
// console.log(sumToSum(array));

//--------------------------------1----------------------------
// Дана некоторая строка. Найдите позицию первого нуля в строке.

//---------------------------------2---------------------------
// Выведите в консоль все числа в промежутке от 1 до 1000,
//     сумма первой и второй цифры которых равна пяти.

// --------------------------------- 3---------------------------
//Дан массив. Удалите из него элементы с заданным значением.

//------------------------------------4--------------------------------
// Дан некоторый массив, например, вот такой:
// [1, 2, 3, 4, 5, 6]
// Найдите сумму первой половины элементов этого массива.

//------------------------------------5--------------------------------
// Дан массив с числами. Подсчитайте количество отрицательных чисел в этом массиве.

//------------------------------------6--------------------------------
// Дан массив с числами. Оставьте в нем только положительные числа.

//------------------------------------8--------------------------------
// Дан некоторый массив, например, вот такой:
// [1, 2, 3, 4, 5, 6]
// Поделите сумму первой половины элементов этого массива на сумму второй половины элементов.

//------------------------------------7--------------------------------
// Дана строка. Удалите предпоследний символ из этой строки.

//_--------------------------------------------------------------------------
//_--------------------------------------------------------------------------
//----------------------------------LEVEL 2.3--------------------------------
//_--------------------------------------------------------------------------
//_--------------------------------------------------------------------------

//------------------------------------9--------------------------------
// Даны два слова.
// Проверьте, что последняя буква первого слова совпадает с первой буквой второго слова.

// function compare(word1, word2) {
//   if (word1[word1.length - 1] === word2[0]) {
//     return 'yes';
//   } else {
//     return 'no';
//   }
// }
// const fir = 'sanct';
// const sec = 'peter;';
// console.log(compare(fir, sec));
//   OR
// function compare(word1, word2) {
//   const first = word1[word1.length - 1];
//   const sec = word2[0];
//   return first === sec ? 'true' : 'false';
// }
//------------------------------------10--------------------------------
//Дана некоторая строка. Найдите позицию третьего нуля в строке.
// function findThirdzero(str) {
//   let zeroCount = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === '0') {
//       zeroCount++;
//       if (zeroCount === 3) {
//         return i; // Повертаємо позицію третього нуля
//       }
//     }
//   }
//   return -1; // Повертаємо -1, якщо третього нуля немає
// }
// const input = '105030607080';
// console.log(findThirdzero(input));

//------------------------------------11--------------------------------
// Даны числа, разделенные запятыми:

// '12,34,56'
// Найдите сумму этих чисел.
// function sumOfNumbs(str) {
//   // split(',') розбиває рядок на окремі символи за комами.
//   // Крім того, пробіли після ком у рядку const numb = '12, 34, 56'; заважають
//   // правильному перетворенню рядка в числа.
//   const numbToArr = str
//     .toString()
//     .split(',')
//     .map(num => Number(num.trim()));
//   const sum = numbToArr.reduce((acc, curr) => acc + curr, 0);
//   return sum;
// }
// const numb = '12, 34, 56';
// console.log(sumOfNumbs(numb));
//OR
// function countSum(str) {
//   const numbArr = str.split(',').map(el => Number(el));
//   return numbArr.reduce((acc, cur) => acc + cur, 0);
// }
// const string = '12,34,56';
// console.log(countSum(string));
//------------------------------------12--------------------------------
// Дана дата в следующем формате:

// '2025-12-31'
// Преобразуйте эту дату в следующий объект:

// {
// 	year: '2025',
// 	month: '12',
// 	day: '31',
// }
// function dateToObj(str) {
//   const [year, month, day] = str.split('-');
//   return {
//     year: year,
//     month: month,
//     day: day,
//   };
// }
// const date = '2025-12-31';
// console.log(dateToObj(date));
// 	•	Використовуємо метод split('-') для розбиття рядка за символом '-', що дозволяє отримати
//     масив з трьох елементів: рік, місяць і день.
// 	•	Деструктуруємо масив у змінні year, month, і day.
// 	•	Повертаємо об’єкт, у якому кожна змінна є значенням відповідного ключа.

//------------------------------------13--------------------------------
//Дана некоторая строка с буквами и цифрами. Получите позицию первой цифры в этой строке.

// function firstNumberInStr(str) {
//   for (let i = 0; i < str.length; i++) {
//     if (!isNaN(str[i]) && str[i]!=='') {
//       return i;
//     }
//   }
// }
// const sting = 'lala2kafa3';
// console.log(firstNumberInStr(sting));
// //isNaN(str[i]): перевіряє, чи є str[i] числом. Якщо значення не є числом, isNaN повертає true, і навпаки.
// //str[i] !== ' ' додано, щоб уникнути хибнопозитивного результату для пробілів, які isNaN також вважає числами.

//------------------------------------14--------------------------------
//Дан объект с ключами и значениями. Запишите в первый массив ключи объекта, а во второй - значения.
// const obj = {
//   name: 'Alice',
//   age: 25,
//   city: 'Wonderland'
// };

// // Object.keys(obj) возвращает массив всех ключей объекта obj
// const keys = Object.keys(obj);

// // Object.values(obj) возвращает массив всех значений объекта obj.
// const values = Object.values(obj);

// console.log(keys); // ['name', 'age', 'city']
// console.log(values); // ['Alice', 25, 'Wonderland']

//------------------------------------15--------------------------------
//Дано число. Выведите в консоль количество четных цифр в этом числе.
// const number = 1234567;
// const arr = number
//   .toString()
//   .split('')
//   .map(el => Number(el));
// console.log(arr);
// const evenArr = arr.filter(el => el % 2 === 0);
// console.log(evenArr);
// console.log(evenArr.length);

//------------------------------------16--------------------------------
// Дана некоторая строка:
// 'abcde'
// Переведите в верхний регистр все нечетные буквы этой строки. В нашем случае должно получится следующее:
// 'AbCdE'
// let str = 'abcde';
// const newStr = str
//   .split('')
//   .map((el, index) =>
//     index % 2 === 0 ? el.toUpperCase() : el.toLowerCase()
//   )
//   .join('');
// console.log(newStr);

//------------------------------------17--------------------------------
// Дана некоторая строка со словами:
// 'aaa bbb ccc'
// Сделайте заглавным первый символ каждого слова в этой строке. В нашем случае должно получится следующее:
// 'Aaa Bbb Ccc'

// let str = 'aaa bbb ccc';
// const newStr = str
//   .split(' ')
//   .map(el => el[0].toUpperCase() + el.slice(1)) // - `el[0].toUpperCase()` делает первую букву заглавной
//   // - `el.slice(1)` берет оставшуюся часть строки, начиная с 1-го индекса
//   .join(' ');
// console.log(newStr);

//------------------------------------18--------------------------------
// Дана некоторая строка, например, вот такая:
// '023m0df0dfg0'
// Получите массив позиций всех нулей в этой в строке.

// const str = '023m0df0dfg0';
// let newArr = [];
// for (let i = 0; i < str.length; i++) {
//   if (str[i] === '0') {
//     newArr.push(i);
//   }
// }
// console.log(newArr);
//------------------------------------19--------------------------------
// Дана некоторая строка:
// 'abcdefg'
// Удалите из этой строки каждый третий символ. В нашем случае должно получится следующее:
// 'abdeg'
// const str = 'abcdefg';
// let result = '';
// for (let i = 0; i < str.length; i++) {
//   // Проверяем, является ли индекс i + 1 кратным 3 (i начинается с 0, поэтому добавляем 1)
//   if ((i + 1) % 3 !== 0) {
//     result += str[i]; // Добавляем символ в результат, если он не третий
//   }
// }
// console.log(result);

//------------------------------------20--------------------------------
// Дан некоторый массив, например, вот такой:
// [1, 2, 3, 4, 5, 6]
// Поделите сумму элементов, стоящих на четных позициях, на сумму элементов, стоящих на нечетных позициях.
// const massiv = [1, 2, 3, 4, 5, 6];
// let qwe = [];
// let rtz = [];
// for (let i = 0; i < massiv.length; i++) {
//   if (i % 2 === 0) {
//     qwe.push(massiv[i]);
//   } else {
//     rtz.push(massiv[i]);
//   }
//   qwe.reduce((acc, cur) => acc + cur, 0) /
//     rtz.reduce((acc, cur) => acc + cur, 0);
// }
// console.log(qwe);
// console.log(rtz);
// console.log(
//   qwe.reduce((acc, cur) => acc + cur, 0) /
//     rtz.reduce((acc, cur) => acc + cur, 0)
// );

//Дан объект с ключами и значениями. Запишите в первый массив ключи объекта, а во второй - значения.
// const date = {
//   day: 'today',
//   month: 'september',
//   year: 2025,
// };
// const keys = Object.keys(date);
// console.log(keys);
// const val = Object.values(date);
// console.log(val);

//Дано число. Выведите в консоль количество четных цифр в этом числе.
// const numb = 12345678;
// const arr = numb
//   .toString()
//   .split('')
//   .map(el => Number(el));
// console.log(arr);
// for (let i = 0; i < arr.length; i++) {
//   const newArr = arr.filter(el => el % 2 === 0);
//   console.log(newArr.length);
// }

// Дана некоторая строка:
// 'abcde'
// Переведите в верхний регистр все нечетные буквы этой строки. В нашем случае должно получится следующее:
// 'AbCdE'
// const str = 'abcde';
// const array = str
//   .split('')
//   .map((el, ind) => (ind % 2 === 0 ? el.toUpperCase() : el.toLowerCase()))
//   .join('');
// console.log(array);
// Дана некоторая строка со словами:
// 'aaa bbb ccc'
// Сделайте заглавным первый символ каждого слова в этой строке. В нашем случае должно получится следующее:
// 'Aaa Bbb Ccc'
// const string = 'aaa bbb ccc';
// const ar = string.split(' ').map(el => el[0].toUpperCase() + el.slice(1));
// console.log(ar);
// Дана некоторая строка, например, вот такая:
// '023m0df0dfg0'
// Получите массив позиций всех нулей в этой в строке.
// const stroka = '023m0df0dfg0';
// let newstroka = [];
// for (let i = 0; i < stroka.length; i++) {
//   if (stroka[i] === '0') {
//     newstroka.push(i);
//   }
// }
// console.log(newstroka);
// Дана некоторая строка:
// 'abcdefg'
// Удалите из этой строки каждый третий символ. В нашем случае должно получится следующее:
// 'abdeg'
// const asd = 'abcdefg';
// let result = '';
// for (let i = 0; i < asd.length; i++) {
//   if ((i + 1) % 3 !== 0) {
//     result += asd[i];
//   }
// }
// console.log(result);

// Дан некоторый массив, например, вот такой:
// [1, 2, 3, 4, 5, 6]
// Поделите сумму элементов, стоящих на четных позициях, на сумму элементов, стоящих на нечетных позициях.
//
// const massiv = [1, 2, 3, 4, 5, 6];
// let qwe = [];
// let rtz = [];
// for (let i = 0; i < massiv.length; i++) {
//   if (i % 2 === 0) {
//     qwe.push(massiv[i]);
//   } else {
//     rtz.push(massiv[i]);
//   }
//   qwe.reduce((acc, cur) => acc + cur, 0) /
//     rtz.reduce((acc, cur) => acc + cur, 0);
// }
// console.log(qwe);
// console.log(rtz);
// console.log(
//   qwe.reduce((acc, cur) => acc + cur, 0) /
//     rtz.reduce((acc, cur) => acc + cur, 0)
// );

//------------------------------------21--------------------------------
// Дана некоторая строка с буквами и цифрами. Получите массив позиций всех цифр из этой строки.
// const str = 'a1b2c3d4e';
// let arr = [];
// for (let i = 0; i < str.length; i++) {
//   if (!isNaN(str[i])) {
//     //Перевіряє, чи є елемент цифрою (функція isNaN повертає true для значень, які не є числами).
//     arr.push(i);
//   }
// }
// console.log(typeof NaN); //typeof NaN завжди повертає 'number'
// console.log(arr);

//------------------------------------22--------------------------------

// Дан массив с некоторыми числами, например, вот такой:
// [123, 456, 789]
// Напишите код, который перевернет числа в этом массиве по следующему принципу:
// [321, 654, 987]

// const arr = [123, 456, 789];
// const newArr = arr.map(el => el.toString().split('').reverse().join(''));
// console.log(newArr);

//------------------------------------23--------------------------------

// Дана некоторая строка с числом:
// '1234567'
// Отделите тройки цифр пробелами, начиная с конца числа. В нашем случае должно получится следующее:
// '1 234 567'

// const str = '1234567';
// let result = '';
// for (let i = str.length - 1; i >= 0; i--) {
//   result = str[i] + result; // Додаємо символ до результату
//   if ((str.length - i) % 3 === 0 && i !== 0) {
//     result = ' ' + result; // Додаємо пробіл після кожних трьох цифр
//   }
// }
// console.log(result);
// //1.	(str.length - i)
// // Ця частина обчислює, скільки символів уже додано до результату з кінця рядка.
// // 	•	str.length — загальна кількість символів у рядку.
// // 	•	i — поточний індекс у циклі, який ми зменшуємо з кінця до початку.
// // Наприклад, якщо str = '1234567' і ми перебираємо символи:
// // 	•	Коли i = 6 (останній символ '7'): str.length - i = 7 - 6 = 1 (додано 1 символ).
// // 	•	Коли i = 5 (передостанній символ '6'): str.length - i = 7 - 5 = 2 (додано 2 символи).
// // 	•	Коли i = 4: str.length - i = 7 - 4 = 3 (додано 3 символи).
// // 	2.	(str.length - i) % 3 === 0
// // Ця умова перевіряє, чи кількість символів, які ми вже додали, є кратною 3. Якщо це так, то настав час додати пробіл.

// // 	i !== 0
// // Ця умова потрібна, щоб уникнути додавання пробілу перед першою цифрою числа.
// // 	•	Коли i = 0, ми перебираємо перший символ числа(ліворуч).
// //     У цей момент пробіл не потрібен, навіть якщо кількість символів кратна 3.

//------------------------------------24--------------------------------
// Дана некоторая строка:
// 'AbCdE'
// Смените регистр букв этой строки на противоположный. В нашем случае должно получится следующее:
// 'aBcDe'
// const str = 'AbCdE';
// const arrstr = str.split('');
// const revStr = arrstr.map(el =>
//   el === el.toUpperCase() ? el.toLowerCase() : el.toUpperCase()
// );
// console.log(revStr);

//------------------------------------25--------------------------------
// Дана некоторая строка со словами:
// 'aaa bbb ccc eee fff'
// Сделайте заглавным первый символ каждого второго слова в этой строке. В нашем случае должно получится следующее:
// 'aaa Bbb ccc Eee fff'
// const str = 'aaa bbb ccc eee fff';
// const arr = str.split(' ');
// let othArr = [];
// console.log(arr);
// for (let i = 0; i < arr.length; i++) {
//   if (i % 2 !== 0) {
//     othArr.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1));
//   } else {
//     othArr.push(arr[i]);
//   }
// }
// console.log(othArr);
