/**
 * 鲜花销售主页购物车商品组件
 * Created by tianrenjie on 2018/3/23
 */
import React, { PropTypes } from 'react';
import { Row, Col } from 'antd';
import { Link } from 'react-router';
import './Goods.less';

class Goods extends React.Component {
  static propTypes = {
    goods: PropTypes.object.isRequired,
    deleteGood: PropTypes.func.isRequired,
  };
  handleCartDelete = (good) => {
    this.props.deleteGood(good);
  };
  render() {
    const { goods } = this.props;
    return (
      <div className="goods">
        <Row className="goods-row">
          <Col span={4}>
            <img className="goods-row-img" src={goods.url} alt="花之韵" />
          </Col>
          <Col span={16}>
            <span className="goods-row-name"><Link to={`/itemDetail?id=${goods._id}`} className="goods-row-name-a">{goods.itemName}</Link></span>
          </Col>
          <Col span={4}>
            <Row>
              <Col className="clearfix">
                <p className="goods-row-des"><span className="goods-row-des-price">{goods.itemPrice}</span>x<span className="goods-row-des-count">{goods.count}</span></p>
              </Col>
            </Row>
            <Row>
              <Col className="clearfix">
                <Link onClick={() => { this.handleCartDelete(goods); }} className="goods-row-delete">删除</Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Goods;
