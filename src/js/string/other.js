console.log('======other-repeat======')
// repeat
console.log('x'.repeat(3))
console.log('hello'.repeat(2))
console.log('na'.repeat(0))
console.log('======other-pad======')
// padStart()，padEnd()
console.log('x'.padStart(5, 'ab')) // 'ababx'
console.log('x'.padStart(4, 'ab')) // 'abax'
console.log('x'.padEnd(5, 'ab')) // 'xabab'
console.log('x'.padEnd(4, 'ab')) // 'xaba'
console.log('abc'.padStart(10, '0123456789')) // '0123456abc'
//數值補全指定位數
console.log('1'.padStart(10, '0')) // "0000000001"
console.log('12'.padStart(10, '0')) // "0000000012"
console.log('123456'.padStart(10, '0')) // "0000123456"
//提示文字
console.log('12'.padStart(10, 'YYYY-MM-DD')) // "YYYY-MM-12"
console.log('09-12'.padStart(10, 'YYYY-MM-DD')) // "YYYY-09-12"
console.log('======other-trim======')
const s = '  abc  ';
console.log(s.trim()) // "abc"
console.log(s.trimStart()) // "abc  "
console.log(s.trimEnd()) // "  abc"