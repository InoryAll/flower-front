/**
 * 鲜花销售主页
 * Created by tianrenjie on 2018/3/19
 */
import React, { PropTypes } from 'react';
import Header from './header/Header';
import Search from './search/Search';
import Navigation from './navigation/Navigation';
import Banner from './banner/Banner';
import Promote from './promote/Promote';
import Footer from './footer/Footer';

class Index extends React.Component {
  static propTypes = {};
  render() {
    return (
      <div>
        <Header />
        <Search />
        <Navigation />
        <Banner />
        <Promote />
        <Footer />
      </div>
    );
  }
}

export default Index;
