import React from 'react'

import { STodo } from './style'

const Todo = props => {
    const { todo, index, completeTodo, removeTodo } = props
    return (
        <STodo isCompleted={todo.isCompleted}>
            {todo.text}
            <div>
                <button onClick={() => completeTodo(index)}>Complete</button>
                <button onClick={() => removeTodo(index)}>x</button>
            </div>
        </STodo>
    )
}

export default Todo