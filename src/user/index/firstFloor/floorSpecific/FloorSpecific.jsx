/**
 * 鲜花销售主页特殊产品模块
 * Created by tianrenjie on 2018/4/8
 */
import React, { PropTypes } from 'react';
import { Row, Col } from 'antd';
import { Link } from 'react-router';
import img from '../../../../../static/img/floorSpecific/1.jpg';
import '../FirstFloor.less';

class FloorSpecific extends React.Component {
  static propTypes = {
    top: PropTypes.object.isRequired,
    middle: PropTypes.object.isRequired,
    bottom: PropTypes.object.isRequired,
  };
  onSearch = (attribute, value) => {
    console.log(attribute, value);
  };
  render() {
    const { top, middle, bottom } = this.props;
    return (
      <div className="floorspecific">
        <Row>
          <Col>
            <img src={img} alt="花之韵" />
          </Col>
        </Row>
        <Row>
          <Col>
            <Link className="text-box" to="">新品上市</Link>
          </Col>
        </Row>
        <Row>
          <Col>
            <ul>
              <li><Link className="" onClick={this.onSearch('material', 'redRose')} to="">红玫瑰</Link></li>
              <li><Link className="" onClick={this.onSearch('material', 'whiteRose')} to="">白玫瑰</Link></li>
              <li><Link className="" onClick={this.onSearch('material', 'pinkRose')} to="">粉玫瑰</Link></li>
              <li><Link className="" onClick={this.onSearch('material', 'champagneRose')} to="">香槟玫瑰</Link></li>
              <li><Link className="" onClick={this.onSearch('material', 'blueRose')} to="">蓝色妖姬</Link></li>
            </ul>
          </Col>
        </Row>
      </div>
    );
  }
}

export default FloorSpecific;
