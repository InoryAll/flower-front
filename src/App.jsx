/**
 * 顶层组件
 * Created by tianrenjie on 2017/11/9
 */
import React, { PropTypes } from 'react';

class App extends React.Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
  };
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
