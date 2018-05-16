/**
 * 鲜花销售订单支付页
 * Created by tianrenjie on 2018/5/6
 */
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { onViewInit } from './action/action';
import { validateLoginState } from '../../user/login/action/action';
import { updateOrder } from '../../user/checkInfo/action/action';
import { userSelector } from '../../user/login/selector/selector';
import { orderSelector } from '../../user/checkInfo/selector/selector';
import Header from '../index/header/Header';
import ShoppingSteps from '../shoppingCart/shoppingSteps/ShoppingSteps';
import ShoppingCode from './shoppingCode/ShoppingCode';
import Footer from '../index/footer/Footer';

class ShoppingPay extends React.Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    order: PropTypes.object.isRequired,
    validateLoginState: PropTypes.func.isRequired,
    onViewInit: PropTypes.func.isRequired,
    updateOrder: PropTypes.func.isRequired,
  };
  componentWillMount() {
    this.props.onViewInit();
    this.props.validateLoginState();
  }
  render() {
    return (
      <div>
        <Header {...this.props} />
        <ShoppingSteps step={2} {...this.props} />
        <ShoppingCode {...this.props} />
        <Footer {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: userSelector(state),
    order: orderSelector(state),
  };
};

const mapDispatchToProps = {
  validateLoginState,
  onViewInit,
  updateOrder,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingPay);
