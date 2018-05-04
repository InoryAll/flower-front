/**
 * 鲜花销售商品列表页面商品个体
 * Created by tianrenjie on 2018/5/4
 */
import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Row, Col, Icon } from 'antd';
import img from '../../../../../static/img/item/1.jpg';
import './ItemSelf.less';

class ItemSelf extends React.Component {
  static propTypes = {};
  render() {
    return (
      <div className="itemself">
        <Row>
          <Col>
            <div className="itemself-pic">
              <Link to="" className="itemself-pic-link">
                <img src={img} alt="花之韵" className="itemself-pic-link-img" />
              </Link>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="itemself-intro">
              <Row>
                <Col>
                  <div className="itemself-des">
                    <Link to="">
                      <p className="itemself-des-title">携手一生</p>
                      <p className="itemself-des-detail">11枝优质红玫瑰搭配绿叶，满天星，随机赠送2只小熊</p>
                    </Link>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="itemself-price">
                    <span className="itemself-price-now">￥179</span>
                    <span className="itemself-price-pre">￥299</span>
                    <div className="itemself-price-star">
                      <Icon type="star" />
                      <Icon type="star" />
                      <Icon type="star" />
                      <Icon type="star" />
                      <Icon type="star" />
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col span={12}>
                  <div className="itemself-count">
                    <p><Link to="">8156</Link></p>
                    <p>商品销量</p>
                  </div>
                </Col>
                <Col span={12}>
                  <div className="itemself-comment">
                    <p><Link to="">7318</Link></p>
                    <p>用户评论</p>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="itemself-cart-add">
                    <button><span><Icon type="shopping-cart" /></span>加入购物车</button>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ItemSelf;
