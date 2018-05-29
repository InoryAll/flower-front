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
  static propTypes = {
    firstFloor: PropTypes.object.isRequired,
  };
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
    const { firstFloor } = this.props;
    return (
      <div className="firstfloor">
        <Row>
          <Col>
            <h3 className="firstfloor-h">1F 玫瑰花</h3>
            <ul className="firstfloor-title-ul">
              <li className="firstfloor-title-ul-li"><Link onClick={() => { this.onSearch('material', 'default'); }} className={this.state.menuItem === 'default' ? 'firstfloor-title-ul-li-a active' : 'firstfloor-title-ul-li-a'} to="/itemList?condition=hotSale">精选热卖</Link></li>
              <li className="firstfloor-title-ul-li"><Link onClick={() => { this.onSearch('material', 'redRose'); }} className={this.state.menuItem === 'redRose' ? 'firstfloor-title-ul-li-a active' : 'firstfloor-title-ul-li-a'} to="/itemList?condition=rose">红玫瑰</Link></li>
              <li className="firstfloor-title-ul-li"><Link onClick={() => { this.onSearch('material', 'whiteRose'); }} className={this.state.menuItem === 'whiteRose' ? 'firstfloor-title-ul-li-a active' : 'firstfloor-title-ul-li-a'} to="/itemList?condition=rose">白玫瑰</Link></li>
              <li className="firstfloor-title-ul-li"><Link onClick={() => { this.onSearch('material', 'pinkRose'); }} className={this.state.menuItem === 'pinkRose' ? 'firstfloor-title-ul-li-a active' : 'firstfloor-title-ul-li-a'} to="/itemList?condition=rose">粉玫瑰</Link></li>
              <li className="firstfloor-title-ul-li"><Link onClick={() => { this.onSearch('material', 'champagneRose'); }} className={this.state.menuItem === 'champagneRose' ? 'firstfloor-title-ul-li-a active' : 'firstfloor-title-ul-li-a'} to="/itemList?condition=rose">香槟玫瑰</Link></li>
              <li className="firstfloor-title-ul-li"><Link onClick={() => { this.onSearch('material', 'blueRose'); }} className={this.state.menuItem === 'blueRose' ? 'firstfloor-title-ul-li-a active' : 'firstfloor-title-ul-li-a'} to="/itemList?condition=rose">蓝色妖姬</Link></li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col span={4}>
            <FloorSpecific
              top={{ img: specific1 }}
              middle={{ bg: '#f588af', url: '/itemList?condition=firstFloor', text: '玫瑰花' }}
              bottom={{ bg: '#ffeef4',
                data: [{
                  text: '红玫瑰',
                  attribute: 'material',
                  value: 'redRose',
                  url: '/itemList?condition=rose',
                }, {
                  text: '白玫瑰',
                  attribute: 'material',
                  value: 'whiteRose',
                  url: '/itemList?condition=rose',
                }, {
                  text: '粉玫瑰',
                  attribute: 'material',
                  value: 'pinkRose',
                  url: '/itemList?condition=rose',
                }, {
                  text: '香槟玫瑰',
                  attribute: 'material',
                  value: 'champagneRose',
                  url: '/itemList?condition=rose',
                }, {
                  text: '蓝色妖姬',
                  attribute: 'material',
                  value: 'blueRose',
                  url: '/itemList?condition=rose',
                }] }}
            />
          </Col>
          <Col span={5}>
            <FloorBasic
              top={{ url: `/itemDetail?id=${firstFloor.data && firstFloor.data[0]._id}`, img: firstFloor.data && firstFloor.data[0].url, text: firstFloor.data && firstFloor.data[0].name }}
              bottom={{ nowPrice: firstFloor.data && firstFloor.data[0].nowPrice, prePrice: firstFloor.data && firstFloor.data[0].prePrice }}
            />
            <FloorBasic
              top={{ url: `/itemDetail?id=${firstFloor.data && firstFloor.data[1]._id}`, img: firstFloor.data && firstFloor.data[1].url, text: firstFloor.data && firstFloor.data[1].name }}
              bottom={{ nowPrice: firstFloor.data && firstFloor.data[1].nowPrice, prePrice: firstFloor.data && firstFloor.data[1].prePrice }}
            />
          </Col>
          <Col span={7}>
            <img className="firstfloor-img" src={own} alt="花之韵" />
          </Col>
          <Col span={4}>
            <FloorBasic
              top={{ url: `/itemDetail?id=${firstFloor.data && firstFloor.data[2]._id}`, img: firstFloor.data && firstFloor.data[2].url, text: firstFloor.data && firstFloor.data[2].name }}
              bottom={{ nowPrice: firstFloor.data && firstFloor.data[2].nowPrice, prePrice: firstFloor.data && firstFloor.data[2].prePrice }}
            />
            <FloorBasic
              top={{ url: `/itemDetail?id=${firstFloor.data && firstFloor.data[3]._id}`, img: firstFloor.data && firstFloor.data[3].url, text: firstFloor.data && firstFloor.data[3].name }}
              bottom={{ nowPrice: firstFloor.data && firstFloor.data[3].nowPrice, prePrice: firstFloor.data && firstFloor.data[3].prePrice }}
            />
          </Col>
          <Col span={4}>
            <FloorBasic
              top={{ url: `/itemDetail?id=${firstFloor.data && firstFloor.data[4]._id}`, img: firstFloor.data && firstFloor.data[4].url, text: firstFloor.data && firstFloor.data[4].name }}
              bottom={{ nowPrice: firstFloor.data && firstFloor.data[4].nowPrice, prePrice: firstFloor.data && firstFloor.data[4].prePrice }}
            />
            <FloorBasic
              top={{ url: `/itemDetail?id=${firstFloor.data && firstFloor.data[5]._id}`, img: firstFloor.data && firstFloor.data[5].url, text: firstFloor.data && firstFloor.data[5].name }}
              bottom={{ nowPrice: firstFloor.data && firstFloor.data[5].nowPrice, prePrice: firstFloor.data && firstFloor.data[5].prePrice }}
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default FirstFloor;
