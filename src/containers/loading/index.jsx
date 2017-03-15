import React from 'react';
import { Spin } from 'antd';
import { connect } from 'react-redux';

const Loading = ({ loading }) => {
    return (
        <div className='loading-wrapper'>
            <Spin size='large' tip="数据加载中" spinning={loading} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        loading: state.loading
    }
}

export default connect(mapStateToProps)(Loading);