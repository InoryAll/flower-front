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
  static propTypes = {
    thirdFloor: PropTypes.object.isRequired,
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
    const { thirdFloor } = this.props;
    return (
      <div className="thirdfloor">
        <Row>
          <Col className="clearfix thirdfloor-title">
            <h3 className="thirdfloor-h">3F 礼盒鲜花</h3>
            <ul className="thirdfloor-title-ul">
              <li className="thirdfloor-title-ul-li"><Link onClick={() => { this.onSearch('holiday', 'default'); }} className={this.state.menuItem === 'default' ? 'thirdfloor-title-ul-li-a active' : 'thirdfloor-title-ul-li-a'} to="/itemList?condition=hotSale">精选热卖</Link></li>
              <li className="thirdfloor-title-ul-li"><Link onClick={() => { this.onSearch('holiday', 'chineseValentine'); }} className={this.state.menuItem === 'chineseValentine' ? 'thirdfloor-title-ul-li-a active' : 'thirdfloor-title-ul-li-a'} to="/itemList?condition=chineseValentine">七夕</Link></li>
              <li className="thirdfloor-title-ul-li"><Link onClick={() => { this.onSearch('holiday', 'valentine'); }} className={this.state.menuItem === 'valentine' ? 'thirdfloor-title-ul-li-a active' : 'thirdfloor-title-ul-li-a'} to="/itemList?condition=valentine">情人节</Link></li>
              <li className="thirdfloor-title-ul-li"><Link onClick={() => { this.onSearch('holiday', 'bachelor'); }} className={this.state.menuItem === 'bachelor' ? 'thirdfloor-title-ul-li-a active' : 'thirdfloor-title-ul-li-a'} to="/itemList?condition=bachelor">光棍节</Link></li>
              <li className="thirdfloor-title-ul-li"><Link onClick={() => { this.onSearch('holiday', 'christmas'); }} className={this.state.menuItem === 'christmas' ? 'thirdfloor-title-ul-li-a active' : 'thirdfloor-title-ul-li-a'} to="/itemList?condition=christmas">圣诞节</Link></li>
              <li className="thirdfloor-title-ul-li"><Link onClick={() => { this.onSearch('holiday', 'teacher'); }} className={this.state.menuItem === 'teacher' ? 'thirdfloor-title-ul-li-a active' : 'thirdfloor-title-ul-li-a'} to="/itemList?condition=teacher">教师节</Link></li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col span={4}>
            <FloorSpecific
              top={{ img: specific1 }}
              middle={{ bg: '#cda5e6', url: '/itemList?condition=thirdFloor', text: '礼盒鲜花' }}
              bottom={{ bg: '#f4e3ff',
                data: [{
                  text: '七夕',
                  attribute: 'holiday',
                  value: 'chineseValentine',
                  url: '/itemList?condition=chineseValentine',
                }, {
                  text: '情人节',
                  attribute: 'holiday',
                  value: 'valentine',
                  url: '/itemList?condition=valentine',
                }, {
                  text: '光棍节',
                  attribute: 'holiday',
                  value: 'bachelor',
                  url: '/itemList?condition=bachelor',
                }, {
                  text: '圣诞节',
                  attribute: 'holiday',
                  value: 'christmas',
                  url: '/itemList?condition=christmas',
                }, {
                  text: '教师节',
                  attribute: 'holiday',
                  value: 'teacher',
                  url: '/itemList?condition=teacher',
                }] }}
            />
          </Col>
          <Col span={5}>
            <FloorBasic
              top={{ url: `/itemDetail?id=${thirdFloor.data && thirdFloor.data[0]._id}`, img: thirdFloor.data && thirdFloor.data[0].url, text: thirdFloor.data && thirdFloor.data[0].name }}
              bottom={{ nowPrice: thirdFloor.data && thirdFloor.data[0].nowPrice, prePrice: thirdFloor.data && thirdFloor.data[0].prePrice }}
            />
            <FloorBasic
              top={{ url: `/itemDetail?id=${thirdFloor.data && thirdFloor.data[1]._id}`, img: thirdFloor.data && thirdFloor.data[1].url, text: thirdFloor.data && thirdFloor.data[1].name }}
              bottom={{ nowPrice: thirdFloor.data && thirdFloor.data[1].nowPrice, prePrice: thirdFloor.data && thirdFloor.data[1].prePrice }}
            />
          </Col>
          <Col span={7}>
            <img className="thirdfloor-img" src={own} alt="花之韵" />
          </Col>
          <Col span={4}>
            <FloorBasic
              top={{ url: `/itemDetail?id=${thirdFloor.data && thirdFloor.data[2]._id}`, img: thirdFloor.data && thirdFloor.data[2].url, text: thirdFloor.data && thirdFloor.data[2].name }}
              bottom={{ nowPrice: thirdFloor.data && thirdFloor.data[2].nowPrice, prePrice: thirdFloor.data && thirdFloor.data[2].prePrice }}
            />
            <FloorBasic
              top={{ url: `/itemDetail?id=${thirdFloor.data && thirdFloor.data[3]._id}`, img: thirdFloor.data && thirdFloor.data[3].url, text: thirdFloor.data && thirdFloor.data[3].name }}
              bottom={{ nowPrice: thirdFloor.data && thirdFloor.data[3].nowPrice, prePrice: thirdFloor.data && thirdFloor.data[3].prePrice }}
            />
          </Col>
          <Col span={4}>
            <FloorBasic
              top={{ url: `/itemDetail?id=${thirdFloor.data && thirdFloor.data[4]._id}`, img: thirdFloor.data && thirdFloor.data[4].url, text: thirdFloor.data && thirdFloor.data[4].name }}
              bottom={{ nowPrice: thirdFloor.data && thirdFloor.data[4].nowPrice, prePrice: thirdFloor.data && thirdFloor.data[4].prePrice }}
            />
            <FloorBasic
              top={{ url: `/itemDetail?id=${thirdFloor.data && thirdFloor.data[5]._id}`, img: thirdFloor.data && thirdFloor.data[5].url, text: thirdFloor.data && thirdFloor.data[5].name }}
              bottom={{ nowPrice: thirdFloor.data && thirdFloor.data[5].nowPrice, prePrice: thirdFloor.data && thirdFloor.data[5].prePrice }}
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default ThirdFloor;
