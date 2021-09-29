"use strict";
// //  DLA JEDNEGO ARGUMENTU FUNKCJI
// const memoization = (num) => {
//   let result = 0;
//   if (!memoization.saveData[num]) {
//     for (let i = 1; i <= num; i++) {
//       for (let j = 1; j <= num; j++) {
//         result++;
//       }
//     }
//     memoization.saveData[num] = result;
//   }
//   return memoization.saveData[num];
// };
// memoization.saveData = {};
// console.log(memoization.saveData);
// console.time("First call");
// console.log(memoization(800));
// console.timeEnd("First call");
// // use the same value two times
// console.time("Second call");
// console.log(memoization(800));
// console.timeEnd("Second call");
// console.time("Third call");
// console.log(memoization(800));
// console.timeEnd("Third call");
// //-----------------------------------------------------------------------------
// // DLA KILKU ARGUMENTÓW FUNKCJI
// const memoizationManyArgs = function (howMany, start) {
//   let key = [...arguments];
//   let i = start;
//   let result = 0;
//   if (!memoizationManyArgs.cachedResults[key]) {
//     for (i; i < howMany; i++) {
//       result += i;
//     }
//     memoizationManyArgs.cachedResults[key] = result;
//   }
//   return memoizationManyArgs.cachedResults[key];
// };
// //
// memoizationManyArgs.cachedResults = {};
// console.time("First call");
// console.log(memoizationManyArgs(9467, 5));
// console.timeEnd("First call");
// console.time("Second call");
// console.log(memoizationManyArgs(9467, 5));
// console.timeEnd("Second call");
// console.time("Third call");
// console.log(memoizationManyArgs(9467, 5));
// console.timeEnd("Third call");
// console.log(memoizationManyArgs.cachedResults);
// //-------------------------------------------------------------------------------
// // KORZYSTANIE Z FUNKCJI
// const memoize = (func) => {
//   const results = {};
//   return (...args) => {
//     const argsKey = JSON.stringify(args);
//     if (!results[argsKey]) {
//       results[argsKey] = func(...args);
//     }
//     console.log(results);
//     return results[argsKey];
//   };
// };
// const clumsysquare = memoize((num) => {
//   let result = 0;
//   for (let i = 1; i <= num; i++) {
//     for (let j = 1; j <= num; j++) {
//       result++;
//     }
//   }
//   return result;
// });
// console.time("First call");
// console.log(clumsysquare(9467, 9));
// console.timeEnd("First call");
// console.time("Second call");
// console.log(clumsysquare(9467, 9));
// console.timeEnd("Second call");
// console.time("Third call");
// console.log(clumsysquare(9467, 9));
// console.timeEnd("Third call");
