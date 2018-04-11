/**
 * 鲜花销售主页基础产品模块
 * Created by tianrenjie on 2018/4/8
 */
import React, { PropTypes } from 'react';
import { Row, Col } from 'antd';
import { Link } from 'react-router';
import './FloorBasic.less';

class FloorBasic extends React.Component {
  static propTypes = {
    top: PropTypes.object.isRequired,
    bottom: PropTypes.object.isRequired,
  };
  render() {
    const { top, bottom } = this.props;
    return (
      <div className="floorbasic">
        <Row>
          <Col>
            <Link className="floorbasic-a" to={top.url}>
              <img className="floorbasic-img" src={top.img} alt="花之韵" />
              <p className="floorbasic-title">{top.text}</p>
            </Link>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="floorbasic-price">
              <strong className="floorbasic-price-now">{bottom.nowPrice}</strong>
              <span className="floorbasic-price-pre">{bottom.prePrice}</span>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default FloorBasic;
