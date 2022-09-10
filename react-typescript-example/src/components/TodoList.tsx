import React from 'react'
import { Todo } from '../model'
import SingleTodo from './SingleTodo'
import './styles.css'

type Props = {
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

function TodoList({todos, setTodos}:Props) {
  return (
    <div className='todos'>
        {
            todos.map(todo => (
                <SingleTodo todo={todo} 
                    key={todo.id} 
                    todos={todos}
                    setTodos={setTodos}
                    />
            ))
        }
    </div>
  )
}

export default TodoList