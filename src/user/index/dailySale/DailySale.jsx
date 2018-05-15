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
  static propTypes = {
    dailySale: PropTypes.object.isRequired,
  };
  state = {
    imgArr: [],
  };
  render() {
    const { dailySale } = this.props;
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
              top={{ url: `/itemDetail?id=${dailySale.data && dailySale.data.data[0]._id}`, img: dailySale.data && dailySale.data.data[0].url, text: dailySale.data && dailySale.data.data[0].name }}
              bottom={{ nowPrice: dailySale.data && dailySale.data.data[0].nowPrice, prePrice: dailySale.data && dailySale.data.data[0].prePrice }}
            />
          </Col>
          <Col span={4}>
            <FloorBasic
              top={{ url: `/itemDetail?id=${dailySale.data && dailySale.data.data[1]._id}`, img: dailySale.data && dailySale.data.data[1].url, text: dailySale.data && dailySale.data.data[1].name }}
              bottom={{ nowPrice: dailySale.data && dailySale.data.data[1].nowPrice, prePrice: dailySale.data && dailySale.data.data[1].prePrice }}
            />
          </Col>
          <Col span={4}>
            <FloorBasic
              top={{ url: `/itemDetail?id=${dailySale.data && dailySale.data.data[2]._id}`, img: dailySale.data && dailySale.data.data[2].url, text: dailySale.data && dailySale.data.data[2].name }}
              bottom={{ nowPrice: dailySale.data && dailySale.data.data[2].nowPrice, prePrice: dailySale.data && dailySale.data.data[2].prePrice }}
            />
          </Col>
          <Col span={4}>
            <FloorBasic
              top={{ url: `/itemDetail?id=${dailySale.data && dailySale.data.data[3]._id}`, img: dailySale.data && dailySale.data.data[3].url, text: dailySale.data && dailySale.data.data[3].name }}
              bottom={{ nowPrice: dailySale.data && dailySale.data.data[3].nowPrice, prePrice: dailySale.data && dailySale.data.data[3].prePrice }}
            />
          </Col>
          <Col span={4}>
            <FloorBasic
              top={{ url: `/itemDetail?id=${dailySale.data && dailySale.data.data[4]._id}`, img: dailySale.data && dailySale.data.data[4].url, text: dailySale.data && dailySale.data.data[4].name }}
              bottom={{ nowPrice: dailySale.data && dailySale.data.data[4].nowPrice, prePrice: dailySale.data && dailySale.data.data[4].prePrice }}
            />
          </Col>
          <Col span={4}>
            <FloorBasic
              top={{ url: `/itemDetail?id=${dailySale.data && dailySale.data.data[5]._id}`, img: dailySale.data && dailySale.data.data[5].url, text: dailySale.data && dailySale.data.data[5].name }}
              bottom={{ nowPrice: dailySale.data && dailySale.data.data[5].nowPrice, prePrice: dailySale.data && dailySale.data.data[5].prePrice }}
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default DailySale;
