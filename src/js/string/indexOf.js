//ES6 includes(), startsWith(), endsWith()
// includes()：返回布尔值，表示是否找到了参数字符串。
// startsWith()：返回布尔值，表示参数字符串是否在原字符串的头部。
// endsWith()：返回布尔值，表示参数字符串是否在原字符串的尾部。
console.log('======indexOf======')
let indexOfParam = 'Hello world!';
console.log(indexOfParam.startsWith('Hello'))
console.log(indexOfParam.endsWith('!'))
console.log(indexOfParam.includes('o'))
// 这三个方法都支持第二个参数，表示开始搜索的位置。
console.log(indexOfParam.startsWith('world', 6))
console.log(indexOfParam.endsWith('Hello', 5))
console.log(indexOfParam.includes('Hello', 6) )