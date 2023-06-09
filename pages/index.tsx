import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useEffect, useState } from 'react'
import TodoComponent from './components/TodoComponent'

const inter = Inter({ subsets: ['latin'] })

interface Todos {
  name: string,
  done: boolean
}

const todos: Todos[] = [
  {
    name: 'todo1',
    done: false
  },
  {
    name: 'todo2',
    done: false
  },
  {
    name: 'todo3',
    done: false
  },
  {
    name: 'todo4',
    done: false
  },
  {
    name: 'todo5',
    done: false
  },
  {
    name: 'todo6',
    done: false
  },
  {
    name: 'todo7',
    done: false
  },
  {
    name: 'todo8',
    done: false
  },
  {
    name: 'todo9',
    done: false
  },
  {
    name: 'todo10',
    done: false
  },
  {
    name: 'todo11',
    done: false
  }
]

export default function Home() {
  const [todoArray, setTodoArray] = useState<Todos[]>([])
  const [todoName, setTodoName] = useState<string>('')
  const [selectedFilter, setSelectedFilter] = useState<string>('all')

  const checkIfTodoAlreadyExists = (todoName: string) => {
    if (todoArray.some((todo) => todo.name === todoName)) {
      return true
    }
    return false
  }

  const addTodoInArray = (todoName: string) => {
    console.log(checkIfTodoAlreadyExists(todoName), 'aqui')
    if (checkIfTodoAlreadyExists(todoName)) {
      return alert('Essa pedência já foi criada!')
    };
    let temporaryArray = todoArray.slice()
    temporaryArray.push({
      name: todoName,
      done: false
    })
    console.log(temporaryArray)
    setTodoArray(temporaryArray) 
  }

  useEffect(() => {
    setTodoArray(todoArray)
  }, [selectedFilter, todoArray])

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.mainContainer}>
        <div className={styles.todoListBox}>
          <div className={styles.todoListInputContainer}>
            <a>Todo List</a>
            <div>
              <input placeholder='Digite uma pendência' onChange={(e) => setTodoName(e.target.value)}/>
              <button onClick={() => addTodoInArray(todoName)}>Adicionar</button>
            </div>
          </div>
          <div className={styles.todoListFunctionsButtons}>
            <button style={{ background: selectedFilter === 'all' ? 'grey' : '#3b5998', color: selectedFilter === 'all' ? '#000000' : '#FFFFFF' }} onClick={() => setSelectedFilter('all')}>Todos</button>
            <button style={{ background: selectedFilter === 'completed' ? 'grey' : '#3b5998', color: selectedFilter === 'completed' ? '#000000' : '#FFFFFF' }} onClick={() => setSelectedFilter('completed')}>Completas</button>
            <button style={{ background: selectedFilter === 'todo' ? 'grey' : '#3b5998', color: selectedFilter === 'todo' ? '#000000' : '#FFFFFF' }} onClick={() => setSelectedFilter('todo')}>Para fazer</button>
          </div>
          <div className={styles.todoListTotalContainer}>
            {
            todoArray.filter(todo => selectedFilter === 'all' ? {} : selectedFilter === 'completed' ? todo.done === true : todo.done === false).map((todos, index) => {
              return (
                <TodoComponent key={todos.name} todos={todos} todoArray={todoArray} setTodoArray={setTodoArray} index={index} />
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}
