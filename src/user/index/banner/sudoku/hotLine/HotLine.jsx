/**
 * 鲜花销售主页热线电话
 * Created by tianrenjie on 2018/3/28
 */
import React, { PropTypes } from 'react';
import { Row, Col } from 'antd';
import './HotLine.less';

class HotLine extends React.Component {
  static propTyps = {};
  render() {
    return (
      <div className="hotline">
        <Row>
          <Col>
            <div className="hotline-title clearfix">
              <div className="hotline-title-img" />
              <strong className="hotline-title-strong">免费订花热线：</strong>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <strong className="hotline-content">1586-1368-488</strong>
          </Col>
        </Row>
      </div>
    );
  }
}

export default HotLine;
