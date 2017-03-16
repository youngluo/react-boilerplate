import React, { Component } from 'react';
import { Table } from 'antd';

class User extends Component {
    columns = [
        {
            title: 'ID',
        },
        {
            title: '姓名',
        },
        {
            title: '年龄',
        },
        {
            title: '创建时间',
        }
    ]
    componentDidMount() {
    }

    render() {
        return (
            <Table columns={this.columns}></Table>
        )
    }
}

export default User;