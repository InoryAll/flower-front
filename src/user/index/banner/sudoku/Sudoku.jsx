/**
 * 鲜花销售主页“九宫格”定制化搜索
 * Created by tianrenjie on 2018/3/28
 */
import React, { PropTypes } from 'react';
import { Row, Col } from 'antd';
import Announcement from './announcement/Announcement';
import './Sudoku.less';

class Sudoku extends React.Component {
  static propTypes = {};
  render() {
    return (
      <div className="sudoku">
        <Row>
          <Col>
            <Announcement />
          </Col>
        </Row>
        <Row>
          <Col></Col>
        </Row>
        <Row>
          <Col></Col>
        </Row>
      </div>
    );
  }
}

export default Sudoku;
