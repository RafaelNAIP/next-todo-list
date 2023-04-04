import styles from '@/styles/Home.module.css'
import { Todos } from '../interfaces'
import { useState } from 'react'

export default function TodoComponent ({ todos }: {todos: Todos}) {
    const [todoChecked, setTodoChecked] = useState<boolean>(false)

    return (
        <div className={styles.todoListContainer} key={todos.name}>
            <div>
                <input type="checkbox" checked={todoChecked} onClick={() => setTodoChecked(prevState => !prevState)} />
                <a style={{ textDecoration: todoChecked ? 'line-through' : '' }}>{todos.name}</a>
            </div>
            <button className={styles.todoDeleteButton}>Deletar</button>
        </div>
    )
}