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
  onSizeChange = (page, pageSize) => {
    console.log(page, pageSize);
  };
  render() {
    return (
      <div className="itempage">
        <div className="itempage-box">
          <div className="itempage-box-list clearfix">
            <ItemSelf
              item={{
                img: '',
                title: '携手一生',
                description: '11枝优质红玫瑰搭配绿叶，满天星，随机赠送2只小熊',
                nowPrice: '￥179',
                prePrice: '￥299',
                sales: '6751',
                comments: '8329',
              }}
            />
            <ItemSelf
              item={{
                img: '',
                title: '携手一生',
                description: '11枝优质红玫瑰搭配绿叶，满天星，随机赠送2只小熊',
                nowPrice: '￥179',
                prePrice: '￥299',
                sales: '6751',
                comments: '8329',
              }}
            />
            <ItemSelf
              item={{
                img: '',
                title: '携手一生',
                description: '11枝优质红玫瑰搭配绿叶，满天星，随机赠送2只小熊',
                nowPrice: '￥179',
                prePrice: '￥299',
                sales: '6751',
                comments: '8329',
              }}
            />
            <ItemSelf
              item={{
                img: '',
                title: '携手一生',
                description: '11枝优质红玫瑰搭配绿叶，满天星，随机赠送2只小熊',
                nowPrice: '￥179',
                prePrice: '￥299',
                sales: '6751',
                comments: '8329',
              }}
            />
            <ItemSelf
              item={{
                img: '',
                title: '携手一生',
                description: '11枝优质红玫瑰搭配绿叶，满天星，随机赠送2只小熊',
                nowPrice: '￥179',
                prePrice: '￥299',
                sales: '6751',
                comments: '8329',
              }}
            />
            <ItemSelf
              item={{
                img: '',
                title: '携手一生',
                description: '11枝优质红玫瑰搭配绿叶，满天星，随机赠送2只小熊',
                nowPrice: '￥179',
                prePrice: '￥299',
                sales: '6751',
                comments: '8329',
              }}
            />
            <ItemSelf
              item={{
                img: '',
                title: '携手一生',
                description: '11枝优质红玫瑰搭配绿叶，满天星，随机赠送2只小熊',
                nowPrice: '￥179',
                prePrice: '￥299',
                sales: '6751',
                comments: '8329',
              }}
            />
            <ItemSelf
              item={{
                img: '',
                title: '携手一生',
                description: '11枝优质红玫瑰搭配绿叶，满天星，随机赠送2只小熊',
                nowPrice: '￥179',
                prePrice: '￥299',
                sales: '6751',
                comments: '8329',
              }}
            />
            <ItemSelf
              item={{
                img: '',
                title: '携手一生',
                description: '11枝优质红玫瑰搭配绿叶，满天星，随机赠送2只小熊',
                nowPrice: '￥179',
                prePrice: '￥299',
                sales: '6751',
                comments: '8329',
              }}
            />
          </div>
          <div className="itempage-box-pagination">
            <Pagination
              onChange={this.onSizeChange}
              defaultCurrent={1}
              total={500}
              pageSize={20}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ItemPage;
