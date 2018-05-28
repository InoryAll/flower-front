/**
 * 鲜花销售注册页
 * Created by tianrenjie on 2018/5/3
 */
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import './regedit.less';
import Header from './header/Header';
import RegeditBox from './regeditBox/RegeditBox';
import Footer from '../login/footer/Footer';
import { userSelector } from './selector/selector';
import {
  onViewInit,
  onRegedit,
} from './action/action';

class Regedit extends React.Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    onViewInit: PropTypes.func.isRequired,
    onRegedit: PropTypes.func.isRequired,
  };
  componentWillMount() {
    this.props.onViewInit();
  }
  render() {
    return (
      <div className="regedit">
        <Header />
        <RegeditBox {...this.props} />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: userSelector(state),
  };
};

const mapDispatchToProps = {
  onViewInit,
  onRegedit,
};

export default connect(mapStateToProps, mapDispatchToProps)(Regedit);
