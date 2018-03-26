/**
 * 鲜花销售主页导航条
 * Created by tianrenjie on 2018/3/26
 */
import React, { PropTypes } from 'react';
import { Row, Col } from 'antd';
import { Link } from 'react-router';
import './Navigation.less';

class Navigation extends React.Component {
  static propTypes = {};
  state = {
    menuItem: 'index',
  };
  handleMenuClick = (menuItem) => {
    this.setState({
      menuItem,
    });
  };
  render() {
    return (
      <div className="nav">
        <nav>
          <Row>
            <Col span={20} offset="2">
              <Row>
                <Col span={3}>
                  <div className="category">category</div>
                </Col>
                <Col span={21}>
                  <ul className="menu-list clearfix">
                    <li className="menu-item"><Link onClick={() => { this.handleMenuClick('index'); }} className={this.state.menuItem === 'index' ? 'menu-item-a active' : 'menu-item-a' } to="">首页</Link></li>
                    <li className="menu-item"><Link onClick={() => { this.handleMenuClick('allFlower'); }} className={this.state.menuItem === 'allFlower' ? 'menu-item-a active' : 'menu-item-a' } to="">全部鲜花</Link></li>
                    <li className="menu-item"><Link onClick={() => { this.handleMenuClick('loveFlower'); }} className={this.state.menuItem === 'loveFlower' ? 'menu-item-a active' : 'menu-item-a' } to="">爱情鲜花</Link></li>
                    <li className="menu-item"><Link onClick={() => { this.handleMenuClick('holidayFlower'); }} className={this.state.menuItem === 'holidayFlower' ? 'menu-item-a active' : 'menu-item-a' } to="">生日鲜花</Link></li>
                    <li className="menu-item"><Link onClick={() => { this.handleMenuClick('businessFlower'); }} className={this.state.menuItem === 'businessFlower' ? 'menu-item-a active' : 'menu-item-a' } to="">开业花篮</Link></li>
                    <li className="menu-item"><Link onClick={() => { this.handleMenuClick('seniorFlower'); }} className={this.state.menuItem === 'seniorFlower' ? 'menu-item-a active' : 'menu-item-a' } to="">高端鲜花</Link></li>
                    <li className="menu-item"><Link onClick={() => { this.handleMenuClick('cheapFlower'); }} className={this.state.menuItem === 'cheapFlower' ? 'menu-item-a active' : 'menu-item-a' } to="">特价鲜花</Link></li>
                  </ul>
                </Col>
              </Row>
            </Col>
          </Row>
        </nav>
      </div>
    );
  }
}

export default Navigation;