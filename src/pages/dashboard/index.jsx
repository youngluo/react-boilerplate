import React, { Component, PropTypes } from 'react';
import AddTodo from '../../containers/addTodo';
import VisibleTodoList from '../../containers/visibleTodoList';

class Dashboard extends Component {
    render() {
        return (
            <div>
                <AddTodo />
                <VisibleTodoList />
            </div>
        )
    }
}

export default Dashboard;