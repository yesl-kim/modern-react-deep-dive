const isEmpty = (arr) => Array.isArray(arr) && arr.length === 0

const isWideEmpty = (obj) => Object.keys(obj).length === 0

// console.log('isEmpty({})', isEmpty({}))
// console.log('isEmpty([])', isEmpty([]))
// console.log('isWideEmpty([])', isWideEmpty([]))
// console.log('isWideEmpty({})', isWideEmpty({}))

// js string은 원시타입, 변경 불가능한 값
// 새로 할당만 가능.....
const foo = 'foo'
// console.log('foo[0]', foo[0])
// foo[0] = 'b'
// console.log('foo[0]', foo[0])

// const key = Symbol('key')
// const key2 = Symbol('key')
// console.log('key === key2', key === key2)
// console.log(
//   'Symbol.for("key") === Symbol.for("key")',
//   Symbol.for('key') === Symbol.for('key')
// )

// Object.is
// 몇몇 특이 케이스에서 ===의 문제를 보안한 Object.is
console.log('== vs Object.is')
console.log('1 == "1"', 1 == '1')
console.log('1 === "1"', 1 === '1')
console.log('Object.is(1, "1")', Object.is(1, '1'))
console.log('')

console.log('=== vs Object.is')
console.log('-0 === +0', -0 === +0)
console.log('Object.is(-0, +0)', Object.is(-0, +0))
console.log('')

console.log('NaN === NaN', NaN === NaN)
console.log('Object.is(NaN, NaN)', Object.is(NaN, NaN))
console.log('Number.NaN === NaN', Number.NaN === NaN)
console.log('Object.is(Number.NaN, NaN)', Object.is(Number.NaN, NaN))
console.log('')

console.log('0/0', 0 / 0)
console.log('NaN === 0/0', NaN === 0 / 0)
console.log('Object.is(NaN, 0/0)', Object.is(NaN, 0 / 0))
console.log('')

// 그러나 객체의 참조 비교에서는 기존과 똑같이 얕은 비교 수행
console.log('Object.is({},{})', Object.is({}, {}))

const a = {}
const b = a
console.log('Object.is(a, b)', Object.is(a, b))
