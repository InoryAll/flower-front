/**
 * 鲜花销售主页2F新品上市
 * Created by tianrenjie on 2018/4/11
 */
import React, { PropTypes } from 'react';
import { Row, Col } from 'antd';
import { Link } from 'react-router';
import FloorSpecific from '../firstFloor/floorSpecific/FloorSpecific';
import FloorBasic from '../firstFloor/floorBasic/FloorBasic';
import own from '../../../../static/img/firstFloor/1.jpg';
import specific1 from '../../../../static/img/firstFloor/floorSpecific/1.jpg';
import basic1 from '../../../../static/img/firstFloor/floorBasic/1.jpg';
import basic2 from '../../../../static/img/firstFloor/floorBasic/2.jpg';
import basic3 from '../../../../static/img/firstFloor/floorBasic/3.jpg';
import basic4 from '../../../../static/img/firstFloor/floorBasic/4.jpg';
import basic5 from '../../../../static/img/firstFloor/floorBasic/5.jpg';
import basic6 from '../../../../static/img/firstFloor/floorBasic/6.jpg';

import './SecondFloor.less';

class SecondFloor extends React.Component {
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
      <div className="secondfloor">
        <Row>
          <Col className="clearfix secondfloor-title">
            <h3 className="secondfloor-h">2F 新品上市</h3>
            <ul className="secondfloor-title-ul">
              <li className="secondfloor-title-ul-li"><Link onClick={() => { this.onSearch('material', 'default'); }} className={this.state.menuItem === 'default' ? 'secondfloor-title-ul-li-a active' : 'secondfloor-title-ul-li-a'} to="#">精选热卖</Link></li>
              <li className="secondfloor-title-ul-li"><Link onClick={() => { this.onSearch('material', 'redRose'); }} className={this.state.menuItem === 'redRose' ? 'secondfloor-title-ul-li-a active' : 'secondfloor-title-ul-li-a'} to="#">白百何</Link></li>
              <li className="secondfloor-title-ul-li"><Link onClick={() => { this.onSearch('material', 'whiteRose'); }} className={this.state.menuItem === 'whiteRose' ? 'secondfloor-title-ul-li-a active' : 'secondfloor-title-ul-li-a'} to="#">粉百合</Link></li>
              <li className="secondfloor-title-ul-li"><Link onClick={() => { this.onSearch('material', 'pinkRose'); }} className={this.state.menuItem === 'pinkRose' ? 'secondfloor-title-ul-li-a active' : 'secondfloor-title-ul-li-a'} to="#">康乃馨</Link></li>
              <li className="secondfloor-title-ul-li"><Link onClick={() => { this.onSearch('material', 'champagneRose'); }} className={this.state.menuItem === 'champagneRose' ? 'secondfloor-title-ul-li-a active' : 'secondfloor-title-ul-li-a'} to="#">向日葵</Link></li>
              <li className="secondfloor-title-ul-li"><Link onClick={() => { this.onSearch('material', 'blueRose'); }} className={this.state.menuItem === 'blueRose' ? 'secondfloor-title-ul-li-a active' : 'secondfloor-title-ul-li-a'} to="#">郁金香</Link></li>
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
            <img className="secondfloor-img" src={own} alt="花之韵" />
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

export default SecondFloor;
