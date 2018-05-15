/**
 * 鲜花销售登录页
 * Created by tianrenjie on 2018/4/27
 */
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import './Login.less';
import Header from './header/Header';
import LoginBox from './loginBox/LoginBox';
import Footer from './footer/Footer';
import {
  userSelector,
} from './selector/selector';
import {
  onViewInit,
  validateLoginState,
  onLogin,
} from './action/action';

class Login extends React.Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    onViewInit: PropTypes.func.isRequired,
    validateLoginState: PropTypes.func.isRequired,
    onLogin: PropTypes.func.isRequired,
  };
  componentWillMount() {
    this.props.onViewInit();
    this.props.validateLoginState();
  }
  render() {
    return (
      <div className="login">
        <Header />
        <LoginBox {...this.props} />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: userSelector(state),
  };
};

const mapDispatchToProps = {
  onViewInit,
  validateLoginState,
  onLogin,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
