/**
 * 鲜花销售主页2F新品上市
 * Created by tianrenjie on 2018/4/11
 */
import React, { PropTypes } from 'react';
import { Row, Col } from 'antd';
import { Link } from 'react-router';
import FloorSpecific from '../firstFloor/floorSpecific/FloorSpecific';
import FloorBasic from '../firstFloor/floorBasic/FloorBasic';
import own from '../../../../static/img/secondFloor/1.jpg';
import specific1 from '../../../../static/img/secondFloor/floorSpecific/1.jpg';
import basic1 from '../../../../static/img/secondFloor/floorBasic/1.jpg';
import basic2 from '../../../../static/img/secondFloor/floorBasic/2.jpg';
import basic3 from '../../../../static/img/secondFloor/floorBasic/3.jpg';
import basic4 from '../../../../static/img/secondFloor/floorBasic/4.jpg';
import basic5 from '../../../../static/img/secondFloor/floorBasic/5.jpg';
import basic6 from '../../../../static/img/secondFloor/floorBasic/6.jpg';

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
              <li className="secondfloor-title-ul-li"><Link onClick={() => { this.onSearch('material', 'whiteLily'); }} className={this.state.menuItem === 'whiteLily' ? 'secondfloor-title-ul-li-a active' : 'secondfloor-title-ul-li-a'} to="#">白百何</Link></li>
              <li className="secondfloor-title-ul-li"><Link onClick={() => { this.onSearch('material', 'pinkLily'); }} className={this.state.menuItem === 'pinkLily' ? 'secondfloor-title-ul-li-a active' : 'secondfloor-title-ul-li-a'} to="#">粉百合</Link></li>
              <li className="secondfloor-title-ul-li"><Link onClick={() => { this.onSearch('material', 'carnations'); }} className={this.state.menuItem === 'carnations' ? 'secondfloor-title-ul-li-a active' : 'secondfloor-title-ul-li-a'} to="#">康乃馨</Link></li>
              <li className="secondfloor-title-ul-li"><Link onClick={() => { this.onSearch('material', 'sunflower'); }} className={this.state.menuItem === 'sunflower' ? 'secondfloor-title-ul-li-a active' : 'secondfloor-title-ul-li-a'} to="#">向日葵</Link></li>
              <li className="secondfloor-title-ul-li"><Link onClick={() => { this.onSearch('material', 'tulip'); }} className={this.state.menuItem === 'tulip' ? 'secondfloor-title-ul-li-a active' : 'secondfloor-title-ul-li-a'} to="#">郁金香</Link></li>
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
                  text: '白百何',
                  attribute: 'material',
                  value: 'whiteLily',
                }, {
                  text: '粉百合',
                  attribute: 'material',
                  value: 'pinkLily',
                }, {
                  text: '康乃馨',
                  attribute: 'material',
                  value: 'carnations',
                }, {
                  text: '向日葵',
                  attribute: 'material',
                  value: 'sunflower',
                }, {
                  text: '郁金香',
                  attribute: 'material',
                  value: 'tulip',
                }] }}
            />
          </Col>
          <Col span={5}>
            <FloorBasic
              top={{ url: '#', img: basic1, text: '相依相携' }}
              bottom={{ nowPrice: '￥229.00', prePrice: '￥359.00' }}
            />
            <FloorBasic
              top={{ url: '#', img: basic2, text: '天使之心' }}
              bottom={{ nowPrice: '￥249.00', prePrice: '￥379.00' }}
            />
          </Col>
          <Col span={7}>
            <img className="secondfloor-img" src={own} alt="花之韵" />
          </Col>
          <Col span={4}>
            <FloorBasic
              top={{ url: '#', img: basic3, text: '专属天使' }}
              bottom={{ nowPrice: '￥299.00', prePrice: '￥439.00' }}
            />
            <FloorBasic
              top={{ url: '#', img: basic4, text: '真爱旅程' }}
              bottom={{ nowPrice: '￥293.00', prePrice: '￥426.00' }}
            />
          </Col>
          <Col span={4}>
            <FloorBasic
              top={{ url: '#', img: basic5, text: '亲密无间' }}
              bottom={{ nowPrice: '￥300.00', prePrice: '￥436.00' }}
            />
            <FloorBasic
              top={{ url: '#', img: basic6, text: '唯爱一生' }}
              bottom={{ nowPrice: '￥509.00', prePrice: '￥799.00' }}
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default SecondFloor;
