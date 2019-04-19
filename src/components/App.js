import React, { useState } from 'react'

import TodoForm from './TodoForm'
import Todo from './Todo'

import { SApp, STodoList } from './style'

const App = () => {

  const [todos, setTodos] = useState([
    {
      text: `Learn about React`,
      isCompleted: false
    },
    {
      text: `Meet friend for lunch`,
      isCompleted: false
    },
    {
      text: `Build really cool todo app`,
      isCompleted: false
    },
    {
      text: `Learn React hooks`,
      isCompleted: true
    }
  ])

  const addTodo = text => {
    const newTodos = [...todos, { text }]
    setTodos(newTodos)
  }

  const completeTodo = index => {
    const newTodos = [...todos]
    newTodos[index].isCompleted = true
    setTodos(newTodos)
  }

  const removeTodo = index => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  return <SApp>
    <STodoList>
      {todos.map((todo, index) =>
        <Todo
          key={index}
          index={index}
          todo={todo}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
        />)}
      <TodoForm addTodo={addTodo} />
    </STodoList>
  </SApp>
}

export default App