"use strict";
// // Jeżeli n to 1, zatrzymaj się - przypadek bazowy.
// // Jeżeli n jest parzyste, powtórz działanie n/2 - przypadek rekurencyjny.
// // Jeżeli n jest nieparzyste, powtórz działanie dla 3n +1 - przypadek rekurencyjny.
// // Algorytm zwraca liczbę kroków potrzebnych do doprowadzenia liczby do 1.
// const recursion = (n) => {
//   if (n === 1) {
//     debugger;
//     return 0;
//   }
//   debugger;
//   return n % 2 === 0 ? recursion(n / 2) + 1 : recursion(3 * n + 1) + 1;
// };
// console.log(recursion(21));
