import { createContext, useContext, useState } from "react";
import {v4 as uuidv4} from 'uuid'
const TodoContext = createContext()

export const TodoProvider = ({ children }) => {
    const [filter, setFilter] = useState('all')
    const [todos, setTodos] = useState([
        {
            id: 1,
            text: 'Learn React',
            completed: false
        },
        {
            id: 2,
            text: 'learn javascript',
            completed: true
        }
    ])

    const addTodo = (text) => {
        setTodos((prev) => [
            ...prev,
            {
                id: uuidv4(),
                completed: false,
                text: text
            }

        ])
    }

    const removeTodo = (id) => {
        const cloned_todos = [...todos]
        const itemIndex = cloned_todos.findIndex((todo) => todo.id === id)        
        cloned_todos.splice(itemIndex, 1)
        setTodos(cloned_todos)
    }

    const toggleTodo = (id) => {
        const cloned_todos = [...todos]
        const itemIndex = cloned_todos.findIndex(todo => todo.id === id)
        const item = todos[itemIndex]
        item.completed = !item.completed
        setTodos(cloned_todos)
    }

    const values = {
        todos,
        setTodos,
        addTodo,
        removeTodo,
        toggleTodo,
        filter,
        setFilter
    }

    return (
        <TodoContext.Provider value={values}>
            {children}
        </TodoContext.Provider>
    )
}

export const useTodo = () => {
    const context = useContext(TodoContext)
    if (context === undefined)
        throw new Error('useTodo must be call inside TodoProvider')
    return context;
}