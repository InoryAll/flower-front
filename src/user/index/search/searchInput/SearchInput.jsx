/**
 * 鲜花销售主页search
 * Created by tianrenjie on 2018/3/22
 */
import React, { PropTypes } from 'react';
import { Row, Col } from 'antd';
import $ from 'jquery';
import { Link, browserHistory } from 'react-router';
import './SearchInput.less';

class SearchInput extends React.Component {
  static propTypes = {};
  handleSearch = () => {
    browserHistory.push(`/itemList?condition=${$('.search-row-box-input').val()}`);
  };
  render() {
    return (
      <div className="search">
        <Row className="search-row">
          <Col span={17} offset={2}>
            <div className="search-row-box">
              <input type="text" className="search-row-box-input" placeholder="请输入您要搜索的商品的关键字" />
            </div>
          </Col>
          <Col span={3}>
            <button className="search-row-button" onClick={this.handleSearch}>搜索</button>
          </Col>
        </Row>
        <Row className="hot-row">
          <Col span={20} offset={2}>
            <p className="hot-row-p">
              <strong className="hot-row-p-strong">热门：</strong>
              <span className="hot-row-p-span"><Link to="/itemList?condition=valentine" className="hot-row-p-span-a">情人节</Link></span>
              <span className="hot-row-p-span"><Link to="/itemList?condition=chineseValentine" className="hot-row-p-span-a">七夕</Link></span>
              <span className="hot-row-p-span"><Link to="/itemList?condition=rose" className="hot-row-p-span-a">玫瑰</Link></span>
              <span className="hot-row-p-span"><Link to="/itemList?condition=lily" className="hot-row-p-span-a">百合</Link></span>
              <span className="hot-row-p-span"><Link to="/itemList?condition=love" className="hot-row-p-span-a">爱情</Link></span>
              <span className="hot-row-p-span"><Link to="/itemList?condition=basket" className="hot-row-p-span-a">花篮</Link></span>
            </p>
          </Col>
        </Row>
      </div>
    );
  }
}

export default SearchInput;
