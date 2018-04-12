/**
 * 鲜花销售主页4F花篮绿植
 * Created by tianrenjie on 2018/4/12
 */
import React, { PropTypes } from 'react';
import { Row, Col } from 'antd';
import { Link } from 'react-router';
import FloorSpecific from '../firstFloor/floorSpecific/FloorSpecific';
import FloorBasic from '../firstFloor/floorBasic/FloorBasic';
import own from '../../../../static/img/forthFloor/1.jpg';
import specific1 from '../../../../static/img/forthFloor/floorSpecific/1.jpg';
import basic1 from '../../../../static/img/forthFloor/floorBasic/1.jpg';
import basic2 from '../../../../static/img/forthFloor/floorBasic/2.jpg';
import basic3 from '../../../../static/img/forthFloor/floorBasic/3.jpg';
import basic4 from '../../../../static/img/forthFloor/floorBasic/4.jpg';
import basic5 from '../../../../static/img/forthFloor/floorBasic/5.jpg';
import basic6 from '../../../../static/img/forthFloor/floorBasic/6.jpg';
import basic7 from '../../../../static/img/forthFloor/floorBasic/7.jpg';

import './ForthFloor.less';

class ForthFloor extends React.Component {
  static propTypes = {};
  state = {
    menuItem: 'default',
  };
  onSearch = (attribute, value) => {
    console.log(attribute, value);
    this.setState({
      menuItem: value,
    });
  };
  render() {
    return (
      <div className="forthfloor">
        <Row>
          <Col className="clearfix forthfloor-title">
            <h3 className="forthfloor-h">4F 花篮绿植</h3>
            <ul className="forthfloor-title-ul">
              <li className="forthfloor-title-ul-li"><Link onClick={() => { this.onSearch('basket', 'default'); }} className={this.state.menuItem === 'default' ? 'forthfloor-title-ul-li-a active' : 'forthfloor-title-ul-li-a'} to="#">精选热卖</Link></li>
              <li className="forthfloor-title-ul-li"><Link onClick={() => { this.onSearch('basket', 'opening'); }} className={this.state.menuItem === 'chineseValentine' ? 'forthfloor-title-ul-li-a active' : 'forthfloor-title-ul-li-a'} to="#">开业花篮</Link></li>
              <li className="forthfloor-title-ul-li"><Link onClick={() => { this.onSearch('basket', 'rich'); }} className={this.state.menuItem === 'valentine' ? 'forthfloor-title-ul-li-a active' : 'forthfloor-title-ul-li-a'} to="#">绿植发财树</Link></li>
              <li className="forthfloor-title-ul-li"><Link onClick={() => { this.onSearch('basket', 'table'); }} className={this.state.menuItem === 'bachelor' ? 'forthfloor-title-ul-li-a active' : 'forthfloor-title-ul-li-a'} to="#">精美桌花</Link></li>
              <li className="forthfloor-title-ul-li"><Link onClick={() => { this.onSearch('basket', 'death'); }} className={this.state.menuItem === 'christmas' ? 'forthfloor-title-ul-li-a active' : 'forthfloor-title-ul-li-a'} to="#">祭奠花篮</Link></li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col span={4}>
            <FloorSpecific
              top={{ img: specific1 }}
              middle={{ bg: '#a6c7ec', url: '#', text: '花篮绿植' }}
              bottom={{ bg: '#d4e9ff',
                data: [{
                  text: '开业花篮',
                  attribute: 'basket',
                  value: 'opening',
                }, {
                  text: '绿植发财树',
                  attribute: 'basket',
                  value: 'rich',
                }, {
                  text: '精美桌花',
                  attribute: 'basket',
                  value: 'table',
                }, {
                  text: '祭奠花篮',
                  attribute: 'basket',
                  value: 'death',
                }] }}
            />
          </Col>
          <Col span={12}>
            <Row>
              <Col span={24}>
                <img className="forthfloor-img" src={own} alt="花之韵" />
              </Col>
            </Row>
            <Row>
              <Col span={8}>
                <FloorBasic
                  top={{ url: '#', img: basic1, text: '金玉满堂 单个' }}
                  bottom={{ nowPrice: '￥209.00', prePrice: '￥468.00' }}
                />
              </Col>
              <Col span={8}>
                <FloorBasic
                  top={{ url: '#', img: basic2, text: '鸿途非凡 单个' }}
                  bottom={{ nowPrice: '￥278.00', prePrice: '￥399.00' }}
                />
              </Col>
              <Col span={8}>
                <FloorBasic
                  top={{ url: '#', img: basic3, text: '生意永盛 单个' }}
                  bottom={{ nowPrice: '￥278.00', prePrice: '￥407.00' }}
                />
              </Col>
            </Row>
          </Col>
          <Col span={4}>
            <FloorBasic
              top={{ url: '#', img: basic4, text: '开业吉祥 单个' }}
              bottom={{ nowPrice: '￥129.00', prePrice: '￥202.00' }}
            />
            <FloorBasic
              top={{ url: '#', img: basic5, text: '顾客盈门（开业 花篮）' }}
              bottom={{ nowPrice: '￥177.00', prePrice: '￥280.00' }}
            />
          </Col>
          <Col span={4}>
            <FloorBasic
              top={{ url: '#', img: basic6, text: '万事如意 单个' }}
              bottom={{ nowPrice: '￥338.00', prePrice: '￥499.00' }}
            />
            <FloorBasic
              top={{ url: '#', img: basic7, text: '大富启源 单个' }}
              bottom={{ nowPrice: '￥368.00', prePrice: '￥589.00' }}
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default ForthFloor;
