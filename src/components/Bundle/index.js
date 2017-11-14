import PropTypes from 'prop-types';
import { Component } from 'react';

class Bundle extends Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
    load: PropTypes.func.isRequired
  };

  state = {
    mod: null
  };

  componentWillMount() {
    this.load(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.load !== this.props.load) {
      this.load(nextProps);
    }
  }

  load(props) {
    this.setState({
      mod: null
    });

    props.load((mod) => {
      this.setState({
        mod: mod.default ? mod.default : mod
      });
    });
  }

  render() {
    return this.state.mod ? this.props.children(this.state.mod) : null;
  }
}

export default Bundle;
