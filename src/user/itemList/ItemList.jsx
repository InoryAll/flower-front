/**
 * 鲜花销售商品列表页面
 * Created by tianrenjie on 2018/5/3
 */
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { onViewInit, filtItemList } from './action/action';
import { validateLoginState } from '../../user/login/action/action';
import { getItem, getCart } from '../../user/index/action/action';
import { userSelector } from '../../user/login/selector/selector';
import { itemsSelector, cartSelector } from '../../user/index/selector/selector';
import { itemListSelector } from './selector/selector';
import Cookie from '../../common/cookie';
import './ItemList.less';
import Header from '../index/header/Header';
import Search from '../index/search/Search';
import Navigation from '../index/navigation/Navigation';
import ItemFilter from './itemFilter/ItemFilter';
import ItemPage from './itemList/ItemPage';
import Footer from '../index/footer/Footer';

class ItemList extends React.Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    items: PropTypes.object.isRequired,
    cart: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    itemList: PropTypes.object.isRequired,
    onViewInit: PropTypes.func.isRequired,
    filtItemList: PropTypes.func.isRequired,
    validateLoginState: PropTypes.func.isRequired,
    getItem: PropTypes.func.isRequired,
    getCart: PropTypes.func.isRequired,
  };
  componentWillMount() {
    this.props.onViewInit();
    this.props.validateLoginState();
    this.props.getItem();
    this.props.getCart({ _id: Cookie.getCookie('_id') });
  }
  render() {
    return (
      <div className="itemlist">
        <Header {...this.props} />
        <Search {...this.props} />
        <Navigation {...this.props} />
        <ItemFilter {...this.props} />
        <ItemPage {...this.props} />
        <Footer {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: userSelector(state),
    items: itemsSelector(state),
    cart: cartSelector(state),
    itemList: itemListSelector(state),
  };
};

const mapDispatchToProps = {
  onViewInit,
  validateLoginState,
  getItem,
  getCart,
  filtItemList,
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
