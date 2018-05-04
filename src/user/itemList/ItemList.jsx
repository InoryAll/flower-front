/**
 * 鲜花销售商品列表页面
 * Created by tianrenjie on 2018/5/3
 */
import React, { PropTypes } from 'react';
import './ItemList.less';
import Header from '../index/header/Header';
import Search from '../index/search/Search';
import Navigation from '../index/navigation/Navigation';
import ItemFilter from './itemFilter/ItemFilter';
import ItemPage from './itemList/ItemPage';
import Footer from '../index/footer/Footer';

class ItemList extends React.Component {
  static propTypes = {};
  render() {
    return (
      <div className="itemlist">
        <Header />
        <Search />
        <Navigation />
        <ItemFilter />
        <ItemPage />
        <Footer />
      </div>
    );
  }
}

export default ItemList;
