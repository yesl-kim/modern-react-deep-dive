## JSX

### TLDR; 중요한 건

- JSX는 리액트의 문법이 아니다. 고로 리액트에서만 사용할 수 있는 것이 아니다.
- 자바스크립트 표준 문법이 아니기 떄문에 별도 트랜스파일링이 필요하다
- 트리 형태의 자료 구조를 자바스크립트에서 쉽게 작성하기 위한 문법이다.
- 리액트에서 JSX는 React.createElement를 호출하는 코드와 같다. (내부 변환된 코드를 보면)

---

### 들어아기에 앞서, JSX란

- JSX의 목적: 1) 트리 구조의 자료를 2) 자바스크립트에서 쉽게 작성할 수 있도록 하기 위함
  - 자바스크립트에서 html 구조를 작성할 때에 jsx 구문이 적합한 이유
  - 자바스크립트로 돔을 제어할 때 용이
  - HTML, XML 뿐 아니라 트리 구조를 다루는 다른 구문에서도 사용 가능하다
- 자바스크립트 표준 문법은 아니기 때문에 별도 트랜스파일링이 필요하다 (바벨 플러그인)
- JSXElement, JSXAttributes, JSXChildren, JSXStrings로 구성되어있다.

### JSXElement

- html 요소와 같이 태그로 사용되는 것
- 종류로는 시작 태그(OpeningElement), 종료 태그(ClosingElement), 셀프클로징(SelfClosingElement), Fragment가 있다
- 이름 규칙이 있다
  - JSXIdentifier: 자바스크립트에서 사용할 수 있는 식별자 모두 가능 ($, \_ 가능, 숫자로 시작 불가능)
  - JSXNamespacedName: `:`로 구분되는 식별자의 조합 (조합은 둘 까지만 가능)
  ```jsx
  <foo:bar /> // 가능
  <foo:bar:baz /> // 불가능
  ```
  - JSXMemberExpression: `.`으로 구분되는 식별자의 조합 (복수 조합 가능, JSXNamespacedName과의 조합은 불가능)
  ```jsx
  <foo.bar.baz /> // ok
  <foo:bar.baz /> // no
  ```

### JSXAttributes (optional)

가능한 속성 작성 규칙

- JSXSpreadAttributes:
  - 객체 뿐 아라 조건문 표현식, 화살표 함수, 할당식 모두 가능
  - eg. `<foo {...{required: true}} />`
- 키-값 형태: `<foo required={true} />`
  - 키로는 JSXIdentifier, JSXNamespacedName 가능
  - 값으로는 문자열, 자바스크립트 표현식, JSXElement 가능

> JSXAttributes를 작성할 때 문자열이 아닌 값에 `{}`를 감싸는 형태는 JSX 규칙이 아니다. prettier 규칙이다

### JSXChildren

- 0개 이상의 JSXChild이 올 수 있다.
- 문자열, JSXText, JSXElement 가능

### JSXStrings

- HTML에서 사용가능한 모든 문자열
  - 자바스크립트 기준이 아니라 html 기준!
  - 예시로 `\`(이스케이프 문자)는 js에서는 `\\`형태로 써줘야하지만 jsx에서는 Html규칙에 따라 `\`형태로 바로 사용 가능

### JSX는 어떻게 변환되는가

- 결국 JSX는 React.createElement를 호출하는 것과 같다
- `React.createElement(JSXElement, JSXAttributes, JSXChildren)`
- 조건에 따라 JSX 구문 중 일부만 다르게 렌더될 때, JSX 구문을 모두 변경하기보다 createElement함수를 직접 호출하여 코드의 중복을 줄일 수 있다.

  ```jsx
  // 이것보다
  const ComponentA = ({ condition, children }) => {
    return condition ? (
      <foo bar={1}>{children}</foo>
    ) : (
      <baz bar={1}>{children}</baz>
    )
  }

  // 이렇게?
  const ComponentB = ({ condition, children }) =>
    React.createElement(condition ? 'foo' : 'baz', { bar: 1 }, children)
  ```
