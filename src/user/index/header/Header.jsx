/**
 * 鲜花销售主页的头部
 * Created by tianrenjie on 2018/3/19
 */
import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Row, Col } from 'antd';
import _ from 'lodash';
import { If } from 'jsx-control-statements';
import promote from '../../../../static/img/header/promote.jpg';
import './Header.less';

class Header extends React.Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
  };
  render() {
    const { user } = this.props;
    return (
      <header className="header">
        <Row className="promote-row">
          <Col>
            <Link to="" className="promote-row-a">
              <img src={promote} alt="花之韵" className="promote-row-a-img" />
            </Link>
          </Col>
        </Row>
        <Row className="menu-row">
          <Col span={6} offset={4}>
            <span className="menu-row-tip">亲爱的用户：欢迎光临“花之韵”鲜花销售系统</span>
          </Col>
          <Col span={6} offset={4}>
            <ul className="menu-row-ul clearfix">
              <If condition={_.isEmpty(user._id)}>
                <li className="menu-row-ul-li"><Link to="/login" className="menu-row-ul-li-a menu-row-ul-li-a-active">登录</Link></li>
              </If>
              <If condition={!_.isEmpty(user._id)}>
                <li className="menu-row-ul-li">欢迎您，{user.username}用户！<Link to="/login" className="menu-row-ul-li-a menu-row-ul-li-a-active">注销</Link></li>
              </If>
              <li className="menu-row-ul-li"><Link to="/user" className="menu-row-ul-li-a">我的订单</Link></li>
            </ul>
          </Col>
        </Row>
      </header>
    );
  }
}

export default Header;
