/**
 * 鲜花销售主页天天特卖
 * Created by tianrenjie on 2018/4/27
 */
import React, { PropTypes } from 'react';
import { Row, Col } from 'antd';
import FloorBasic from '../firstFloor/floorBasic/FloorBasic';
import img1 from '../../../../static/img/dailySale/1.jpg';
import img2 from '../../../../static/img/dailySale/2.jpg';
import img3 from '../../../../static/img/dailySale/3.jpg';
import img4 from '../../../../static/img/dailySale/4.jpg';
import img5 from '../../../../static/img/dailySale/5.jpg';
import img6 from '../../../../static/img/dailySale/6.jpg';

import './DailySale.less';

class DailySale extends React.Component {
  static propTypes = {};
  state = {
    imgArr: [],
  };
  render() {
    return (
      <div className="dailysale">
        <Row>
          <Col>
            <h3 className="dailysale-title">天天特价</h3>
          </Col>
        </Row>
        <Row className="dailysale-list">
          <Col span={4}>
            <FloorBasic
              top={{ url: '#', img: img1, text: '最美的时光' }}
              bottom={{ nowPrice: '￥169.00', prePrice: '' }}
            />
          </Col>
          <Col span={4}>
            <FloorBasic
              top={{ url: '#', img: img2, text: '思念不悟' }}
              bottom={{ nowPrice: '￥160.00', prePrice: '' }}
            />
          </Col>
          <Col span={4}>
            <FloorBasic
              top={{ url: '#', img: img3, text: '盛世独宠' }}
              bottom={{ nowPrice: '￥239.00', prePrice: '' }}
            />
          </Col>
          <Col span={4}>
            <FloorBasic
              top={{ url: '#', img: img6, text: '恋恋勿忘' }}
              bottom={{ nowPrice: '￥308.00', prePrice: '' }}
            />
          </Col>
          <Col span={4}>
            <FloorBasic
              top={{ url: '#', img: img4, text: '真诚不变的爱' }}
              bottom={{ nowPrice: '￥295.00', prePrice: '' }}
            />
          </Col>
          <Col span={4}>
            <FloorBasic
              top={{ url: '#', img: img5, text: '心跳的感觉' }}
              bottom={{ nowPrice: '￥359.00', prePrice: '' }}
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default DailySale;
