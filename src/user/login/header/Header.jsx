/**
 * 鲜花销售登录页头部
 * Created by tianrenjie on 2018/4/27
 */
import React, { PropTypes } from 'react';
import { Row, Col } from 'antd';
import { Link } from 'react-router';
import logo from '../../../../static/img/logo/logo.jpg';
import './Header.less';

class Header extends React.Component {
  static propTypes = {};
  render() {
    return (
      <div className="login-header">
        <Row>
          <Col span={10} offset={2}>
            <div className="login-header-logo">
              <img src={logo} alt="花之韵" className="login-header-logo-img" />
            </div>
          </Col>
          <Col span={10} className="clearfix">
            <span className="login-header-tip">
              您好，欢迎来到花市鲜花网<br />还不是本站会员？立即
              <Link to="" className="login-header-register">注册</Link>
            </span>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Header;
