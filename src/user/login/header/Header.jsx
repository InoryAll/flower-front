/**
 * 鲜花销售登录页头部
 * Created by tianrenjie on 2018/4/27
 */
import React, { PropTypes } from 'react';
import { Row, Col } from 'antd';

class Header extends React.Component {
  static propTypes = {};
  render() {
    return (
      <div className="header">
        <Row>
          <Col span={10} offset={2}>
            Logo
          </Col>
          <Col span={10}>
            Content
          </Col>
        </Row>
      </div>
    );
  }
}

export default Header;
