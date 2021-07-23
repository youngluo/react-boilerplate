import { Spin } from 'antd';
import React from 'react';
import './index.scss';

export default function Loading() {
  return (
    <Spin
      className="component-loading"
      tip="加载中..."
    />
  );
}