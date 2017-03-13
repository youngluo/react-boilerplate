import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../redux/action';

class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
    }

    submit() {
        let value = this.input.value.trim();
        if (!value) return;
        this.props.dispatch(addTodo(value));
        this.input.value = '';
    }

    render() {
        return (
            <div>
                <input ref={node => this.input = node} />
                <button type='button' onClick={this.submit}>add</button>
            </div>
        )
    }
}

export default connect()(AddTodo);