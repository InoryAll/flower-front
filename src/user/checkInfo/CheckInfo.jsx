/**
 * 鲜花销售订单核对页
 * Created by tianrenjie on 2018/5/6
 */
import React, { PropTypes } from 'react';
import Header from '../index/header/Header';
import ShoppingSteps from '../shoppingCart/shoppingSteps/ShoppingSteps';
import Footer from '../index/footer/Footer';

class CheckInfo extends React.Component {
  static propTypes = {};
  render() {
    return (
      <div>
        <Header />
        <ShoppingSteps step={1} />
        <Footer />
      </div>
    );
  }
}

export default CheckInfo;
