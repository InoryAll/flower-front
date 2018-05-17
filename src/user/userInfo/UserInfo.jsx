/**
 * 鲜花销售个人中心页
 * Created by tianrenjie on 2018/5/6
 */
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Cookie from '../../common/cookie';
import { validateLoginState, updateUser } from '../../user/login/action/action';
import { getCart, deleteGood } from '../../user/index/action/action';
import { onViewInit } from './action/action';
import { userSelector } from '../../user/login/selector/selector';
import { cartSelector } from '../../user/index/selector/selector';
import Header from '../index/header/Header';
import Search from '../index/search/Search';
import Navigation from '../index/navigation/Navigation';
import UserContent from './userContent/UserContent';
import Footer from '../index/footer/Footer';
import './UserInfo.less';

class UserInfo extends React.Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    cart: PropTypes.object.isRequired,
    validateLoginState: PropTypes.func.isRequired,
    onViewInit: PropTypes.func.isRequired,
    deleteGood: PropTypes.func.isRequired,
    getCart: PropTypes.func.isRequired,
    updateUser: PropTypes.func.isRequired,
  };
  componentWillMount() {
    this.props.onViewInit();
    this.props.validateLoginState();
    this.props.getCart({ _id: Cookie.getCookie('_id') });
  }
  render() {
    return (
      <div className="userinfo">
        <Header {...this.props} />
        <Search {...this.props} />
        <Navigation {...this.props} />
        <UserContent {...this.props} />
        <Footer {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: userSelector(state),
    cart: cartSelector(state),
  };
};

const mapDispatchToProps = {
  validateLoginState,
  onViewInit,
  getCart,
  deleteGood,
  updateUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
