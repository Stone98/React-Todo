import React from 'react'

function Todo(props) {

    const handleClick = () => {
        props.handleTodoToggle(props.todo.id)
    }

    return (
        <div onClick={handleClick} className={`todo${props.todo.completed ? ' completed' : ''}`} >
            <p>{props.todo.name}</p>
        </div>
    )
}

export default Todo
