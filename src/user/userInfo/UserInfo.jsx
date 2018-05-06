/**
 * 鲜花销售个人中心页
 * Created by tianrenjie on 2018/5/6
 */
import React, { PropTypes } from 'react';
import Header from '../index/header/Header';
import Search from '../index/search/Search';
import Navigation from '../index/navigation/Navigation';
import Footer from '../index/footer/Footer';
import './UserInfo.less';

class UserInfo extends React.Component {
  static propTypes = {};
  render() {
    return (
      <div className="userinfo">
        <Header />
        <Search />
        <Navigation />
        <Footer />
      </div>
    );
  }
}

export default UserInfo;
