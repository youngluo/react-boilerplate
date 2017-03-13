import React, { Component, PropTypes } from 'react';
import TodoList from '../../containers/todoList';

class Dashboard extends Component {
    render() {
        return (
            <div className='dashboard'>
                <TodoList />
            </div>
        )
    }
}

export default Dashboard;