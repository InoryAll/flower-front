/**
 * 鲜花销售购物车页
 * Created by tianrenjie on 2018/5/6
 */
import React, { PropTypes } from 'react';
import Header from '../index/header/Header';
import ShoppingSteps from './shoppingSteps/ShoppingSteps';
import Footer from '../index/footer/Footer';

class ShoppingCart extends React.Component {
  static propTypes = {};
  render() {
    return (
      <div>
        <Header />
        <ShoppingSteps step={0} />
        <Footer />
      </div>
    );
  }
}

export default ShoppingCart;
