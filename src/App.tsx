import { useCallback, useEffect, useState } from 'react'

import { Form } from './components/Form/Form'
import { List } from './components/List'
import { TFilter, TTodo } from './types'

import './App.css'
import { filterTodos, getUUId } from 'helpers'
import { Filter } from 'components/Filter/Filter'

function App() {
  const [todos, setTodos] = useState<TTodo[]>([])
  const [filteredTodos, setFilteredTodos] = useState<TTodo[]>(todos)
  const [currentFilter, setCurrentFilter] = useState<TFilter>('all')

  const isFilterDisabled = todos.length === 0

  const addTodo = useCallback(
    (value: string): void => {
      const newTodo = { id: getUUId(), value, comlited: false }
      setTodos([...todos, newTodo])
    },
    [todos]
  )

  const toogleTodo = useCallback(
    (id: string): void => {
      const filteredArr = todos.map((t) =>
        t.id === id ? { ...t, comlited: !t.comlited } : t
      )
      setTodos(filteredArr)
    },
    [todos]
  )

  const clearCompletedTodos = useCallback((): void => {
    const filteredArr = todos.filter((t) => !t.comlited)
    setTodos(filteredArr)
  }, [todos])

  useEffect(() => {
    setFilteredTodos(filterTodos(todos, currentFilter))
  }, [currentFilter, todos])

  return (
    <div className="App">
      <h1 className="title">todos</h1>
      <Form addTodo={addTodo} />
      <Filter
        currentFilter={currentFilter}
        isFilterDisabled={isFilterDisabled}
        setCurrentFilter={setCurrentFilter}
        clearCompletedTodos={clearCompletedTodos}
      />
      {!todos.length && <span className="empty">add new todos!</span>}
      <List todos={filteredTodos} toggleTodo={toogleTodo} />
    </div>
  )
}

export default App
