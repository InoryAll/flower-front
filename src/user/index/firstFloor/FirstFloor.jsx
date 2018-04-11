/**
 * 鲜花销售主页1F玫瑰花
 * Created by tianrenjie on 2018/4/8
 */
import React, { PropTypes } from 'react';
import { Row, Col } from 'antd';
import { Link } from 'react-router';
import FloorSpecific from './floorSpecific/FloorSpecific';
import FloorBasic from './floorBasic/FloorBasic';
import own from '../../../../static/img/firstFloor/1.jpg';
import specific1 from '../../../../static/img/firstFloor/floorSpecific/1.jpg';
import basic1 from '../../../../static/img/firstFloor/floorBasic/1.jpg';
import basic2 from '../../../../static/img/firstFloor/floorBasic/2.jpg';
import basic3 from '../../../../static/img/firstFloor/floorBasic/3.jpg';
import basic4 from '../../../../static/img/firstFloor/floorBasic/4.jpg';
import basic5 from '../../../../static/img/firstFloor/floorBasic/5.jpg';
import basic6 from '../../../../static/img/firstFloor/floorBasic/6.jpg';

import './FirstFloor.less';

class FirstFloor extends React.Component {
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
      <div className="firstfloor">
        <Row>
          <Col>
            <h3 className="firstfloor-h">1F 玫瑰花</h3>
            <ul className="firstfloor-title-ul">
              <li className="firstfloor-title-ul-li"><Link onClick={() => { this.onSearch('material', 'default'); }} className={this.state.menuItem === 'default' ? 'firstfloor-title-ul-li-a active' : 'firstfloor-title-ul-li-a'} to="#">精选热卖</Link></li>
              <li className="firstfloor-title-ul-li"><Link onClick={() => { this.onSearch('material', 'redRose'); }} className={this.state.menuItem === 'redRose' ? 'firstfloor-title-ul-li-a active' : 'firstfloor-title-ul-li-a'} to="#">红玫瑰</Link></li>
              <li className="firstfloor-title-ul-li"><Link onClick={() => { this.onSearch('material', 'whiteRose'); }} className={this.state.menuItem === 'whiteRose' ? 'firstfloor-title-ul-li-a active' : 'firstfloor-title-ul-li-a'} to="#">白玫瑰</Link></li>
              <li className="firstfloor-title-ul-li"><Link onClick={() => { this.onSearch('material', 'pinkRose'); }} className={this.state.menuItem === 'pinkRose' ? 'firstfloor-title-ul-li-a active' : 'firstfloor-title-ul-li-a'} to="#">粉玫瑰</Link></li>
              <li className="firstfloor-title-ul-li"><Link onClick={() => { this.onSearch('material', 'champagneRose'); }} className={this.state.menuItem === 'champagneRose' ? 'firstfloor-title-ul-li-a active' : 'firstfloor-title-ul-li-a'} to="#">香槟玫瑰</Link></li>
              <li className="firstfloor-title-ul-li"><Link onClick={() => { this.onSearch('material', 'blueRose'); }} className={this.state.menuItem === 'blueRose' ? 'firstfloor-title-ul-li-a active' : 'firstfloor-title-ul-li-a'} to="#">蓝色妖姬</Link></li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col span={4}>
            <FloorSpecific
              top={{ img: specific1 }}
              middle={{ bg: '#a6ddc9', url: '#', text: '新品上市' }}
              bottom={{ bg: '#caf4e5',
                data: [{
                  text: '红玫瑰',
                  attribute: 'material',
                  value: 'redRose',
                }, {
                  text: '白玫瑰',
                  attribute: 'material',
                  value: 'whiteRose',
                }, {
                  text: '粉玫瑰',
                  attribute: 'material',
                  value: 'pinkRose',
                }, {
                  text: '香槟玫瑰',
                  attribute: 'material',
                  value: 'champagneRose',
                }, {
                  text: '蓝色妖姬',
                  attribute: 'material',
                  value: 'blueRose',
                }] }}
            />
          </Col>
          <Col span={5}>
            <FloorBasic
              top={{ url: '#', img: basic1, text: '梦中有你' }}
              bottom={{ nowPrice: '￥179.00', prePrice: '￥129.00' }}
            />
            <FloorBasic
              top={{ url: '#', img: basic2, text: '花开月正圆' }}
              bottom={{ nowPrice: '￥229.00', prePrice: '￥386.00' }}
            />
          </Col>
          <Col span={7}>
            <img className="firstfloor-img" src={own} alt="花之韵" />
          </Col>
          <Col span={4}>
            <FloorBasic
              top={{ url: '#', img: basic3, text: '谱写幸福' }}
              bottom={{ nowPrice: '￥229.00', prePrice: '￥329.00' }}
            />
            <FloorBasic
              top={{ url: '#', img: basic4, text: '完美爱人' }}
              bottom={{ nowPrice: '￥249.00', prePrice: '￥369.00' }}
            />
          </Col>
          <Col span={4}>
            <FloorBasic
              top={{ url: '#', img: basic5, text: '我的宠妃' }}
              bottom={{ nowPrice: '￥300.00', prePrice: '￥436.00' }}
            />
            <FloorBasic
              top={{ url: '#', img: basic6, text: '微微一笑很倾城' }}
              bottom={{ nowPrice: '￥289.00', prePrice: '￥421.00' }}
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default FirstFloor;
