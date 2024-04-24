import { filterTodos } from '../src/helpers'

test('filter function', () => {
  const testTodos = [
    { id: '1', value: 'test', comlited: false },
    { id: '2', value: 'test2', comlited: true },
  ]

  expect(filterTodos(testTodos, 'active')).toEqual([
    { id: '1', value: 'test', comlited: false },
  ])

  expect(filterTodos(testTodos, 'completed')).toEqual([
    { id: '2', value: 'test2', comlited: true },
  ])

  expect(filterTodos(testTodos, 'all')).toEqual([
    { id: '1', value: 'test', comlited: false },
    { id: '2', value: 'test2', comlited: true },
  ])
})
