/**
 * 鲜花销售订单核对页
 * Created by tianrenjie on 2018/5/6
 */
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Cookie from '../../common/cookie';
import { onViewInit, addOrder } from './action/action';
import { validateLoginState } from '../../user/login/action/action';
import { getCart } from '../../user/index/action/action';
import { userSelector } from '../../user/login/selector/selector';
import { cartSelector } from '../../user/index/selector/selector';
import { orderSelector } from './selector/selector';
import Header from '../index/header/Header';
import ShoppingSteps from '../shoppingCart/shoppingSteps/ShoppingSteps';
import CheckForm from './checkForm/CheckForm';
import Footer from '../index/footer/Footer';

class CheckInfo extends React.Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    cart: PropTypes.object.isRequired,
    validateLoginState: PropTypes.func.isRequired,
    onViewInit: PropTypes.func.isRequired,
    getCart: PropTypes.func.isRequired,
    addOrder: PropTypes.func.isRequired,
  };
  componentWillMount() {
    this.props.onViewInit();
    this.props.validateLoginState();
    this.props.getCart({ _id: Cookie.getCookie('_id') });
  }
  render() {
    return (
      <div>
        <Header {...this.props} />
        <ShoppingSteps step={1} {...this.props} />
        <CheckForm {...this.props} />
        <Footer {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: userSelector(state),
    cart: cartSelector(state),
    order: orderSelector(state),
  };
};

const mapDispatchToProps = {
  onViewInit,
  validateLoginState,
  getCart,
  addOrder,
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckInfo);
