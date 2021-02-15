// Cоздать функцию которая принимает число и возвращает  текст как в примере:
// 3275  —>  "3000 + 200 + 70 +5"

// let num = prompt('введіть число');
// let arr = Array.from(num.toString(), Number);
// let arr1 = arr.reverse();
// for (i = 0; i < num.length; i++) {
//         arr1[i] = arr1[i] * Math.pow(10, [i]);
// }
// let res = arr1.reverse();
// for (let n = 0; n < res.length; n++) {
//         if (n === res.length-1) {
//                 document.write(res[n]);
//                 break;
//                 }
//         document.write(res[n] + ' + ');
// }

// ____________________________________________________________

// Дан массив целых чисел, найдите тот, который встречается нечетное количество раз.Всегда будет только одно целое число, которое встречается нечетное количество раз
// [1,2,3,4,5,2,4,1,3] -> 5


// let arr = [1, 2, 3, 4, 5, 2, 4, 1, 3];
// let s = 1;
// for (i = 0; i < arr.length; i++) {
//         for (n = 1; n < arr.length; n++) {
//                 if (arr[i] === arr[n]) {
//                         s = s + 1;
//                 }
//         }
//         if ((s % 2) > 0) {
//                 console.log(arr[i]);
//                 break;
//         }
// }

// _______________________________________________________________

// Знайти анаграму.
// Перевірити чи слово має в собі такі самі літери як і поеперднє слово.

// ANAGRAM | MGANRAA -> true
// EXIT | AXET -> false
// GOOD | DOGO -> true
// 

// let str1 = prompt('enter first word');
// let str2 = prompt('enter second word');
// if (JSON.stringify(str1.split('').sort()) === JSON.stringify(str2.split('').sort())) {
//         alert(true);
// }
// else {
//         alert(false);
// }




// _______________________________________________________________

// Точная степень двойки
// Дано натуральное число N.
// Выведите слово YES, если число N является точной степенью двойки, или слово NO в противном случае.
// Операцией возведения в степень пользоваться нельзя!


// let num = prompt('enten number');
//  while ((num / 2) >= 2) {
// num = num / 2; }   
// if ((num / 2) === 1) {
//         alert('YES');
// }
// else alert('NO');

// ______________________________________________________________

// Сумма цифр числа
// Дано натуральное число N. Вычислите сумму его цифр.
// При решении этой задачи нельзя использовать строки,
// списки, массивы ну и циклы, разумеется.
// Рекурсія)
// let num = prompt('enter a number');
// let s = 0;
// function sum(num, s) {
//         if (num < 10) { return s = s + num; }
//         else {
//                 s = s + (num - Math.floor(num / 10) * 10);
//                 num = Math.floor(num / 10);
//                 return sum(num, s);
//         }
// }
// let result = sum(num, s);
// console.log(result);

// ______________________________________________________________

// Палиндром
// Дано слово, состоящее только из строчных латинских букв. Проверьте, является ли это слово палиндромом. Выведите YES или NO.
// При решении этой задачи нельзя пользоваться циклами, в решениях на питоне нельзя использовать срезы с шагом, отличным от 1.

// let str = prompt('enter a word');
// let strRevers = str.split('').reverse().join('');
// if (str === strRevers) {
//         alert('YES');
// }
// else { alert('NO')}

// _______________________________________________________________

// Количество единиц
// Дана последовательность натуральных чисел  в строке, завершающаяся двумя числами 0 подряд. Определите, сколько раз в этой последовательности встречается число 1. Числа, идущие после двух нулей, необходимо игнорировать.

// 2176491947586100 -> 3

// let arr = '2176491947586100';
// let s = 0;
// for (i = 0; i < arr.length; i++) {
//         if ((arr[i] == 0) && (arr[i + 1] == 0)) {
//                 i = arr.length;
//         }
//         else {
//                 if (arr[i] == 1) {
//                         s = s + 1;
//                 }
//         }
// }
// console.log(s)

// _________________________________________________________________

// Вирівняти багаторівневий масив в однорівневий
// [1,3, ['Hello, 'Wordd', [9,6,1]], ['oops'], 9] -> [1, 3, 'Hello, 'Wordd', 9, 6, 1, 'oops', 9]
// flat використовувати заборонено.

// let arr1 = [1, 3, ['Hello', 'Wordd', [9, 6, 1]], ['oops'], 9];
// function arrFlat(arr, d = 1) {
//          return d > 0 ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? arrFlat(val, d - 1) : val), [])
//                 : arr.slice();
// };
// let arr2 = arrFlat(arr1, Infinity);
// console.log(arr2);

// ___________________________________________________________________

// Знайти набільший елемент в масиві за допомогою reduce
// [1,6,9,0,17,88,4,7] -> 88

// let arr = [1, 6, 9, 0, 17, 88, 4, 7];
// let max = arr.reduce(function (a, b) {
//         if (a > b) {
//                 return a;
//         }
//         else { return b; }
// });
// console.log(max);
// ____________________________________________________________________

// Знайти найблільше число поліндром яке утворюється завдяки добутку двох простих пятизначних чисел.
// let arr = [];
// nextPrime:
// for (let num = 10000; num < 99999; num++){
//         for (let j = 2; j < num; j++) {
//                 if (num % j === 0) continue nextPrime;
//         }
//         arr.push(num);
// }
// // console.log(arr);

// function isPolin(k){
//     return k.toString() == k.toString().split('').reverse().join('');
//     }


// let arrMultiPolin = [];
// for (x = 0; x < arr.length; x++) {
//         for (y = x; y < arr.length; y++) { 
//                 if (isPolin(arr[x] * arr[y])) {
//                         arrMultiPolin.push(arr[x] * arr[y]); 
//                 }
//         }
// } 
// // console.log(arrMultiPolin);

// let max = arrMultiPolin.reduce(function (a, b) {
//         if (a > b) {
//                 return a;
//         }
//         else { return b; }
//         });
// console.log(max);

// ------------------------------------------------------------------------

//  для себя: нахождение максимального палиндрому при произведении 2-х натуральных 3-х значных чисел
// function isPolin(k){
//     return k.toString() == k.toString().split('').reverse().join('');
//     }
// let arrMultiPolin = [];
// for (x = 100; x < 999; x++) {
//         for (y = x; y < 999; y++) { 
//                 if (isPolin(x * y)) {
//                         arrMultiPolin.push(x * y); 
//                 }
//         }
// } 
// // console.log(arrMultiPolin);
// let max = arrMultiPolin.reduce(function (a, b) {
//         if (a > b) {
//                 return a;
//         }
//         else { return b; }
//         });
// console.log(max);

// ____________________________________________________________________

// Реалізувати друкарську машинку. 
// У вас є текст "Hello World".
// Ваша функція має друкувати цей текст по 1 симоволу в браузері. 
// КОЖНА нова буква має бути з РАНДОМНОЮ заутримкою від 0.1 до 1 секунди.
// Цим самим ви маєте симулювати написання даного тексту юзером. 
// Приклад: "Hello"
// Затримки: 
// H (затримка 0.6)
// e (затримка 0.1)
// l (затримка 0.3)
// l (затримка 0.7)
// о (затримка 1)



// let i = 0;
// let txt = 'Hello World';
// function typeWriter() {
//         if (i < txt.length) {
//                 document.getElementById("demo").innerHTML += txt.charAt(i) + "<br/>";
//                 i++;
//                 let t = Math.random() * (1 - 0.1) + 0.1;
//                 setTimeout(typeWriter, t * 1000);
//                 console.log(t);
//         }
// }
// typeWriter()

