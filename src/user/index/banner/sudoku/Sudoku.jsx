/**
 * 鲜花销售主页“九宫格”定制化搜索
 * Created by tianrenjie on 2018/3/28
 */
import React, { PropTypes } from 'react';
import { Row, Col } from 'antd';
import Announcement from './announcement/Announcement';
import HotLine from './hotLine/HotLine';
import Choice from './choice/Choice';
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
          <Col>
            <HotLine />
          </Col>
        </Row>
        <Row>
          <Col>
            <Choice />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Sudoku;
