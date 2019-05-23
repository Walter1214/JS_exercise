console.log('======set======')
//ES6 提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。
// const s = new Set();

// [2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x));

// for (let i of s) {
//   console.log(i);
// }

// 例一
// const set = new Set([1, 2, 3, 4, 4]);
// console.log(set)
// console.log([...set])

// [1, 2, 3, 4]

// // 例二
// const items = new Set([1, 2, 3, 4, 5, 5, 5, 5]);
// console.log(items.size) // 5

// // 例三
// const set = new Set(document.querySelectorAll('div'));
// console.log([...set]) // 56

// // 类似于
// const set = new Set();
// document
//  .querySelectorAll('div')
//  .forEach(div => set.add(div));
// set.size // 56

// Set 的內容　Key = Value

// let set = new Set(['red', 'green', 'blue']);

// for (let item of set.keys()) {
//   console.log(item);
// }
// // red
// // green
// // blue

// for (let item of set.values()) {
//   console.log(item);
// }
// // red
// // green
// // blue

// for (let item of set.entries()) {
//   console.log(item);
// }
// // ["red", "red"]
// // ["green", "green"]
// // ["blue", "blue"]

// // Array and Set 一起使用可以除去重複的值
// let arr = [3, 5, 2, 2, 5, 5];
// let unique = [...new Set(arr)];
// // [3, 5, 2]


// let a = new Set([1, 2, 3]);
// let b = new Set([4, 3, 2]);
// // 使用 Set 可以很容易地实现并集（Union）、交集（Intersect）和差集（Difference）。
// // 并集
// let union = new Set([...a, ...b]);
// // Set {1, 2, 3, 4}

// // 交集
// let intersect = new Set([...a].filter(x => b.has(x)));
// // set {2, 3}

// // 差集
// let difference = new Set([...a].filter(x => !b.has(x)));
// // Set {1}

// // 如果想在遍历操作中，同步改变原来的 Set 结构，目前没有直接的方法，但有两种变通方法。一种是利用原 Set 结构映射出一个新的结构，然后赋值给原来的 Set 结构；另一种是利用Array.from方法。

// // 方法一
// let set = new Set([1, 2, 3]);
// set = new Set([...set].map(val => val * 2));
// // set的值是2, 4, 6

// // 方法二
// let set = new Set([1, 2, 3]);
// set = new Set(Array.from(set, val => val * 2));
// // set的值是2, 4, 6

require ('./weakSet')