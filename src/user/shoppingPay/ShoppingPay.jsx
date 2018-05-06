/**
 * 鲜花销售订单支付页
 * Created by tianrenjie on 2018/5/6
 */
import React, { PropTypes } from 'react';
import Header from '../index/header/Header';
import ShoppingSteps from '../shoppingCart/shoppingSteps/ShoppingSteps';
import ShoppingCode from './shoppingCode/ShoppingCode';
import Footer from '../index/footer/Footer';

class ShoppingPay extends React.Component {
  static propTypes = {};
  render() {
    return (
      <div>
        <Header />
        <ShoppingSteps step={2} />
        <ShoppingCode />
        <Footer />
      </div>
    );
  }
}

export default ShoppingPay;
