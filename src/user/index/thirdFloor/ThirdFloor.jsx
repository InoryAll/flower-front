/**
 * 鲜花销售主页3F礼盒鲜花
 * Created by tianrenjie on 2018/4/12
 */
import React, { PropTypes } from 'react';
import { Row, Col } from 'antd';
import { Link } from 'react-router';
import FloorSpecific from '../firstFloor/floorSpecific/FloorSpecific';
import FloorBasic from '../firstFloor/floorBasic/FloorBasic';
import own from '../../../../static/img/thirdFloor/1.jpg';
import specific1 from '../../../../static/img/thirdFloor/floorSpecific/1.jpg';
import basic1 from '../../../../static/img/thirdFloor/floorBasic/1.jpg';
import basic2 from '../../../../static/img/thirdFloor/floorBasic/2.jpg';
import basic3 from '../../../../static/img/thirdFloor/floorBasic/3.jpg';
import basic4 from '../../../../static/img/thirdFloor/floorBasic/4.jpg';
import basic5 from '../../../../static/img/thirdFloor/floorBasic/5.jpg';
import basic6 from '../../../../static/img/thirdFloor/floorBasic/6.jpg';

import './ThirdFloor.less';

class ThirdFloor extends React.Component {
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
      <div className="thirdfloor">
        <Row>
          <Col className="clearfix thirdfloor-title">
            <h3 className="thirdfloor-h">3F 礼盒鲜花</h3>
            <ul className="thirdfloor-title-ul">
              <li className="thirdfloor-title-ul-li"><Link onClick={() => { this.onSearch('holiday', 'default'); }} className={this.state.menuItem === 'default' ? 'thirdfloor-title-ul-li-a active' : 'thirdfloor-title-ul-li-a'} to="#">精选热卖</Link></li>
              <li className="thirdfloor-title-ul-li"><Link onClick={() => { this.onSearch('holiday', 'chineseValentine'); }} className={this.state.menuItem === 'chineseValentine' ? 'thirdfloor-title-ul-li-a active' : 'thirdfloor-title-ul-li-a'} to="#">七夕</Link></li>
              <li className="thirdfloor-title-ul-li"><Link onClick={() => { this.onSearch('holiday', 'valentine'); }} className={this.state.menuItem === 'valentine' ? 'thirdfloor-title-ul-li-a active' : 'thirdfloor-title-ul-li-a'} to="#">情人节</Link></li>
              <li className="thirdfloor-title-ul-li"><Link onClick={() => { this.onSearch('holiday', 'bachelor'); }} className={this.state.menuItem === 'bachelor' ? 'thirdfloor-title-ul-li-a active' : 'thirdfloor-title-ul-li-a'} to="#">光棍节</Link></li>
              <li className="thirdfloor-title-ul-li"><Link onClick={() => { this.onSearch('holiday', 'christmas'); }} className={this.state.menuItem === 'christmas' ? 'thirdfloor-title-ul-li-a active' : 'thirdfloor-title-ul-li-a'} to="#">圣诞节</Link></li>
              <li className="thirdfloor-title-ul-li"><Link onClick={() => { this.onSearch('holiday', 'teacher'); }} className={this.state.menuItem === 'teacher' ? 'thirdfloor-title-ul-li-a active' : 'thirdfloor-title-ul-li-a'} to="#">教师节</Link></li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col span={4}>
            <FloorSpecific
              top={{ img: specific1 }}
              middle={{ bg: '#cda5e6', url: '#', text: '礼盒鲜花' }}
              bottom={{ bg: '#f4e3ff',
                data: [{
                  text: '七夕',
                  attribute: 'holiday',
                  value: 'chineseValentine',
                }, {
                  text: '情人节',
                  attribute: 'holiday',
                  value: 'valentine',
                }, {
                  text: '光棍节',
                  attribute: 'holiday',
                  value: 'bachelor',
                }, {
                  text: '圣诞节',
                  attribute: 'holiday',
                  value: 'christmas',
                }, {
                  text: '教师节',
                  attribute: 'holiday',
                  value: 'teacher',
                }] }}
            />
          </Col>
          <Col span={5}>
            <FloorBasic
              top={{ url: '#', img: basic1, text: '清水茉莉' }}
              bottom={{ nowPrice: '￥189.00', prePrice: '￥289.00' }}
            />
            <FloorBasic
              top={{ url: '#', img: basic2, text: '爱入佳境' }}
              bottom={{ nowPrice: '￥308.00', prePrice: '￥446.00' }}
            />
          </Col>
          <Col span={7}>
            <img className="thirdfloor-img" src={own} alt="花之韵" />
          </Col>
          <Col span={4}>
            <FloorBasic
              top={{ url: '#', img: basic3, text: '这样爱你' }}
              bottom={{ nowPrice: '￥249.00', prePrice: '￥369.00' }}
            />
            <FloorBasic
              top={{ url: '#', img: basic4, text: '浪漫爱' }}
              bottom={{ nowPrice: '￥300.00', prePrice: '￥399.00' }}
            />
          </Col>
          <Col span={4}>
            <FloorBasic
              top={{ url: '#', img: basic5, text: '签约幸福' }}
              bottom={{ nowPrice: '￥318.00', prePrice: '￥459.00' }}
            />
            <FloorBasic
              top={{ url: '#', img: basic6, text: '曼妙时光' }}
              bottom={{ nowPrice: '￥698.00', prePrice: '￥999.00' }}
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default ThirdFloor;
