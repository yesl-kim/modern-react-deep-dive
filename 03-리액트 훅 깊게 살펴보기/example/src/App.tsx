import Counter from './2-custom-hook/Counter'
import withAuth from './2-hoc/withAuth'
// import Todo from './2-custom-hook-and-hoc/Todo'

const CounterWithAuth = withAuth(Counter)

function App() {
  return (
    <>
      <Counter id="parent-id" />
      <CounterWithAuth id="parent-id" loginRequired={true} />
    </>
  )
}

export default App
