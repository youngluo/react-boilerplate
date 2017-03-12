import { connect } from 'react-redux';
import { toggleTodo } from '../redux/action';
import todoList from '../components/todoList';

const getVisibleTodos = (todos, showType) => {
    switch (showType) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_COMPLETED':
            return todos.filter(todo => todo.completed);
        case 'SHOW_ACTIVE':
            return todos.filter(todo => !todo.completed);
    }
}

const mapStateToProps = (state) => {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
            dispatch(toggleTodo(id));
        }
    }
}

const visibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(todoList);

export default visibleTodoList;