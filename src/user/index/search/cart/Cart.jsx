/**
 * 鲜花销售主页购物车
 * Created by tianrenjie on 2018/3/23
 */
import React, { PropTypes } from 'react';
import { Row, Col, Icon } from 'antd';
import { If } from 'jsx-control-statements';
import { Link } from 'react-router';
import Goods from './goods/Goods';
import './Cart.less';

class Cart extends React.Component {
  static propsTypes = {};
  render() {
    return (
      <div className="cart clearfix">
        <Row className="cart-row-button">
          <Col>
            <div className="cart-row-button-box">
              <Icon type="shopping-cart" className="cart-row-button-box-cart" />
              <span className="cart-row-button-box-text">购物车结算</span>
              <Icon type="down" className="cart-row-button-box-arrow" />
            </div>
          </Col>
        </Row>
        <Row className="cart-row-content">
          <Col>
            <div className="cart-row-content-box">
              <Row className="cart-row-content-box-row-title">
                <Col>
                  <h4 className="cart-row-content-box-row-title-h4">最新加入的商品</h4>
                </Col>
              </Row>
              <Row className="cart-row-content-box-row-list">
                <Col>
                  <div className="cart-row-content-box-row-list-box">
                    <If condition={ 0 || false }>
                      <div className="no-items">
                        <span>您的购物车中暂无商品，赶快选择心爱的商品吧！</span>
                      </div>
                    </If>
                    <If condition={ 1 || true }>
                      <Goods />
                      <Goods />
                      <Goods />
                    </If>
                  </div>
                </Col>
              </Row>
              <Row className="cart-row-content-box-row-bottom">
                <Col>
                  <div className="cart-row-content-box-row-bottom-box">
                    <Row>
                      <Col className="clearfix">
                        <If condition={ 1 || true }>
                          <p className="check-items">共<span className="check-items-count">2</span>种商品  总计金额：<strong className="check-items-price">¥439.00</strong></p>
                        </If>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="clearfix">
                        <Link to="" className="checkout-cart">结算购物车中的商品</Link>
                      </Col>
                    </Row>
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

export default Cart;
