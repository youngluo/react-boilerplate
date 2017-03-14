import React from 'react';
import { Checkbox } from 'antd';
import './todoList.scss';

//由于都是纯组件，只负责UI呈现，没有状态，所以都放在一个文件中管理

const Todo = ({ onTodoClick, completed, text }) => {
    return (
        <li style={{ marginTop: 10 }}>
            <Checkbox
                checked={completed}
                onClick={onTodoClick}
                style={{ textDecoration: completed ? 'line-through' : 'none' }}>
                {text}
            </Checkbox>
        </li>
    )
}

export const TodoList = ({ todos, onTodoClick }) => {
    return (
        <ul>
            {
                todos.map(todo => (
                    <Todo
                        key={todo.id}
                        {...todo}
                        onTodoClick={() => onTodoClick(todo.id)} />
                ))
            }
        </ul>
    )
}

export const Footer = ({ curFilterType, visibilityFilters, onFilterChange }) => {
    return (
        <ul className='todo-list-footer'>
            {
                visibilityFilters.map(filterType => (
                    <li
                        key={filterType}
                        style={{ borderBottom: curFilterType == filterType ? 'solid 2px #108ee9' : 'none' }}
                        onClick={() => onFilterChange(filterType)}>
                        {filterType}
                    </li>
                ))
            }
        </ul>
    )
}