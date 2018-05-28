/**
 * 鲜花销售商品详情页面
 * Created by tianrenjie on 2018/5/5
 */
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { If } from 'jsx-control-statements';
import { onViewInit, getSingleItem, getItemComment, addItemComment } from './action/action';
import { itemSelector, commentSelector } from './selector/selector';
import { validateLoginState } from '../../user/login/action/action';
import { getCart, deleteGood, addGood } from '../../user/index/action/action';
import { userSelector } from '../../user/login/selector/selector';
import { cartSelector } from '../../user/index/selector/selector';
import Cookie from '../../common/cookie';
import './ItemDetail.less';
import Header from '../index/header/Header';
import Search from '../index/search/Search';
import Navigation from '../index/navigation/Navigation';
import ItemInfo from './itemInfo/ItemInfo';
import ItemOther from './itemOther/ItemOther';
import Footer from '../index/footer/Footer';

class ItemDeatil extends React.Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    cart: PropTypes.object.isRequired,
    item: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    onViewInit: PropTypes.func.isRequired,
    validateLoginState: PropTypes.func.isRequired,
    getCart: PropTypes.func.isRequired,
    deleteGood: PropTypes.func.isRequired,
    addGood: PropTypes.func.isRequired,
    getSingleItem: PropTypes.func.isRequired,
    getItemComment: PropTypes.func.isRequired,
    addItemComment: PropTypes.func.isRequired,
  };
  componentWillMount() {
    this.props.onViewInit();
    this.props.validateLoginState();
    this.props.getCart({ _id: Cookie.getCookie('_id') });
    if (!_.isEmpty(this.props.location.query.id)) {
      this.props.getSingleItem({ _id: this.props.location.query.id });
      this.props.getItemComment({ itemId: this.props.location.query.id });
    }
  }
  render() {
    return (
      <div className="itemdetail">
        <Header {...this.props} />
        <Search {...this.props} />
        <Navigation {...this.props} />
        <If condition={_.isEmpty(this.props.item.data)}>
          <h1 className="itemdetail-no-item">暂无此商品</h1>
        </If>
        <If condition={!_.isEmpty(this.props.item.data)}>
          <ItemInfo {...this.props} />
          <ItemOther {...this.props} />
        </If>
        <Footer {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: userSelector(state),
    cart: cartSelector(state),
    item: itemSelector(state),
    comment: commentSelector(state),
  };
};

const mapDispatchToProps = {
  onViewInit,
  validateLoginState,
  getCart,
  deleteGood,
  addGood,
  getSingleItem,
  getItemComment,
  addItemComment,
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemDeatil);
