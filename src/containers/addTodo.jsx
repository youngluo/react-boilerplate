import React from 'react';
import { connect } from 'react-redux';
import addTodo from '../redux/action';

let AddTodo = ({ dispatch }) => {
    let input;
    const onSubmit = e => {
        e.preventDefault();
        if (!input.value.trim()) return;
        dispatch(addTodo(input.value));
    }
    return (
        <div>
            <from onSubmit={onSubmit}>
                <input ref={node => input = node} />
                <button type='submit'>add</button>
            </from>
        </div>
    )
}

AddTodo = connect()(AddTodo);

export default AddTodo;