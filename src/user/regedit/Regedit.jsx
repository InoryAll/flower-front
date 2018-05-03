/**
 * 鲜花销售注册页
 * Created by tianrenjie on 2018/5/3
 */
import React, { PropTypes } from 'react';
import './regedit.less';
import Header from './header/Header';
import RegeditBox from './regeditBox/RegeditBox';
import Footer from '../login/footer/Footer';

class Regedit extends React.Component {
  static propTypes = {};
  render() {
    return (
      <div>
        <Header />
        <RegeditBox />
        <Footer />
      </div>
    );
  }
}

export default Regedit;
