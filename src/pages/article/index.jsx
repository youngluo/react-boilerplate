import React, { Component } from 'react';
import { Table } from 'antd';
import { getData } from '../../redux/action';
import API from '../../config/api.config';

class Article extends Component {
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
            title: '标题',
            dataIndex: 'title'
        },
        {
            title: '创建人',
            dataIndex: 'name'
        },
        {
            title: '创建时间',
            dataIndex: 'create_time'
        },
        {
            title: '更新时间',
            dataIndex: 'update_time'
        }
    ];

    store = this.context.store;

    getComponentData() {
        const { dispatch } = this.store;
        dispatch(getData(API.getArticles));
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

export default Article;