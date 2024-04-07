// 내가 모르는거
// 1. 그냥 멤버변수랑 constructor 내부에서 지정되는 this의 속성으로서의 변수의 차이
// 2. static이 뭐였더라
// 3. class에서 type 지정하는 방법
// 4. setter, getter
// 5. private 선언방법(#)
/**
 * private 선언방법 (#)
 * - 2019에 추가
 *
 * private, protected, public
 *
 * getter, setter
 *
 * ts로 주석달기
 */

class Car {
  // contructor는 별다른 동작을 하지 않는다면 생략 가능하다
  name: string
  #energy: number
  carAge: number

  constructor(name: string) {
    // 초기화(인스턴스 생성 시) 속성값을 지정해줄 수 있다.
    this.name = name
    this.#energy = 0
  }

  honk() {
    console.log(`${this.name} 정적을 울립니다!`)
  }

  refuel(value: number) {
    this.#energy += value
  }

  static hello() {
    console.log('저는 자동차입니다~')
  }

  set age(value) {
    this.carAge = value
  }

  get age() {
    return this.carAge
  }

  get energy() {
    return this.#energy
  }

  get [Symbol.toStringTag]() {
    return 'Car'
  }
}

// 상속
class Truck extends Car {
  constructor(name) {
    super(name)
  }

  load() {
    console.log('짐을 싣습니다')
  }

  get [Symbol.toStringTag]() {
    return 'Truck'
  }
}

const myCar = new Car('자동차')
myCar.honk()
// static method는 클래스에서 직접 호출
Car.hello()
// myCar.hello() // myCar.hello is not a function
// setter를 통해 직접 할당할 수 있다
console.log('연료', myCar.energy)
myCar.refuel(100)
console.log('연료', myCar.energy)
// myCar.__proto__ 속성을 통해 prototype을 얻는 것도 가능
// 하지만 이는 비표준 방법 -> 가급적 사용하지 말자
// 프로토타입 (클래스)에 지정한 메소드를 인스턴스의 메소드로 호출할 수 있는 이유는 프로토타입 체이닝 때문
// 프로토타입 체이닝: 호출된 메소드를 찾기 위해 메소드가 호출된 대상 인스턴스로부터 가까운 부모 클래스를 찾아올라가는 것
console.log(Object.getPrototypeOf(myCar) === Car.prototype)
// myCar를 콘솔로 찍으면 contructor에서 지정한 속성값만 갖는 객체로 찍힘
// = 메소드가 myCar(인스턴스) 자체에는 존재하지 않음
// Car 클래스의 메소드를 myCar에서 호출할 수 있는 이유가 프로토타입 체이닝 때문
console.log(myCar)

// 단 프로토타입 체이닝으로 인해 인스턴스에서 메소드로 바로 접근할 수 있는 걸 막고 싶을 수 있다. -> static 정적 메소드 사용
// 정적 메소드는 인스턴스가 아닌 클래스의 메소드로 직접 호출해야한다
// 때문에 정적 메소드 내부의 this는 인스턴스를 가리키지 않는다.
// 리액트에서 클래스 컴포넌트의 getDefivedStateFropProps(props, state)가 대표적인 예 (내부에서 this.state에 접근할 수 없다)
// 반면 정적 메소드는 인스턴스를 생성하지 않아도 사용할 수 있다는 점, 여러 곳에서 재사용이 가능하다는 점에 이점이 있다 (싱글톤 패턴에 적합)
// -> 전역에서 사용하는 유틸함수로 활용

const myTruck = new Truck('트럭')
console.log(myCar.toString())
console.log(myTruck.toString())
