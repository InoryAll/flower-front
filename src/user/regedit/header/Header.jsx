/**
 * 鲜花销售注册页头部
 * Created by tianrenjie on 2018/5/3
 */
import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Row, Col } from 'antd';
import logo from '../../../../static/img/logo/logo.jpg';
import './Header.less';

class Header extends React.Component {
  static propTypes = {};
  render() {
    return (
      <div className="regedit-header">
        <Row>
          <Col span={10} offset={2}>
            <div className="regedit-header-logo">
              <img src={logo} alt="花之韵" className="regedit-header-logo-img" />
            </div>
          </Col>
          <Col span={10} className="clearfix">
            <span className="regedit-header-tip">
            我已经注册，现在就
            <Link to="" className="regedit-header-login">登录</Link>
            </span>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Header;
