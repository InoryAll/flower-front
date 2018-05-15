/**
 * 鲜花销售主页
 * Created by tianrenjie on 2018/3/19
 */
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { userSelector } from '../../user/login/selector/selector';
import {
  itemsSelector,
  hotSaleSelector,
  firstFloorSelector,
  secondFloorSelector,
  thirdFloorSelector,
  forthFloorSelector,
  dailySaleSelector,
} from './selector/selector';
import {
  onViewInit,
  getItem,
} from './action/action';
import {
  validateLoginState,
} from '../../user/login/action/action';
import Header from './header/Header';
import Search from './search/Search';
import Navigation from './navigation/Navigation';
import Banner from './banner/Banner';
import Promote from './promote/Promote';
import HotSale from './hotSale/HotSale';
import FirstFloor from './firstFloor/FirstFloor';
import SecondFloor from './secondFloor/SecondFloor';
import ThirdFloor from './thirdFloor/ThirdFloor';
import ForthFloor from './forthFloor/ForthFloor';
import DailySale from './dailySale/DailySale';
import Footer from './footer/Footer';

class Index extends React.Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    onViewInit: PropTypes.func.isRequired,
    getItem: PropTypes.func.isRequired,
    validateLoginState: PropTypes.func.isRequired,
    items: PropTypes.object.isRequired,
    hotSale: PropTypes.object.isRequired,
    firstFloor: PropTypes.object.isRequired,
    secondFloor: PropTypes.object.isRequired,
    thirdFloor: PropTypes.object.isRequired,
    forthFloor: PropTypes.object.isRequired,
    dailySale: PropTypes.object.isRequired,
  };
  componentWillMount() {
    this.props.onViewInit();
    this.props.validateLoginState();
    this.props.getItem();
  }
  render() {
    return (
      <div>
        <Header {...this.props} />
        <Search {...this.props} />
        <Navigation {...this.props} />
        <Banner {...this.props} />
        <Promote {...this.props} />
        <HotSale {...this.props} />
        <FirstFloor {...this.props} />
        <SecondFloor {...this.props} />
        <ThirdFloor {...this.props} />
        <ForthFloor {...this.props} />
        <DailySale {...this.props} />
        <Footer {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: userSelector(state),
    items: itemsSelector(state),
    hotSale: hotSaleSelector(state),
    firstFloor: firstFloorSelector(state),
    secondFloor: secondFloorSelector(state),
    thirdFloor: thirdFloorSelector(state),
    forthFloor: forthFloorSelector(state),
    dailySale: dailySaleSelector(state),
  };
};

const mapDispatchToProps = {
  onViewInit,
  getItem,
  validateLoginState,
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
