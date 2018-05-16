/**
 * 鲜花销售主页购物车
 * Created by tianrenjie on 2018/3/23
 */
import React, { PropTypes } from 'react';
import _ from 'lodash';
import { Row, Col, Icon } from 'antd';
import { If } from 'jsx-control-statements';
import { Link } from 'react-router';
import Goods from './goods/Goods';
import '../../../../animation/animation.less';
import './Cart.less';

class Cart extends React.Component {
  static propTypes = {
    cart: PropTypes.object.isRequired,
  };
  state = {
    visible: false,
  };
  handleMouseEnter = () => {
    this.setState({
      visible: true,
    });
  };
  handleMouseLeave = () => {
    this.setState({
      visible: false,
    });
  };
  render() {
    const { cart } = this.props;
    const goods = [];
    let totalPrice = 0;
    if (!_.isEmpty(cart.data)) {
      cart.data.map((item, index) => {
        goods.push(<Goods goods={{ ...item }} {...this.props} />);
        totalPrice += parseFloat(item.itemTotalPrice.split('￥')[1]);
        return true;
      });
    }
    return (
      <div className="cart clearfix">
        <Row className="cart-row-button">
          <Col>
            <div className={this.state.visible ? 'cart-row-button-box cart-row-button-box-active' : 'cart-row-button-box cart-row-button-box-negative'} onMouseEnter={ this.handleMouseEnter } onMouseLeave={ this.handleMouseLeave }>
              <Icon type="shopping-cart" className="cart-row-button-box-cart" />
              <span className="cart-row-button-box-text">购物车结算</span>
              <Icon type="down" className="cart-row-button-box-arrow" />
            </div>
          </Col>
        </Row>
        <If condition={this.state.visible}>
          <Row className="cart-row-content" onMouseEnter={ this.handleMouseEnter } onMouseLeave={ this.handleMouseLeave }>
            <Col className="clearfix">
              <div className="cart-row-content-box">
                <Row className="cart-row-content-box-row-title">
                  <Col>
                    <h4 className="cart-row-content-box-row-title-h4">最新加入的商品</h4>
                  </Col>
                </Row>
                <Row className="cart-row-content-box-row-list">
                  <Col>
                    <div className="cart-row-content-box-row-list-box">
                      <If condition={ goods.length < 1 }>
                        <div className="no-items">
                          <span>您的购物车中暂无商品，赶快选择心爱的商品吧！</span>
                        </div>
                      </If>
                      <If condition={ goods.length > 0 }>
                        { goods }
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
                            <p className="check-items">共<span className="check-items-count">{cart.data && cart.data.length}</span>种商品  总计金额：<strong className="check-items-price">¥{totalPrice.toFixed(2)}</strong></p>
                          </If>
                        </Col>
                      </Row>
                      <Row>
                        <Col className="clearfix">
                          <Link to="/cart" className="checkout-cart">结算购物车中的商品</Link>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </If>
      </div>
    );
  }
}

export default Cart;
