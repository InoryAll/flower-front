/**
 * 鲜花销售商品列表页面商品列表
 * Created by tianrenjie on 2018/5/4
 */
import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Row, Col, Pagination } from 'antd';
import { If } from 'jsx-control-statements';
import _ from 'lodash';
import './ItemPage.less';
import ItemSelf from './itemSelf/ItemSelf';

class ItemPage extends React.Component {
  static propTypes = {
    itemList: PropTypes.object.isRequired,
    pagenationItemList: PropTypes.func.isRequired,
  };
  state = {
    currentPage: 1,
    pageSize: 20,
    totalPage: this.props.itemList.totalPage,
  };
  componentWillReceiveProps(nextProps) {
    if (!_.isUndefined(nextProps.itemList.data) && _.isUndefined(this.props.itemList.data)) {
      this.props.pagenationItemList({ ...this.state });
    }
  }
  onSizeChange = (page, pageSize) => {
    console.log(page, pageSize);
    this.state = {
      currentPage: page,
      pageSize,
    };
    this.setState({
      currentPage: page,
      pageSize,
    });
    this.props.pagenationItemList({ ...this.state });
  };
  render() {
    const { itemList } = this.props;
    const items = [];
    if (!_.isEmpty(itemList.data)) {
      itemList.data.slice((itemList.currentPage - 1) * itemList.pageSize,
      itemList.currentPage * itemList.pageSize).map((item, index) => {
        items.push(<ItemSelf
          item={{
            img: item.url,
            title: item.name,
            description: item.description || '暂无描述*************************************',
            nowPrice: item.nowPrice,
            prePrice: item.prePrice,
            sales: item.count || '暂无',
            comments: item.comment || '暂无',
          }}
        />);
        return true;
      });
    }
    return (
      <div className="itempage">
        <div className="itempage-box">
          <div className="itempage-box-list clearfix">
            {items}
            <If condition={items.length === 0}>
              <h1 className="itempage-box-list-h1">暂无此类商品</h1>
            </If>
          </div>
          <div className="itempage-box-pagination">
            <Pagination
              onChange={this.onSizeChange}
              defaultCurrent={1}
              current={itemList.currentPage || 1}
              total={(itemList.data && itemList.data.length) || 1}
              pageSize={itemList.pageSize || 20}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ItemPage;
