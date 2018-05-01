/**
 * 鲜花销售登录页
 * Created by tianrenjie on 2018/4/27
 */
import React, { PropTypes } from 'react';
import './Login.less';
import Header from './header/Header';
import LoginBox from './loginBox/LoginBox';
import Footer from './footer/Footer';

class Login extends React.Component {
  static propTypes = {};
  render() {
    return (
      <div className="login">
        <Header />
        <LoginBox />
        <Footer />
      </div>
    );
  }
}

export default Login;
