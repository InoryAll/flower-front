/**
 * 鲜花销售购物车页详细
 * Created by tianrenjie on 2018/5/6
 */
import React, { PropTypes } from 'react';
import { Row, Col } from 'antd';
import './ShoppingList.less';

class ShoppingList extends React.Component {
  static propTypes = {};
  render() {
    return (
      <div className="shoppinglist">
        <Row>
          <Col>
            <div className="shoppinglist-title">
              <h3 className="shoppinglist-title-h3">我的购物车</h3>
              <p className="shoppinglist-title-p">查看购物车商品清单，增加减少商品数量，并勾选想要的商品进入下一步操作。</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col></Col>
        </Row>
      </div>
    );
  }
}

export default ShoppingList;