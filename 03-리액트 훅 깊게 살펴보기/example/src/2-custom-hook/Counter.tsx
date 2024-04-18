import { type ChangeEvent, useEffect, useState, memo, useMemo } from 'react'

// 부모 컴포넌트가 리렌더링되면 하위 컴포넌트는 Props 변경 여부 상관없이 리렌더링된다
const Child = ({ value }: { value: string }) => {
  useEffect(() => {
    console.log(value, 'rendered!')
  })

  return <div>I'm {value}</div>
}

// memo로 최적화된 하위 컴포넌트는 props가 변경되지 않으면 리렌더링되지 않는다
// 근데 왜 디버깅 툴에는 업데이트되는 걸로 나오지..?
const MemoizedChild = memo(({ value }: { value: string }) => {
  useEffect(() => {
    console.log(value, 'rendered!')
  })

  return <div>I'm {value}</div>
})

MemoizedChild.displayName = 'MemoizedChild'

const Parent = ({ id }: { id: string }) => {
  const [count, setCount] = useState(0)
  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    setCount(Number(e.target.value))

  // 내부 변수, 상위 컴포넌트가 렌더링되어야만 알 수 있는 변수를 참조하는 컴포넌트의 경우
  // useMemo로 내부에서 메모할 수도 있다
  // 함수가 아니라 값을 메모했다는 것의 주의! (usecallback x, usememo o)
  // MemoizedChild와 똑같이 동작한다
  const InternalMemoizedComponent = useMemo(() => <Child value={id} />, [id])

  return (
    <>
      <input type="number" value={count} onChange={onChange} />
      <Child value="child component" />
      <MemoizedChild value="memoized child component" />
      {InternalMemoizedComponent}
    </>
  )
}

export default Parent
