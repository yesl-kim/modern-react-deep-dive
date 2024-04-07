const add = (a: number, b: number) => a + b
const add10 = (a: number) => {
  const b = 10
  return add(a, b)
}
// const add10 = (a: number) => add(a, 10)
// 이것도 클로저인가?

// console.log(add10(9))

function getGreeter() {
  const x = 'hello'
  return () => x
}

const greet = getGreeter()
// console.log(greet())

// 클로저의 활용, 정보 은닉
// value를 직접 수정할 수 없다.
// value에 지정한 동작만 할 수 있게 된다. (무분별한 변경을 막을 수 있다)
// 전역 변수를 줄일 수 있다
//
function counter(initialValue = 0) {
  let value = initialValue
  const increase = () => ++value
  const decrease = () => {
    if (value <= 0) {
      console.log('너무 작은 값')
      return
    }
    return --value
  }
  const getValue = () => value
  return { increase, decrease, getValue }
}

// biome-ignore lint/complexity/noBannedTypes: <explanation>
type NotFunction<T> = Exclude<T, Function>
const useState = <V extends NotFunction<V>>(initialValue: V) => {
  let state = initialValue
  const setState = (setter: V | ((prev: V) => V)) => {
    if (typeof setter === 'function') {
      state = setter(state)
    } else {
      state = setter
    }
    return state
  }

  // 여기서 state는 0, 불변값
  // setState가 변경하는 건 외부 스코프의 참조값이기 떄문에..?
  return [state, setState]
}

const count = counter()
// console.log(count.getValue())
// count.increase()
// count.increase()

// console.log(count.getValue())
// count.decrease()
// count.decrease()
// count.decrease()
// console.log(count.getValue())

const [state, setState] = useState(0)
let newState = setState((prev) => prev + 10)
console.log('newState', newState)
newState = setState((prev) => prev + 10)
console.log('newState', newState)
console.log(state)

// 리액트 함수 컴포넌트에서 클로저: useState
// setState 내부에서 이전 state값에 접근할 수 있는 이유 - useState가 선언된 당시의 스코프를 참조하고 있기 때문

// setTimout의 콜백함수가 i에 접근하는 것도 클로저
// 이 때 오류가 나는 이유는 i가 var 키워드로 선언되어 전역변수가 되었기 때문
// 함수 레벨을 따르는 i는 for 반복문 블록 사이에 서로 공유하는 값이 된다
// 결국 반복문이 모두 실행된 이후 setTimeout의 콜백함수가 참조하는 값은 모두 같은 i이다 (값은 5)
// 함수레벨이 아닌 블록 레빌을 따르는 키워드로 수정하여 해결할 수 있다
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), i * 1000)
}

// var를 사용하고도 클로저를 활용하려면?
// 각기 다른 함수를 반복 실행마다 생성해주면 된다
// => 즉시 실행 함수 활용
for (var i = 0; i < 5; i++) {
  setTimeout(
    (function (sec) {
      return () => console.log(sec)
    })(i),
    i * 1000
  )
}

// 주의사항! 클로저를 사용하는 데는 비용이 든다
// 클로저 = 생성 시점의 외부 스코프를 기억 => 메모리 비용 발생
// 만약 내부함수가 참조하는 외부 변수가 아주 큰 메모리가 필요한 값이라면?
// 내부 함수가 해제될 때까지 외부 변수는 메모리에 남아있게 된다 (가비지컬렉터에 의한 수거 대상이 아니게 됨)
// => 내부 함수를 모두 사용했다면 메모리에서 해제해주는 일이 꼭 필요
const aButton = document.getElementById('a')
