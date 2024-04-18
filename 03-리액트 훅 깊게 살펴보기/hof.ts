const add = (a) => (b) => a + b

const add1 = add(1) // add1은 a = 1을 기억한다
const add3 = add(3)

console.log(add1(3))
console.log(add3(3))
