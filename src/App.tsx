import { useCallback, useEffect, useState } from 'react'

import { Form } from './components/Form/Form'
import { List } from './components/List'
import { Filter } from './components/Filter/Filter'

import { TFilter, TTodo } from './types'
import { filterTodos, getUUId } from 'helpers'

import './App.css'

function App() {
  const [todos, setTodos] = useState<TTodo[]>([])
  const [filteredTodos, setFilteredTodos] = useState<TTodo[]>(todos)
  const [currentFilter, setCurrentFilter] = useState<TFilter>('all')

  const isFilterDisabled = todos.length === 0
  const getLeftTodos = todos.filter((t) => !t.comlited).length

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
    localStorage.setItem('todos', JSON.stringify(todos))
    localStorage.setItem('filter', JSON.stringify(currentFilter))
  }, [currentFilter, todos])

  const storedTodos = localStorage.getItem('todos')
  const storedFilter = localStorage.getItem('filter')

  useEffect(() => {
    setTodos(storedTodos ? JSON.parse(storedTodos) : [])
    setCurrentFilter(storedFilter ? JSON.parse(storedFilter) : 'all')
  }, [])

  return (
    <div className="App">
      <h1 className="title">todos</h1>
      <Form addTodo={addTodo} />
      <Filter
        currentFilter={currentFilter}
        getLeftTodos={getLeftTodos}
        isFilterDisabled={isFilterDisabled}
        setCurrentFilter={setCurrentFilter}
        clearCompletedTodos={clearCompletedTodos}
      />
      <List todos={filteredTodos} toggleTodo={toogleTodo} />
    </div>
  )
}

export default App
