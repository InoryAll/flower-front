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
  static propTypes = {
    forthFloor: PropTypes.object.isRequired,
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
    const { forthFloor } = this.props;
    return (
      <div className="forthfloor">
        <Row>
          <Col className="clearfix forthfloor-title">
            <h3 className="forthfloor-h">4F 花篮绿植</h3>
            <ul className="forthfloor-title-ul">
              <li className="forthfloor-title-ul-li"><Link onClick={() => { this.onSearch('basket', 'default'); }} className={this.state.menuItem === 'default' ? 'forthfloor-title-ul-li-a active' : 'forthfloor-title-ul-li-a'} to="/itemList?condition=hotSale">精选热卖</Link></li>
              <li className="forthfloor-title-ul-li"><Link onClick={() => { this.onSearch('basket', 'opening'); }} className={this.state.menuItem === 'chineseValentine' ? 'forthfloor-title-ul-li-a active' : 'forthfloor-title-ul-li-a'} to="/itemList?condition=basket">开业花篮</Link></li>
              <li className="forthfloor-title-ul-li"><Link onClick={() => { this.onSearch('basket', 'rich'); }} className={this.state.menuItem === 'valentine' ? 'forthfloor-title-ul-li-a active' : 'forthfloor-title-ul-li-a'} to="/itemList?condition=tree">绿植发财树</Link></li>
              <li className="forthfloor-title-ul-li"><Link onClick={() => { this.onSearch('basket', 'table'); }} className={this.state.menuItem === 'bachelor' ? 'forthfloor-title-ul-li-a active' : 'forthfloor-title-ul-li-a'} to="/itemList?condition=table">精美桌花</Link></li>
              <li className="forthfloor-title-ul-li"><Link onClick={() => { this.onSearch('basket', 'death'); }} className={this.state.menuItem === 'christmas' ? 'forthfloor-title-ul-li-a active' : 'forthfloor-title-ul-li-a'} to="/itemList?condition=death">祭奠花篮</Link></li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col span={4}>
            <FloorSpecific
              top={{ img: specific1 }}
              middle={{ bg: '#a6c7ec', url: '/itemList?condition=forthFloor', text: '花篮绿植' }}
              bottom={{ bg: '#d4e9ff',
                data: [{
                  text: '开业花篮',
                  attribute: 'basket',
                  value: 'opening',
                  url: '/itemList?condition=basket',
                }, {
                  text: '绿植发财树',
                  attribute: 'tree',
                  value: 'rich',
                  url: '/itemList?condition=tree',
                }, {
                  text: '精美桌花',
                  attribute: 'table',
                  value: 'table',
                  url: '/itemList?condition=table',
                }, {
                  text: '祭奠花篮',
                  attribute: 'death',
                  value: 'death',
                  url: '/itemList?condition=death',
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
                  top={{ url: `/itemDetail?id=${forthFloor.data && forthFloor.data[0]._id}`, img: forthFloor.data && forthFloor.data[0].url, text: forthFloor.data && forthFloor.data[0].name }}
                  bottom={{ nowPrice: forthFloor.data && forthFloor.data[0].nowPrice, prePrice: forthFloor.data && forthFloor.data[0].prePrice }}
                />
              </Col>
              <Col span={8}>
                <FloorBasic
                  top={{ url: `/itemDetail?id=${forthFloor.data && forthFloor.data[1]._id}`, img: forthFloor.data && forthFloor.data[1].url, text: forthFloor.data && forthFloor.data[1].name }}
                  bottom={{ nowPrice: forthFloor.data && forthFloor.data[1].nowPrice, prePrice: forthFloor.data && forthFloor.data[1].prePrice }}
                />
              </Col>
              <Col span={8}>
                <FloorBasic
                  top={{ url: `/itemDetail?id=${forthFloor.data && forthFloor.data[2]._id}`, img: forthFloor.data && forthFloor.data[2].url, text: forthFloor.data && forthFloor.data[2].name }}
                  bottom={{ nowPrice: forthFloor.data && forthFloor.data[2].nowPrice, prePrice: forthFloor.data && forthFloor.data[2].prePrice }}
                />
              </Col>
            </Row>
          </Col>
          <Col span={4}>
            <FloorBasic
              top={{ url: `/itemDetail?id=${forthFloor.data && forthFloor.data[3]._id}`, img: forthFloor.data && forthFloor.data[3].url, text: forthFloor.data && forthFloor.data[3].name }}
              bottom={{ nowPrice: forthFloor.data && forthFloor.data[3].nowPrice, prePrice: forthFloor.data && forthFloor.data[3].prePrice }}
            />
            <FloorBasic
              top={{ url: `/itemDetail?id=${forthFloor.data && forthFloor.data[4]._id}`, img: forthFloor.data && forthFloor.data[4].url, text: forthFloor.data && forthFloor.data[4].name }}
              bottom={{ nowPrice: forthFloor.data && forthFloor.data[4].nowPrice, prePrice: forthFloor.data && forthFloor.data[4].prePrice }}
            />
          </Col>
          <Col span={4}>
            <FloorBasic
              top={{ url: `/itemDetail?id=${forthFloor.data && forthFloor.data[5]._id}`, img: forthFloor.data && forthFloor.data[5].url, text: forthFloor.data && forthFloor.data[5].name }}
              bottom={{ nowPrice: forthFloor.data && forthFloor.data[5].nowPrice, prePrice: forthFloor.data && forthFloor.data[5].prePrice }}
            />
            <FloorBasic
              top={{ url: `/itemDetail?id=${forthFloor.data && forthFloor.data[6]._id}`, img: forthFloor.data && forthFloor.data[6].url, text: forthFloor.data && forthFloor.data[6].name }}
              bottom={{ nowPrice: forthFloor.data && forthFloor.data[6].nowPrice, prePrice: forthFloor.data && forthFloor.data[6].prePrice }}
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default ForthFloor;
