import React, { Component } from 'react';
import { Table } from 'antd';
import { getData } from '../../redux/action';
import API from '../../config/api.config';

class User extends Component {
    //必须指定contextTypes才能从context拿到store
    static contextTypes = {
        store: React.PropTypes.object
    }

    columns = [
        {
            title: 'ID',
            dataIndex: 'id'
        },
        {
            title: '姓名',
            dataIndex: 'name'
        },
        {
            title: '年龄',
            dataIndex: 'age'
        },
        {
            title: '创建时间',
            dataIndex: 'create_time'
        }
    ];

    store = this.context.store;

    getComponentData() {
        const { dispatch } = this.store;
        dispatch(getData(API.getUsers));
    }

    componentDidMount() {
        this.getComponentData();
        this.unsubscribe = this.store.subscribe(() => this.forceUpdate());
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        return (
            <Table columns={this.columns} rowKey='id' dataSource={this.store.getState().response}></Table>
        )
    }
}

export default User;