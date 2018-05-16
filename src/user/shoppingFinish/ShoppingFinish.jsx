/**
 * 鲜花销售购物完成页
 * Created by tianrenjie on 2018/5/6
 */
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { onViewInit } from './action/action';
import { validateLoginState } from '../../user/login/action/action';
import { userSelector } from '../../user/login/selector/selector';
import Header from '../index/header/Header';
import ShoppingSteps from '../shoppingCart/shoppingSteps/ShoppingSteps';
import ShoppingResult from './shoppingResult/ShoppingResult';
import Footer from '../index/footer/Footer';


class ShoppingFinish extends React.Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    validateLoginState: PropTypes.func.isRequired,
    onViewInit: PropTypes.func.isRequired,
  };
  componentWillMount() {
    this.props.onViewInit();
    this.props.validateLoginState();
  }
  render() {
    return (
      <div>
        <Header {...this.props} />
        <ShoppingSteps step={4} {...this.props} />
        <ShoppingResult {...this.props} />
        <Footer {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: userSelector(state),
  };
};

const mapDispatchToProps = {
  validateLoginState,
  onViewInit,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingFinish);
