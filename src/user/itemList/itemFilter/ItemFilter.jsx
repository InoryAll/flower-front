/**
 * 鲜花销售商品列表页面商品过滤器
 * Created by tianrenjie on 2018/5/3
 */
import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Row, Col, Icon } from 'antd';
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
  handleDeleteClick = (value) => {
    this.setState({
      filter: this.state.filter.filter(item => item !== value),
    });
  };
  render() {
    const { filter } = this.state;
    const selectItem = [];
    this.state.filter.map((item, index) => {
      selectItem.push(<li className="itemfilter-selected-ul-li" key={index}><Link onClick={() => { this.handleDeleteClick(item); }} className="itemfilter-selected-link">{item}<span className="itemfilter-selected-icon"><Icon type="close" /></span></Link></li>);
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
              <div className="itemfilter-selected clearfix">
                <span className="itemfilter-selected-span">您已选择：</span>
                <ul className="itemfilter-selected-ul">
                  {selectItem}
                </ul>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <ul className="itemfilter-ul">
                <li className="itemfilter-ul-li clearfix">
                  <span className="itemfilter-ul-li-span">用途：</span>
                  <ul className="itemfilter-ul-li-ul">
                    <li className="itemfilter-ul-li-ul-li"><Link onClick={() => { this.onSearch('usage', 'love'); }} className={ filter.indexOf('love') > -1 ? 'itemfilter-ul-li-ul-li-link itemfilter-active' : 'itemfilter-ul-li-ul-li-link' }>爱情鲜花</Link></li>
                    <li className="itemfilter-ul-li-ul-li"><Link onClick={() => { this.onSearch('usage', 'business'); }} className={ filter.indexOf('business') > -1 ? 'itemfilter-ul-li-ul-li-link itemfilter-active' : 'itemfilter-ul-li-ul-li-link' }>商务用花</Link></li>
                    <li className="itemfilter-ul-li-ul-li"><Link onClick={() => { this.onSearch('usage', 'birthday'); }} className={ filter.indexOf('birthday') > -1 ? 'itemfilter-ul-li-ul-li-link itemfilter-active' : 'itemfilter-ul-li-ul-li-link' }>生日鲜花</Link></li>
                    <li className="itemfilter-ul-li-ul-li"><Link onClick={() => { this.onSearch('usage', 'friendship'); }} className={ filter.indexOf('friendship') > -1 ? 'itemfilter-ul-li-ul-li-link itemfilter-active' : 'itemfilter-ul-li-ul-li-link' }>友情鲜花</Link></li>
                    <li className="itemfilter-ul-li-ul-li"><Link onClick={() => { this.onSearch('usage', 'greetings'); }} className={ filter.indexOf('greetings') > -1 ? 'itemfilter-ul-li-ul-li-link itemfilter-active' : 'itemfilter-ul-li-ul-li-link' }>老师长辈</Link></li>
                    <li className="itemfilter-ul-li-ul-li"><Link onClick={() => { this.onSearch('usage', 'wedding'); }} className={ filter.indexOf('wedding') > -1 ? 'itemfilter-ul-li-ul-li-link itemfilter-active' : 'itemfilter-ul-li-ul-li-link' }>求婚婚庆</Link></li>
                    <li className="itemfilter-ul-li-ul-li"><Link onClick={() => { this.onSearch('usage', 'apology'); }} className={ filter.indexOf('apology') > -1 ? 'itemfilter-ul-li-ul-li-link itemfilter-active' : 'itemfilter-ul-li-ul-li-link' }>道歉鲜花</Link></li>
                    <li className="itemfilter-ul-li-ul-li"><Link onClick={() => { this.onSearch('usage', 'sympathy'); }} className={ filter.indexOf('sympathy') > -1 ? 'itemfilter-ul-li-ul-li-link itemfilter-active' : 'itemfilter-ul-li-ul-li-link' }>探病慰问</Link></li>
                    <li className="itemfilter-ul-li-ul-li"><Link onClick={() => { this.onSearch('usage', 'congratulation'); }} className={ filter.indexOf('congratulation') > -1 ? 'itemfilter-ul-li-ul-li-link itemfilter-active' : 'itemfilter-ul-li-ul-li-link' }>祝福庆贺</Link></li>
                    <li className="itemfilter-ul-li-ul-li"><Link onClick={() => { this.onSearch('usage', 'death'); }} className={ filter.indexOf('death') > -1 ? 'itemfilter-ul-li-ul-li-link itemfilter-active' : 'itemfilter-ul-li-ul-li-link' }>祭奠</Link></li>
                  </ul>
                </li>
              </ul>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default ItemFilter;
