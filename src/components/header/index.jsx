import React from 'react'
import NewTodoForm from './newTodoForm'
const Header = () => {
    return (
        <header className='header'>
            <h1>todos</h1>
            <NewTodoForm />
        </header>
    )
}
export default Header