/**
 * 鲜花销售资讯页
 * Created by tianrenjie on 2018/5/6
 */
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { validateLoginState } from '../../user/login/action/action';
import { getCart } from '../../user/index/action/action';
import { userSelector } from '../../user/login/selector/selector';
import { cartSelector } from '../../user/index/selector/selector';
import Header from '../index/header/Header';
import Search from '../index/search/Search';
import Navigation from '../index/navigation/Navigation';
import InfoContent from './infoContent/InfoContent';
import Footer from '../index/footer/Footer';
import './Info.less';

class Info extends React.Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    cart: PropTypes.object.isRequired,
    validateLoginState: PropTypes.func.isRequired,
    getCart: PropTypes.func.isRequired,
  };
  render() {
    return (
      <div className="info">
        <Header {...this.props} />
        <Search {...this.props} />
        <Navigation {...this.props} />
        <InfoContent {...this.props} />
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
  getCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Info);
