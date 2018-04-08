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
  render() {
    return (
      <div>
        FirstFloor
        <Row>
          <Col>
            <h3>1F 玫瑰花</h3>
            <ul>
              <li><Link to="#">精选热卖</Link></li>
              <li><Link to="#">红玫瑰</Link></li>
              <li><Link to="#">白玫瑰</Link></li>
              <li><Link to="#">粉玫瑰</Link></li>
              <li><Link to="#">香槟玫瑰</Link></li>
              <li><Link to="#">蓝色妖姬</Link></li>
            </ul>
          </Col>
        </Row>
      </div>
    );
  }
}

export default FirstFloor;
