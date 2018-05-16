/**
 * 鲜花销售购物完成页结果
 * Created by tianrenjie on 2018/5/6
 */
import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Row, Col, Icon } from 'antd';
import _ from 'lodash';
import ItemSelf from '../../itemList/itemList/itemSelf/ItemSelf';
import './ShoppingResult.less';

class ShoppingResult extends React.Component {
  static propTypes = {
    recommend: PropTypes.object.isRequired,
    addGood: PropTypes.func.isRequired,
  };
  render() {
    const { recommend } = this.props;
    const items = [];
    if (!_.isEmpty(recommend.data)) {
      recommend.data.map((item, index) => {
        items.push(<ItemSelf
          item={{
            data: { ...item },
            link: `/itemDetail?id=${item._id}`,
            img: item.url,
            title: item.name,
            description: item.description || '暂无描述*************************************',
            nowPrice: item.nowPrice,
            prePrice: item.prePrice,
            sales: item.count || '暂无',
            comments: item.comment || '暂无',
          }}
          { ...this.props }
        />);
        return true;
      });
    }
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
                <Link to="/" className="shoppingresult-content-next-btn">返回首页</Link>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3 className="shoppingresult-more">—&emsp;更多推荐&emsp;—</h3>
              <div className="shoppingresult-list clearfix">
                {items}
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default ShoppingResult;
