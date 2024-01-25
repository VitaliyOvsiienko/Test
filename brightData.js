// Write a function which implements case-insensitive lexicographical comparison of two strings

// function compare(a, b) { }
// a == b => return 0
// a > b => return 1
// a < b => return -1

// Examples of usage:
// compare("HELLO", "hello") => return 0
// compare("aba", "aa") => return 1, because in the first string we earlier meet greater character: "b">"a"
// compare ("aabb", "aacc") => return -1, because in the second string we earlier meet greater character: "c">"b"
// compare("abc", "abcd") => return -1, because in the second string we earlier meet greater character "d"

// Note: you can not use String.prototype.localeCompare
// Note: you need to compare characters ("a">"b"), not strings (use loop)

//  ========== Вариант 1 ==========

// function compare(a, b) {
//   // Приводим обе строки к нижнему регистру для сравнения без учета регистра

//   const lowerA = a.toLowerCase();
//   const LowerB = b.toLowerCase();

//   // Определяем длину, на основе которой будем сравнивать строки

//   const length = Math.min(lowerA.length, LowerB.length);

//   // Проходим по каждому символу в строках

//   for (let i = 0; i < length; i += 1) {
//     const codeA = lowerA.charCodeAt(i);
//     const codeB = LowerB.charCodeAt(i);

//     //Сравниваем коды ASCII символов

//     if (codeA < codeB) {
//       return -1; //Если символ в первой строке меньше, возвращаем -1
//     } else if (codeA > codeB) {
//       return 1; // Если символ во второй строке меньше, возвращаем 1
//     }
//     // Если символы равны, продолжаем сравнение
//   }

//   // Если все символы дошли до конца и строки равны по длине, возвращаем 0

//   if (lowerA.length === LowerB.length) {
//     return 0;
//   }

//   // Если одна из строк короче, считаем её меньшей

//   return lowerA.length < LowerB.length ? -1 : 1;
// }

// // Console.log

// console.log(compare('HELLO', 'hello')); // Вернет 0
// console.log(compare('aba', 'aa')); // Вернет 1
// console.log(compare('aabb', 'aacc')); // Вернет -1
// console.log(compare('abc', 'abcd')); // Вернет -1

// // В данном коде функция compare принимает две строки a и b, приводит их к нижнему регистру и сравнивает посимвольно на основе кодов ASCII. Результат сравнения возвращается в соответствии с заданными условиями: 0, если строки равны; 1, если первая строка больше; -1, если вторая строка больше.

// // ========== Вариант 2 ==========

// function compare(a, b) {
//   if (a === null && b === null) {
//     return 0;
//   }

//   const lowerA = (a || '').toLowerCase();
//   const lowerB = (b || '').toLowerCase();
//   const length = Math.min(lowerA.length, lowerB.length);

//   for (let i = 0; i < length; i += 1) {
//     const codeA = lowerA.charCodeAt(i);
//     const codeB = lowerB.charCodeAt(i);

//     if (codeA < codeB) return -1;
//     if (codeA > codeB) return 1;
//   }

//   return lowerA.length - lowerB.length;
// }

// console.log(compare('HELLO', 'hello')); // Вернет 0
// console.log(compare('aba', 'aa')); // Вернет 1
// console.log(compare('aabb', 'aacc')); // Вернет -1
// console.log(compare('abc', 'abcd')); // Вернет -1
