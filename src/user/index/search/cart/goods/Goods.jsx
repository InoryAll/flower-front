/**
 * 鲜花销售主页购物车商品组件
 * Created by tianrenjie on 2018/3/23
 */
import React, { PropTypes } from 'react';
import { Row, Col } from 'antd';
import { Link } from 'react-router';
import './Goods.less';

class Goods extends React.Component {
  static propTypes = {};
  render() {
    return (
      <div className="goods">
        <Row className="goods-row">
          <Col span={4}>
            <img className="goods-row-img" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1521802962199&di=c2d5ad8dcedcda2ec0ee8ca79361110b&imgtype=0&src=http%3A%2F%2Ffile.youboy.com%2Fa%2F88%2F65%2F19%2F1%2F547021s.jpg" alt="花之韵" />
          </Col>
          <Col span={16}>
            <span className="goods-row-name"><Link to="" className="goods-row-name-a">鲜花名称</Link></span>
          </Col>
          <Col span={4}>
            <Row>
              <Col className="clearfix">
                <p className="goods-row-des"><span className="goods-row-des-price">¥220.00</span>x<span className="goods-row-des-count">1</span></p>
              </Col>
            </Row>
            <Row>
              <Col className="clearfix">
                <Link to="" className="goods-row-delete">删除</Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Goods;
