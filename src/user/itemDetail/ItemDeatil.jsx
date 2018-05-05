/**
 * 鲜花销售商品详情页面
 * Created by tianrenjie on 2018/5/5
 */
import React, { PropTypes } from 'react';
import './ItemDetail.less';
import Header from '../index/header/Header';
import Search from '../index/search/Search';
import Navigation from '../index/navigation/Navigation';
import ItemInfo from './itemInfo/ItemInfo';
import Footer from '../index/footer/Footer';

class ItemDeatil extends React.Component {
  static propTypes = {};
  render() {
    return (
      <div className="itemdetail">
        <Header />
        <Search />
        <Navigation />
        <ItemInfo />
        <Footer />
      </div>
    );
  }
}

export default ItemDeatil;
