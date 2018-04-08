/**
 * 鲜花销售主页热卖
 * Created by tianrenjie on 2018/4/8
 */
import React, { PropTypes } from 'react';
import { Row, Col } from 'antd';
import './HotSale.less';

class HotSale extends React.Component {
  render() {
    return (
      <div className="hotsale">
        <Row>
          <Col>
            <h3 className="hotsale-h">正在热卖<span className="hotsale-h-span">精选热销款式</span></h3>
          </Col>
        </Row>
        <Row>
          <Col></Col>
        </Row>
      </div>
    );
  }
}

export default HotSale;
