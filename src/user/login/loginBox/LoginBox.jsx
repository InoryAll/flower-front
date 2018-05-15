/**
 * 鲜花销售登录页主要部分
 * Created by tianrenjie on 2018/4/27
 */
import React, { PropTypes } from 'react';
import { Row, Col, message } from 'antd';
import { Link } from 'react-router';
import $ from 'jquery';
import _ from 'lodash';
import bg from '.././../../../static/img/loginbox/bg.jpg';
import './LoginBox.less';

class LoginBox extends React.Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    onLogin: PropTypes.func.isRequired,
  };
  state = {
    user: undefined,
  };
  componentWillMount() {
    this.setState({
      user: this.props.user,
    });
  }
  handleLogin = () => {
    const errors = [];
    var userObj = {
      username: $('#username').val(),
      password: $('#password').val(),
    };
    if (_.isEmpty(userObj.username)) {
      errors.push('用户名不能为空!');
    } else if (_.isEmpty(userObj.password)) {
      errors.push('密码不能为空!');
    }
    if(errors.length > 0) {
      message.error(errors.join(','));
    } else {
      this.props.onLogin(userObj);
    }
  };
  render() {
    const { user } = this.state;
    return (
      <div className="loginbox">
        <Row>
          <Col span={10} offset={2}>
            <div className="loginbox-box">
              <img className="loginbox-box-img" src={bg} alt="" />
            </div>
          </Col>
          <Col span={10}>
            <div className="loginbox-dialog">
              <form>
                <h3 className="loginbox-dialog-title">用户登录</h3>
                <div className="form-content">
                  <div className="username form-content-item">
                    <label htmlFor="username" className="form-content-item-label">账&emsp;号：</label>
                    <input className="form-content-item-input" type="text" placeholder="使用已注册的用户名登录" name="username" id="username" value={user.username} />
                  </div>
                  <div className="password form-content-item">
                    <label htmlFor="password" className="form-content-item-label">密&emsp;码：</label>
                    <input className="form-content-item-input" type="password" placeholder="6-20个大小写英文字母、符号或数字" name="password" id="password" value={user.password} />
                  </div>
                  <div className="form-content-check-box">
                    <label htmlFor="remember" className="form-content-check-box-label">
                      <input type="checkbox" className="form-content-checkbox" name="remember" id="remember" />
                      记住密码
                    </label>
                  </div>
                  <div className="loginbox-btn">
                    <button className="loginbox-btn-login" type="button" onClick={this.handleLogin}>登&emsp;录</button>
                  </div>
                  <div className="loginbox-btn">
                    <Link className="loginbox-btn-regedit" to="/regedit">注&emsp;册</Link>
                  </div>
                </div>
              </form>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default LoginBox;
