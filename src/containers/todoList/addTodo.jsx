import React, { Component } from 'react';
import { Input, Button } from 'antd';
import { connect } from 'react-redux';
import { addTodo } from '../../redux/action';


class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
        this.state = { value: '' };
    }

    submit() {
        let value = this.state.value.trim();
        if (!value) return;
        this.props.dispatch(addTodo(value));
        this.setState({ value: '' });
    }

    render() {
        const buttonAfter = (<Button style={{ borderRadius: 0 }} type='primary' onClick={this.submit}>add</Button>);
        return (
            <div>
                <Input
                    size="large"
                    value={this.state.value}
                    addonAfter={buttonAfter}
                    onChange={(e) => this.setState({ value: e.target.value })} />
            </div>
        )
    }
}

export default connect()(AddTodo);