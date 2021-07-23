import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { Modal, Form } from 'antd';

const formLayout = {
  labelCol: {
    xs: 24,
    lg: 5
  },
  wrapperCol: {
    xs: 24,
    lg: 16
  }
};

export default function DynamicModal(modalConfig) {
  const div = document.createElement('div');

  document.body.appendChild(div);

  modalConfig = Object.assign(
    {
      cancelText: '取消',
      okText: '保存'
    },
    modalConfig
  );

  return (Component) => {
    Component = Form.create()(Component);

    return class NewModal extends PureComponent {
      static show(options) {
        ReactDOM.render(
          <NewModal
            {...options}
            visible
          />,
          div,
          function () {
            this.setState({ cancel: false });
          }
        );
      }

      static propTypes = {
        title: PropTypes.string.isRequired,
        refresh: PropTypes.func,
        data: PropTypes.object
      }

      state = {
        loading: false,
        visible: true
      }

      static getDerivedStateFromProps(props, state) {
        return {
          visible: state.cancel ? state.visible : props.visible
        };
      }

      onCancel = () => {
        this.setState({ visible: false, cancel: true });
      }

      onOk() {
        const { current } = this.ref as any;

        if (current) {
          current.props.onSubmit();
        }
      }

      loading = () => {
        this.setState({ loading: true });

        return () => {
          this.setState({ loading: false });
        };
      }

      destory() {
        const unmountResult = ReactDOM.unmountComponentAtNode(div);

        if (unmountResult && div.parentNode) {
          div.parentNode.removeChild(div);
        }
      }

      ref = React.createRef()

      render() {
        const { refresh, data, title } = this.props;
        const { visible, loading } = this.state;

        return (
          <Modal
            {...modalConfig}
            afterClose={this.destory}
            onCancel={this.onCancel}
            onOk={() => this.onOk()}
            confirmLoading={loading}
            visible={visible}
            title={title}
          >
            <Component
              formLayout={formLayout}
              loading={this.loading}
              forwardRef={this.ref}
              refresh={refresh}
              data={data}
            />
          </Modal>
        );
      }
    };
  };
}