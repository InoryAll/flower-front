/**
 * 鲜花销售主页的头部
 * Created by tianrenjie on 2018/3/19
 */
import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Row, Col } from 'antd';
import promote from '../../../../static/img/header/promote.jpg';
import './Header.less';

class Header extends React.Component {
  static propsTypes = {};
  render() {
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
              <li className="menu-row-ul-li"><Link to="" className="menu-row-ul-li-a menu-row-ul-li-a-active">登录</Link></li>
              <li className="menu-row-ul-li"><Link to="" className="menu-row-ul-li-a">投诉建议</Link></li>
              <li className="menu-row-ul-li"><Link to="" className="menu-row-ul-li-a">我的订单</Link></li>
              <li className="menu-row-ul-li"><Link to="" className="menu-row-ul-li-a">商品收藏</Link></li>
            </ul>
          </Col>
        </Row>
      </header>
    );
  }
}

export default Header;
