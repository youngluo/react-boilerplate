import React from 'react';
import AddTodo from './addTodo';
import VisibleTodoList from './visibleTodoList';
import Footer from './footer';

const TodoList = () => {
    return (
        <div className='todo-list'>
            <AddTodo />
            <Footer />
            <VisibleTodoList />
        </div>
    )
}

export default TodoList;