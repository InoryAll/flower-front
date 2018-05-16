/**
 * 鲜花销售购物车页
 * Created by tianrenjie on 2018/5/6
 */
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { validateLoginState } from '../../user/login/action/action';
import { userSelector } from '../../user/login/selector/selector';
import Header from '../index/header/Header';
import ShoppingSteps from './shoppingSteps/ShoppingSteps';
import ShoppingList from './shoppingList/ShoppingList';
import Footer from '../index/footer/Footer';

class ShoppingCart extends React.Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    validateLoginState: PropTypes.func.isRequired,
  };
  componentWillMount() {
    this.props.validateLoginState();
  }
  render() {
    return (
      <div>
        <Header {...this.props} />
        <ShoppingSteps step={0} {...this.props} />
        <ShoppingList {...this.props} />
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
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
