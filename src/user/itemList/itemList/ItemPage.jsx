/**
 * 鲜花销售商品列表页面商品列表
 * Created by tianrenjie on 2018/5/4
 */
import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Row, Col } from 'antd';
import './ItemPage.less';

class ItemPage extends React.Component {
  static propTypes = {};
  render() {
    return (
      <div className="itempage">
        <div className="itempage-box">
          <div className="itempage-box-list">....</div>
          <div className="itempage-box-pagination">....</div>
        </div>
      </div>
    );
  }
}

export default ItemPage;
