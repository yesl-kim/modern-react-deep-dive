import { useEffect } from 'react'
import useFetch from './useFetch.js'

type TodoData = {
  userId: number
  id: number
  title: string
  completed: boolean
}

const Todo = () => {
  const {
    isLoading,
    result = [],
    status,
    ok,
  } = useFetch<Array<TodoData>>('https://jsonplaceholder.typicode.com/todos')

  useEffect(() => {
    if (!isLoading) {
      console.log('status: ', status)
    }
  }, [isLoading, status])

  if (!ok) return null

  return (
    <div>
      {result.map(({ userId, title, id }) => (
        <div key={id}>
          <span>{userId}</span> <span>{title}</span>
        </div>
      ))}
    </div>
  )
}

export default Todo
