/**
 * 鲜花销售主页基础产品模块
 * Created by tianrenjie on 2018/4/8
 */
import React, { PropTypes } from 'react';
import { Row, Col } from 'antd';
import { Link } from 'react-router';
import img from '../../../../../static/img/floorBasic/1.jpg';
import './FloorBasic.less';

class FloorBasic extends React.Component {
  static propTypes = {};
  render() {
    return (
      <div className="floorbasic">
        <Row>
          <Col>
            <Link className="floorbasic-a" to="">
              <img className="floorbasic-img" src={img} alt="花之韵" />
              <p className="floorbasic-title">梦中有你</p>
            </Link>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="floorbasic-price">
              <strong className="floorbasic-price-now">￥179.00</strong>
              <span className="floorbasic-price-pre">￥209.00</span>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default FloorBasic;
