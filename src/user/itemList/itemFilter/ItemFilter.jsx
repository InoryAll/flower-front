/**
 * 鲜花销售商品列表页面商品过滤器
 * Created by tianrenjie on 2018/5/3
 */
import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Row, Col } from 'antd';
import './ItemFilter.less';

class ItemFilter extends React.Component {
  static propTypes = {};
  state = {
    filter: [],
  };
  onSearch = (attribute, value) => {
    console.log(attribute, value);
    this.setState({
      filter: [...new Set([...this.state.filter, value])],
    });
  };
  render() {
    const { filter } = this.state;
    const selectItem = [];
    this.state.filter.map((item, index) => {
      selectItem.push(<li key={index}>{item}</li>);
      return true;
    });
    return (
      <div className="itemfilter">
        <div className="itemfilter-box">
          <Row>
            <Col>
              <h3 className="itemfilter-title">商品筛选</h3>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3 className="itemfilter-title">您已选择</h3>
              <ul>
                {selectItem}
              </ul>
            </Col>
          </Row>
          <Row>
            <Col>
              <ul className="itemfilter-ul">
                <li className="itemfilter-ul-li">
                  <span className="itemfilter-ul-li-span">用途</span>
                  <ul className="itemfilter-ul-li-ul">
                    <li className="itemfilter-ul-li-ul-li"><Link onClick={() => { this.onSearch('usage', 'love'); }} className={ filter.indexOf('love') > -1 ? 'itemfilter-ul-li-ul-li-link itemfilter-active' : 'itemfilter-ul-li-ul-li-link' }>爱情鲜花</Link></li>
                    <li className="itemfilter-ul-li-ul-li"><Link className="itemfilter-ul-li-ul-li-link"/></li>
                    <li className="itemfilter-ul-li-ul-li"><Link className="itemfilter-ul-li-ul-li-link"/></li>
                    <li className="itemfilter-ul-li-ul-li"><Link className="itemfilter-ul-li-ul-li-link"/></li>
                    <li className="itemfilter-ul-li-ul-li"><Link className="itemfilter-ul-li-ul-li-link"/></li>
                    <li className="itemfilter-ul-li-ul-li"><Link className="itemfilter-ul-li-ul-li-link"/></li>
                    <li className="itemfilter-ul-li-ul-li"><Link className="itemfilter-ul-li-ul-li-link"/></li>
                    <li className="itemfilter-ul-li-ul-li"><Link className="itemfilter-ul-li-ul-li-link"/></li>
                    <li className="itemfilter-ul-li-ul-li"><Link className="itemfilter-ul-li-ul-li-link"/></li>
                    <li className="itemfilter-ul-li-ul-li"><Link className="itemfilter-ul-li-ul-li-link"/></li>
                  </ul>
                </li>
                <li className="itemfilter-ul-li"></li>
                <li className="itemfilter-ul-li"></li>
                <li className="itemfilter-ul-li"></li>
                <li className="itemfilter-ul-li"></li>
                <li className="itemfilter-ul-li"></li>
                <li className="itemfilter-ul-li"></li>
                <li className="itemfilter-ul-li"></li>
                <li className="itemfilter-ul-li"></li>
              </ul>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default ItemFilter;
