import React, { Component } from 'react';
import { Table } from 'antd';
import http from '../../services/http';
import API from '../../config/api.config';

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
        http.get(API.getUsers).then((reponse) => {
            console.log(reponse)
        })
    }

    render() {
        return (
            <Table columns={this.columns}></Table>
        )
    }
}

export default User;