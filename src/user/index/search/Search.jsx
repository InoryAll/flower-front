/**
 * 鲜花销售主页logo+search区域
 * Created by tianrenjie on 2018/3/21
 */
import React, { PropTypes } from 'react';
import { Row, Col } from 'antd';

class Search extends React.Component {
  render() {
    return (
      <div className="logo">
        <Row className="logo-row">
          <Col>
            <div className="logo-row-logo">
              <img src="" alt="" />
            </div>
          </Col>
          <Col>
            <div className="logo-row-search">...</div>
          </Col>
          <Col>
            <div className="logo-row-cart">...</div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Search;
