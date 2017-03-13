import { connect } from 'react-redux';
import { toggleTodo } from '../../redux/action';
import { TodoList } from '../../components/todoList';

const getVisibleTodos = (todos, filterType) => {
    switch (filterType) {
        case 'ALL':
            return todos;
        case 'DONE':
            return todos.filter(todo => todo.completed);
        case 'TODO':
            return todos.filter(todo => !todo.completed);
        default:
            throw new Error('Unknown type ' + filterType);
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

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);