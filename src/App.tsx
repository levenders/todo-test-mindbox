import { useState } from 'react'

import { Form } from 'components/Form/Form'
import { List } from 'components/List/List'

import './App.css'
import { TTodo } from 'types/todo.types'

const todosInitial = [
  { id: 0, value: '123', comlited: false },
  { id: 1, value: '456', comlited: false },
  { id: 2, value: '789', comlited: true },
]

function App() {
  const [todos, setTodos] = useState<TTodo[]>(todosInitial)

  const toogleTodo = (id: number): void => {
    const filteredTodos = todos.map((t) =>
      t.id === id ? { ...t, comlited: !t.comlited } : t
    )
    setTodos(filteredTodos)
    console.log(filteredTodos)
  }

  const viewAllTodos = (): void => {}
  const sortActiveTodos = (): void => {
    const filteredTodos = todos.filter((t) => !t.comlited)
    setTodos(filteredTodos)
  }
  const sortCompletedTodos = (): void => {
    const filteredTodos = todos.filter((t) => t.comlited)
    setTodos(filteredTodos)
  }
  const clearCompletedTodos = (): void => {
    const filteredTodos = todos.filter((t) => !t.comlited)
    setTodos(filteredTodos)
  }

  return (
    <div className="App">
      <h1 className="title">todos</h1>
      <Form />
      <List
        todos={todos}
        toggleTodo={toogleTodo}
        viewAllTodos={viewAllTodos}
        sortActiveTodos={sortActiveTodos}
        sortCompletedTodos={sortCompletedTodos}
        clearCompletedTodos={clearCompletedTodos}
      />
    </div>
  )
}

export default App
