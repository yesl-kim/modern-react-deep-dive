import { useCounter } from './store'

const Counter = () => {
  const [state, dispatcher] = useCounter(0)
  const increase = () => dispatcher({ type: 'add', payload: 1 })

  return (
    <div>
      <h1>{state.count}</h1>
      <button type="button" onClick={increase}>
        +
      </button>
    </div>
  )
}

export default Counter
