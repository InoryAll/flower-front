/**
 * 鲜花销售主页Banner设计
 * Created by tianrenjie on 2018/3/27
 */
import React, { PropTypes } from 'react';
import { Row, Col } from 'antd';
import Carousel from './carousel/Carousel';
import './Banner.less';

class Banner extends React.Component {
  render() {
    return (
      <div className="banner">
        <Row>
          <Col span={20} offset={2}>
            <Row>
              <Col span={14} offset={5}>
                <Carousel />
              </Col>
              <Col span={5}>
              ...
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Banner;
