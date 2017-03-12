import React from 'react';

const todo = ({ onClick, completed, text }) => {
    return (
        <li onClick={onClick}
            style={{ textDecoration: completed ? 'line-through' : 'none' }}>
            {text}
        </li>
    )
}

const todoList = ({ todos, onTodoClick }) => {
    return (
        <ul>
            {todos.map(todo => {
                <todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
            })}
        </ul>
    )
}

export default todoList;