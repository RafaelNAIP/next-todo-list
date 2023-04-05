import styles from '@/styles/Home.module.css'
import { Todos } from '../interfaces'
import { useState } from 'react'

export default function TodoComponent ({ todos, todoArray, setTodoArray, index }: {todos: Todos, todoArray: Todos[], setTodoArray: any, index: number}) {
    const [todoChecked, setTodoChecked] = useState<boolean>(false)
    
    const deleteTodo = () => {
        let temporaryTodoArray = todoArray.slice()
        temporaryTodoArray.splice(index, 1)
        setTodoArray(temporaryTodoArray)
        console.log(temporaryTodoArray)
    }

    const checkTodo = () => {
        let temporaryTodoArray = todoArray.slice()
        if(temporaryTodoArray[index].done) {
            temporaryTodoArray[index].done = false
            setTodoArray(temporaryTodoArray)
            return
        }
        temporaryTodoArray[index].done = true
        setTodoArray(temporaryTodoArray)
    }

    return (
        <div className={styles.todoListContainer} key={todos.name}>
            <div>
                <input type="checkbox" checked={todos.done} onClick={checkTodo} />
                <a style={{ textDecoration: todos.done ? 'line-through' : '' }}>{todos.name}</a>
            </div>
            <button className={styles.todoDeleteButton} onClick={() => deleteTodo()}>Deletar</button>
        </div>
    )
}