/**
 * 鲜花销售购物完成页
 * Created by tianrenjie on 2018/5/6
 */
import React, { PropTypes } from 'react';
import Header from '../index/header/Header';
import ShoppingSteps from '../shoppingCart/shoppingSteps/ShoppingSteps';
import ShoppingResult from './shoppingResult/ShoppingResult';
import Footer from '../index/footer/Footer';


class ShoppingFinish extends React.Component {
  static propTypes = {};
  render() {
    return (
      <div>
        <Header />
        <ShoppingSteps step={4} />
        <ShoppingResult />
        <Footer />
      </div>
    );
  }
}

export default ShoppingFinish;
