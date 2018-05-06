/**
 * 鲜花销售购物完成页结果
 * Created by tianrenjie on 2018/5/6
 */
import React, { PropTypes } from 'react';
import { Row, Col, Icon } from 'antd';
import ItemSelf from '../../itemList/itemList/itemSelf/ItemSelf';
import './ShoppingResult.less';

class ShoppingResult extends React.Component {
  static propTypes = {};
  render() {
    return (
      <div className="shoppingresult">
        <div className="shoppingresult-content">
          <Row>
            <Col>
              <p className="shoppingresult-content-p">
                <span className="shoppingresult-content-p-span">
                  <Icon type="check-circle" />
                </span>
                您已完成付款！
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="shoppingresult-content-next">
                <button className="shoppingresult-content-next-btn">返回首页</button>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3 className="shoppingresult-more">—&emsp;更多推荐&emsp;—</h3>
              <div className="shoppingresult-list clearfix">
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
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default ShoppingResult;
