/**
 * 鲜花销售主页logo+search区域
 * Created by tianrenjie on 2018/3/21
 */
import React, { PropTypes } from 'react';
import { Row, Col } from 'antd';
import logo from '../../../../static/img/logo/logo.jpg';
import './Search.less';
import SearchInput from './searchInput/SearchInput';
import Cart from './cart/Cart';

class Search extends React.Component {
  static propTypes = {};
  render() {
    return (
      <div className="logo">
        <Row className="logo-row">
          <Col span={5} offset={2}>
            <div className="logo-row-logo">
              <img src={logo} alt="花之韵" className="logo-row-logo-img" />
            </div>
          </Col>
          <Col span={10}>
            <div className="logo-row-search">
              <SearchInput />
            </div>
          </Col>
          <Col span={5}>
            <div className="logo-row-cart">
              <Cart {...this.props} />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Search;
