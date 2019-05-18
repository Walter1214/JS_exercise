console.log('======index======')
let hello = '你好a'
// chartAt and cahtCodeAt
//UTF-16 编码为0xD842 0xDFB7（十进制为55362 57271）
console.log('---chartAt and cahtCodeAt---')
console.log(hello.length)
console.log(hello.charAt(0))
console.log(hello.charAt(1))
console.log(hello.charCodeAt(0))
console.log(hello.charCodeAt(1))
//ES6 codePointAt
console.log('---codePointAt---')
console.log(hello.codePointAt(0))
console.log(hello.codePointAt(1))
console.log(hello.codePointAt(2))
console.log(hello.codePointAt(0).toString(16))
console.log(hello.codePointAt(1).toString(16))
console.log(hello.codePointAt(2).toString(16))
function is32Bit(param) {
  return param.codePointAt(0) > 0xFFFF;
}
console.log(is32Bit("𠮷"))
console.log(is32Bit("a"))
require('./normalize')
require('./indexOf')
require('./other')