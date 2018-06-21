import React from 'react';
import { Spin } from 'UI';
import './index.less';

export default function Loading() {
  return (
    <Spin
      className="component-loading"
      tip="加载中..."
    />
  );
}