/**
 * 鲜花销售商品列表页面商品列表
 * Created by tianrenjie on 2018/5/4
 */
import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Row, Col, Pagination } from 'antd';
import './ItemPage.less';
import ItemSelf from './itemSelf/ItemSelf';

class ItemPage extends React.Component {
  static propTypes = {};
  onShowSizeChange = (current, pageSize) => {
    console.log(current, pageSize);
  };
  render() {
    return (
      <div className="itempage">
        <div className="itempage-box">
          <div className="itempage-box-list">
            <ItemSelf />
          </div>
          <div className="itempage-box-pagination">
            <Pagination showSizeChanger onShowSizeChange={this.onShowSizeChange} defaultCurrent={3} total={500} />
          </div>
        </div>
      </div>
    );
  }
}

export default ItemPage;
