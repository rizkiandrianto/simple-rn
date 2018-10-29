import React, { Component } from 'react';

const Wrapper = ({
  Screen = null,
  props = {}
}) => {
  class Layout extends Component {
    static navigationOptions = {
      header: null,
      ...props
    }

    render() {
      const { props } = this
      return (
        <Screen title="Hello World" {...props} />
      );
    }
  }

  return Layout;
}


export default Wrapper;
