import { TFilter, TFilterButton, TTodo } from '../types'

export const getUUId = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    let r = (Math.random() * 16) | 0,
      v = c === 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}

export const filterTodos = (todos: TTodo[], filter: TFilter) => {
  switch (filter) {
    case 'active':
      return todos.filter((todo) => !todo.comlited)
    case 'completed':
      return todos.filter((todo) => todo.comlited)
    case 'all':
    default:
      return todos
  }
}

export const filterButtons: TFilterButton[] = [
  { value: 'All', filter: 'all' },
  { value: 'Active', filter: 'active' },
  { value: 'Completed', filter: 'completed' },
]
