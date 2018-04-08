/**
 * 鲜花销售主页1F玫瑰花
 * Created by tianrenjie on 2018/4/8
 */
import React, { PropTypes } from 'react';
import { Row, Col } from 'antd';
import { Link } from 'react-router';
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
      </div>
    );
  }
}

export default FirstFloor;
