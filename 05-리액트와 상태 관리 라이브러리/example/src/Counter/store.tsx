import { useReducer } from 'react'

type StoreState = {
  count: number
}

type ActionType = 'add'
type Action = {
  type: ActionType
  payload: number
}

function reducer(prev: StoreState, action: Action) {
  const { type } = action
  if (type === 'add') {
    return {
      count: prev.count + action.payload,
    }
  }

  throw new Error('Unexpected Action: ', type)
}

export const useCounter = (initialCount = 0) =>
  useReducer(reducer, { count: initialCount })
