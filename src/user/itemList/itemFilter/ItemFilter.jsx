/**
 * 鲜花销售商品列表页面商品过滤器
 * Created by tianrenjie on 2018/5/3
 */
import React, { PropTypes } from 'react';
import _ from 'lodash';
import { Link } from 'react-router';
import { Row, Col, Icon } from 'antd';
import Setting from '../../../common/setting';
import './ItemFilter.less';

class ItemFilter extends React.Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
    items: PropTypes.object.isRequired,
    filtItemList: PropTypes.func.isRequired,
  };
  state = {
    filter: [],
  };
  componentWillMount() {
    if (!_.isUndefined(this.props.location.query.condition)) {
      if (!_.isEmpty(this.props.location.query.condition)) {
        this.setState({
          filter: [...this.state.filter, this.props.location.query.condition],
        });
        this.state.filter = [...new Set([...this.state.filter, this.props.location.query.condition])];
        this.props.filtItemList(this.state.filter);
      }
    }
  }
  componentWillReceiveProps(nextProps) {
    if (!_.isEqual(this.props.location.query.condition, nextProps.location.query.condition)) {
      if (!_.isEmpty(nextProps.location.query.condition)) {
        this.setState({
          filter: [...this.state.filter, nextProps.location.query.condition],
        });
        this.state.filter = [...new Set([...this.state.filter, nextProps.location.query.condition])];
        this.props.filtItemList(this.state.filter);
      }
    }
  }
  onSearch = (attribute, value) => {
    this.state.filter = [...new Set([...this.state.filter, value])];
    this.setState({
      filter: [...new Set([...this.state.filter, value])],
    });
    this.props.filtItemList(this.state.filter);
  };
  handleDeleteClick = (value) => {
    this.state.filter = this.state.filter.filter(item => item !== value);
    this.setState({
      filter: this.state.filter.filter(item => item !== value),
    });
    this.props.filtItemList(this.state.filter);
  };
  render() {
    const { filter } = this.state;
    Setting.initSettings();
    const selectItem = [];
    this.state.filter.map((item, index) => {
      selectItem.push(<li className="itemfilter-selected-ul-li" key={index}><Link onClick={() => { this.handleDeleteClick(item); }} className="itemfilter-selected-link">{Setting.mapValueToLabel(item)}<span className="itemfilter-selected-icon"><Icon type="close" /></span></Link></li>);
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
                <li className="itemfilter-ul-li clearfix">
                  <span className="itemfilter-ul-li-span">花材：</span>
                  <ul className="itemfilter-ul-li-ul">
                    <li className="itemfilter-ul-li-ul-li"><Link onClick={() => { this.onSearch('material', 'rose'); }} className={ filter.indexOf('rose') > -1 ? 'itemfilter-ul-li-ul-li-link itemfilter-active' : 'itemfilter-ul-li-ul-li-link' }>玫瑰</Link></li>
                    <li className="itemfilter-ul-li-ul-li"><Link onClick={() => { this.onSearch('material', 'lily'); }} className={ filter.indexOf('lily') > -1 ? 'itemfilter-ul-li-ul-li-link itemfilter-active' : 'itemfilter-ul-li-ul-li-link' }>百合</Link></li>
                    <li className="itemfilter-ul-li-ul-li"><Link onClick={() => { this.onSearch('material', 'sunflower'); }} className={ filter.indexOf('sunflower') > -1 ? 'itemfilter-ul-li-ul-li-link itemfilter-active' : 'itemfilter-ul-li-ul-li-link' }>向日葵</Link></li>
                    <li className="itemfilter-ul-li-ul-li"><Link onClick={() => { this.onSearch('material', 'carnations'); }} className={ filter.indexOf('carnations') > -1 ? 'itemfilter-ul-li-ul-li-link itemfilter-active' : 'itemfilter-ul-li-ul-li-link' }>康乃馨</Link></li>
                    <li className="itemfilter-ul-li-ul-li"><Link onClick={() => { this.onSearch('material', 'tulip'); }} className={ filter.indexOf('tulip') > -1 ? 'itemfilter-ul-li-ul-li-link itemfilter-active' : 'itemfilter-ul-li-ul-li-link' }>郁金香</Link></li>
                    <li className="itemfilter-ul-li-ul-li"><Link onClick={() => { this.onSearch('material', 'gerbera'); }} className={ filter.indexOf('gerbera') > -1 ? 'itemfilter-ul-li-ul-li-link itemfilter-active' : 'itemfilter-ul-li-ul-li-link' }>扶郞</Link></li>
                    <li className="itemfilter-ul-li-ul-li"><Link onClick={() => { this.onSearch('material', 'callas'); }} className={ filter.indexOf('callas') > -1 ? 'itemfilter-ul-li-ul-li-link itemfilter-active' : 'itemfilter-ul-li-ul-li-link' }>马蹄莲</Link></li>
                    <li className="itemfilter-ul-li-ul-li"><Link onClick={() => { this.onSearch('material', 'babysbreath'); }} className={ filter.indexOf('babysbreath') > -1 ? 'itemfilter-ul-li-ul-li-link itemfilter-active' : 'itemfilter-ul-li-ul-li-link' }>满天星</Link></li>
                    <li className="itemfilter-ul-li-ul-li"><Link onClick={() => { this.onSearch('material', 'strawberry'); }} className={ filter.indexOf('strawberry') > -1 ? 'itemfilter-ul-li-ul-li-link itemfilter-active' : 'itemfilter-ul-li-ul-li-link' }>草莓花束</Link></li>
                  </ul>
                </li>
                <li className="itemfilter-ul-li clearfix">
                  <span className="itemfilter-ul-li-span">价格：</span>
                  <ul className="itemfilter-ul-li-ul">
                    <li className="itemfilter-ul-li-ul-li"><Link onClick={() => { this.onSearch('price', 'oneToTwo'); }} className={ filter.indexOf('rose') > -1 ? 'itemfilter-ul-li-ul-li-link itemfilter-active' : 'itemfilter-ul-li-ul-li-link' }>100-200元</Link></li>
                    <li className="itemfilter-ul-li-ul-li"><Link onClick={() => { this.onSearch('price', 'twoToThree'); }} className={ filter.indexOf('lily') > -1 ? 'itemfilter-ul-li-ul-li-link itemfilter-active' : 'itemfilter-ul-li-ul-li-link' }>200-300元</Link></li>
                    <li className="itemfilter-ul-li-ul-li"><Link onClick={() => { this.onSearch('price', 'threeToFive'); }} className={ filter.indexOf('sunflower') > -1 ? 'itemfilter-ul-li-ul-li-link itemfilter-active' : 'itemfilter-ul-li-ul-li-link' }>300-500元</Link></li>
                    <li className="itemfilter-ul-li-ul-li"><Link onClick={() => { this.onSearch('price', 'fiveToEight'); }} className={ filter.indexOf('carnations') > -1 ? 'itemfilter-ul-li-ul-li-link itemfilter-active' : 'itemfilter-ul-li-ul-li-link' }>500-800元</Link></li>
                    <li className="itemfilter-ul-li-ul-li"><Link onClick={() => { this.onSearch('price', 'aboveEight'); }} className={ filter.indexOf('tulip') > -1 ? 'itemfilter-ul-li-ul-li-link itemfilter-active' : 'itemfilter-ul-li-ul-li-link' }>800元以上</Link></li>
                  </ul>
                </li>
                <li className="itemfilter-ul-li clearfix">
                  <span className="itemfilter-ul-li-span">对象：</span>
                  <ul className="itemfilter-ul-li-ul">
                    <li className="itemfilter-ul-li-ul-li"><Link onClick={() => { this.onSearch('object', 'lover'); }} className={ filter.indexOf('lover') > -1 ? 'itemfilter-ul-li-ul-li-link itemfilter-active' : 'itemfilter-ul-li-ul-li-link' }>恋人</Link></li>
                    <li className="itemfilter-ul-li-ul-li"><Link onClick={() => { this.onSearch('object', 'friend'); }} className={ filter.indexOf('friend') > -1 ? 'itemfilter-ul-li-ul-li-link itemfilter-active' : 'itemfilter-ul-li-ul-li-link' }>朋友</Link></li>
                    <li className="itemfilter-ul-li-ul-li"><Link onClick={() => { this.onSearch('object', 'parent'); }} className={ filter.indexOf('parent') > -1 ? 'itemfilter-ul-li-ul-li-link itemfilter-active' : 'itemfilter-ul-li-ul-li-link' }>父母</Link></li>
                    <li className="itemfilter-ul-li-ul-li"><Link onClick={() => { this.onSearch('object', 'leader'); }} className={ filter.indexOf('leader') > -1 ? 'itemfilter-ul-li-ul-li-link itemfilter-active' : 'itemfilter-ul-li-ul-li-link' }>领导</Link></li>
                    <li className="itemfilter-ul-li-ul-li"><Link onClick={() => { this.onSearch('object', 'teacher'); }} className={ filter.indexOf('teacher') > -1 ? 'itemfilter-ul-li-ul-li-link itemfilter-active' : 'itemfilter-ul-li-ul-li-link' }>老师</Link></li>
                    <li className="itemfilter-ul-li-ul-li"><Link onClick={() => { this.onSearch('object', 'customer'); }} className={ filter.indexOf('customer') > -1 ? 'itemfilter-ul-li-ul-li-link itemfilter-active' : 'itemfilter-ul-li-ul-li-link' }>客户</Link></li>
                    <li className="itemfilter-ul-li-ul-li"><Link onClick={() => { this.onSearch('object', 'elder'); }} className={ filter.indexOf('elder') > -1 ? 'itemfilter-ul-li-ul-li-link itemfilter-active' : 'itemfilter-ul-li-ul-li-link' }>长辈</Link></li>
                    <li className="itemfilter-ul-li-ul-li"><Link onClick={() => { this.onSearch('object', 'patient'); }} className={ filter.indexOf('patient') > -1 ? 'itemfilter-ul-li-ul-li-link itemfilter-active' : 'itemfilter-ul-li-ul-li-link' }>病人</Link></li>
                  </ul>
                </li>
                <li className="itemfilter-ul-li clearfix">
                  <span className="itemfilter-ul-li-span">节日：</span>
                  <ul className="itemfilter-ul-li-ul">
                    <li className="itemfilter-ul-li-ul-li"><Link onClick={() => { this.onSearch('holiday', 'chineseValentine'); }} className={ filter.indexOf('chineseValentine') > -1 ? 'itemfilter-ul-li-ul-li-link itemfilter-active' : 'itemfilter-ul-li-ul-li-link' }>七夕节</Link></li>
                    <li className="itemfilter-ul-li-ul-li"><Link onClick={() => { this.onSearch('holiday', 'valentine'); }} className={ filter.indexOf('valentine') > -1 ? 'itemfilter-ul-li-ul-li-link itemfilter-active' : 'itemfilter-ul-li-ul-li-link' }>情人节</Link></li>
                    <li className="itemfilter-ul-li-ul-li"><Link onClick={() => { this.onSearch('holiday', 'women'); }} className={ filter.indexOf('women') > -1 ? 'itemfilter-ul-li-ul-li-link itemfilter-active' : 'itemfilter-ul-li-ul-li-link' }>妇女节</Link></li>
                    <li className="itemfilter-ul-li-ul-li"><Link onClick={() => { this.onSearch('holiday', 'mother'); }} className={ filter.indexOf('mother') > -1 ? 'itemfilter-ul-li-ul-li-link itemfilter-active' : 'itemfilter-ul-li-ul-li-link' }>母亲节</Link></li>
                    <li className="itemfilter-ul-li-ul-li"><Link onClick={() => { this.onSearch('holiday', 'bachelor'); }} className={ filter.indexOf('bachelor') > -1 ? 'itemfilter-ul-li-ul-li-link itemfilter-active' : 'itemfilter-ul-li-ul-li-link' }>光棍节</Link></li>
                    <li className="itemfilter-ul-li-ul-li"><Link onClick={() => { this.onSearch('holiday', 'christmas'); }} className={ filter.indexOf('christmas') > -1 ? 'itemfilter-ul-li-ul-li-link itemfilter-active' : 'itemfilter-ul-li-ul-li-link' }>圣诞节</Link></li>
                    <li className="itemfilter-ul-li-ul-li"><Link onClick={() => { this.onSearch('holiday', 'midAutumnFestival'); }} className={ filter.indexOf('midAutumnFestival') > -1 ? 'itemfilter-ul-li-ul-li-link itemfilter-active' : 'itemfilter-ul-li-ul-li-link' }>中秋节</Link></li>
                    <li className="itemfilter-ul-li-ul-li"><Link onClick={() => { this.onSearch('holiday', 'thanksgiving'); }} className={ filter.indexOf('thanksgiving') > -1 ? 'itemfilter-ul-li-ul-li-link itemfilter-active' : 'itemfilter-ul-li-ul-li-link' }>感恩节</Link></li>
                    <li className="itemfilter-ul-li-ul-li"><Link onClick={() => { this.onSearch('holiday', 'father'); }} className={ filter.indexOf('father') > -1 ? 'itemfilter-ul-li-ul-li-link itemfilter-active' : 'itemfilter-ul-li-ul-li-link' }>父亲节</Link></li>
                    <li className="itemfilter-ul-li-ul-li"><Link onClick={() => { this.onSearch('holiday', 'teacher'); }} className={ filter.indexOf('teacher') > -1 ? 'itemfilter-ul-li-ul-li-link itemfilter-active' : 'itemfilter-ul-li-ul-li-link' }>教师节</Link></li>
                  </ul>
                </li>
                <li className="itemfilter-ul-li clearfix">
                  <span className="itemfilter-ul-li-span">枝数：</span>
                  <ul className="itemfilter-ul-li-ul">
                    <li className="itemfilter-ul-li-ul-li"><Link onClick={() => { this.onSearch('branch', '9'); }} className={ filter.indexOf('9') > -1 ? 'itemfilter-ul-li-ul-li-link itemfilter-active' : 'itemfilter-ul-li-ul-li-link' }>9枝</Link></li>
                    <li className="itemfilter-ul-li-ul-li"><Link onClick={() => { this.onSearch('branch', '11'); }} className={ filter.indexOf('11') > -1 ? 'itemfilter-ul-li-ul-li-link itemfilter-active' : 'itemfilter-ul-li-ul-li-link' }>11枝</Link></li>
                    <li className="itemfilter-ul-li-ul-li"><Link onClick={() => { this.onSearch('branch', '12'); }} className={ filter.indexOf('12') > -1 ? 'itemfilter-ul-li-ul-li-link itemfilter-active' : 'itemfilter-ul-li-ul-li-link' }>12枝</Link></li>
                    <li className="itemfilter-ul-li-ul-li"><Link onClick={() => { this.onSearch('branch', '13'); }} className={ filter.indexOf('13') > -1 ? 'itemfilter-ul-li-ul-li-link itemfilter-active' : 'itemfilter-ul-li-ul-li-link' }>13枝</Link></li>
                    <li className="itemfilter-ul-li-ul-li"><Link onClick={() => { this.onSearch('branch', '16'); }} className={ filter.indexOf('16') > -1 ? 'itemfilter-ul-li-ul-li-link itemfilter-active' : 'itemfilter-ul-li-ul-li-link' }>16枝</Link></li>
                    <li className="itemfilter-ul-li-ul-li"><Link onClick={() => { this.onSearch('branch', '19'); }} className={ filter.indexOf('19') > -1 ? 'itemfilter-ul-li-ul-li-link itemfilter-active' : 'itemfilter-ul-li-ul-li-link' }>19枝</Link></li>
                    <li className="itemfilter-ul-li-ul-li"><Link onClick={() => { this.onSearch('branch', '21'); }} className={ filter.indexOf('21') > -1 ? 'itemfilter-ul-li-ul-li-link itemfilter-active' : 'itemfilter-ul-li-ul-li-link' }>21枝</Link></li>
                    <li className="itemfilter-ul-li-ul-li"><Link onClick={() => { this.onSearch('branch', '29'); }} className={ filter.indexOf('29') > -1 ? 'itemfilter-ul-li-ul-li-link itemfilter-active' : 'itemfilter-ul-li-ul-li-link' }>29枝</Link></li>
                    <li className="itemfilter-ul-li-ul-li"><Link onClick={() => { this.onSearch('branch', '33'); }} className={ filter.indexOf('33') > -1 ? 'itemfilter-ul-li-ul-li-link itemfilter-active' : 'itemfilter-ul-li-ul-li-link' }>33枝</Link></li>
                    <li className="itemfilter-ul-li-ul-li"><Link onClick={() => { this.onSearch('branch', '36'); }} className={ filter.indexOf('36') > -1 ? 'itemfilter-ul-li-ul-li-link itemfilter-active' : 'itemfilter-ul-li-ul-li-link' }>36枝</Link></li>
                    <li className="itemfilter-ul-li-ul-li"><Link onClick={() => { this.onSearch('branch', '66'); }} className={ filter.indexOf('66') > -1 ? 'itemfilter-ul-li-ul-li-link itemfilter-active' : 'itemfilter-ul-li-ul-li-link' }>66枝</Link></li>
                    <li className="itemfilter-ul-li-ul-li"><Link onClick={() => { this.onSearch('branch', '99'); }} className={ filter.indexOf('99') > -1 ? 'itemfilter-ul-li-ul-li-link itemfilter-active' : 'itemfilter-ul-li-ul-li-link' }>99枝</Link></li>
                    <li className="itemfilter-ul-li-ul-li"><Link onClick={() => { this.onSearch('branch', '99+'); }} className={ filter.indexOf('99+') > -1 ? 'itemfilter-ul-li-ul-li-link itemfilter-active' : 'itemfilter-ul-li-ul-li-link' }>99以上</Link></li>
                  </ul>
                </li>
                <li className="itemfilter-ul-li clearfix">
                  <span className="itemfilter-ul-li-span">类型：</span>
                  <ul className="itemfilter-ul-li-ul">
                    <li className="itemfilter-ul-li-ul-li"><Link onClick={() => { this.onSearch('kind', 'hand'); }} className={ filter.indexOf('hand') > -1 ? 'itemfilter-ul-li-ul-li-link itemfilter-active' : 'itemfilter-ul-li-ul-li-link' }>手捧花</Link></li>
                    <li className="itemfilter-ul-li-ul-li"><Link onClick={() => { this.onSearch('kind', 'gift'); }} className={ filter.indexOf('gift') > -1 ? 'itemfilter-ul-li-ul-li-link itemfilter-active' : 'itemfilter-ul-li-ul-li-link' }>礼盒鲜花</Link></li>
                    <li className="itemfilter-ul-li-ul-li"><Link onClick={() => { this.onSearch('kind', 'tree'); }} className={ filter.indexOf('tree') > -1 ? 'itemfilter-ul-li-ul-li-link itemfilter-active' : 'itemfilter-ul-li-ul-li-link' }>绿植发财树</Link></li>
                    <li className="itemfilter-ul-li-ul-li"><Link onClick={() => { this.onSearch('kind', 'basket'); }} className={ filter.indexOf('basket') > -1 ? 'itemfilter-ul-li-ul-li-link itemfilter-active' : 'itemfilter-ul-li-ul-li-link' }>开业花篮</Link></li>
                    <li className="itemfilter-ul-li-ul-li"><Link onClick={() => { this.onSearch('kind', 'chocolate'); }} className={ filter.indexOf('chocolate') > -1 ? 'itemfilter-ul-li-ul-li-link itemfilter-active' : 'itemfilter-ul-li-ul-li-link' }>巧克力花束</Link></li>
                    <li className="itemfilter-ul-li-ul-li"><Link onClick={() => { this.onSearch('kind', 'table'); }} className={ filter.indexOf('table') > -1 ? 'itemfilter-ul-li-ul-li-link itemfilter-active' : 'itemfilter-ul-li-ul-li-link' }>桌花</Link></li>
                    <li className="itemfilter-ul-li-ul-li"><Link onClick={() => { this.onSearch('kind', 'cartoon'); }} className={ filter.indexOf('cartoon') > -1 ? 'itemfilter-ul-li-ul-li-link itemfilter-active' : 'itemfilter-ul-li-ul-li-link' }>卡通花束</Link></li>
                    <li className="itemfilter-ul-li-ul-li"><Link onClick={() => { this.onSearch('kind', 'combination'); }} className={ filter.indexOf('combination') > -1 ? 'itemfilter-ul-li-ul-li-link itemfilter-active' : 'itemfilter-ul-li-ul-li-link' }>组合鲜花</Link></li>
                    <li className="itemfilter-ul-li-ul-li"><Link onClick={() => { this.onSearch('kind', 'korean'); }} className={ filter.indexOf('korean') > -1 ? 'itemfilter-ul-li-ul-li-link itemfilter-active' : 'itemfilter-ul-li-ul-li-link' }>韩式鲜花</Link></li>
                    <li className="itemfilter-ul-li-ul-li"><Link onClick={() => { this.onSearch('kind', 'fruit'); }} className={ filter.indexOf('fruit') > -1 ? 'itemfilter-ul-li-ul-li-link itemfilter-active' : 'itemfilter-ul-li-ul-li-link' }>果篮</Link></li>
                  </ul>
                </li>
                <li className="itemfilter-ul-li clearfix">
                  <span className="itemfilter-ul-li-span">颜色：</span>
                  <ul className="itemfilter-ul-li-ul">
                    <li className="itemfilter-ul-li-ul-li"><Link onClick={() => { this.onSearch('color', 'red'); }} className={ filter.indexOf('red') > -1 ? 'itemfilter-ul-li-ul-li-link itemfilter-active' : 'itemfilter-ul-li-ul-li-link' }>红色</Link></li>
                    <li className="itemfilter-ul-li-ul-li"><Link onClick={() => { this.onSearch('color', 'pink'); }} className={ filter.indexOf('pink') > -1 ? 'itemfilter-ul-li-ul-li-link itemfilter-active' : 'itemfilter-ul-li-ul-li-link' }>粉色</Link></li>
                    <li className="itemfilter-ul-li-ul-li"><Link onClick={() => { this.onSearch('color', 'purple'); }} className={ filter.indexOf('purple') > -1 ? 'itemfilter-ul-li-ul-li-link itemfilter-active' : 'itemfilter-ul-li-ul-li-link' }>紫色</Link></li>
                    <li className="itemfilter-ul-li-ul-li"><Link onClick={() => { this.onSearch('color', 'yellow'); }} className={ filter.indexOf('yellow') > -1 ? 'itemfilter-ul-li-ul-li-link itemfilter-active' : 'itemfilter-ul-li-ul-li-link' }>黄色</Link></li>
                    <li className="itemfilter-ul-li-ul-li"><Link onClick={() => { this.onSearch('color', 'white'); }} className={ filter.indexOf('white') > -1 ? 'itemfilter-ul-li-ul-li-link itemfilter-active' : 'itemfilter-ul-li-ul-li-link' }>白色</Link></li>
                    <li className="itemfilter-ul-li-ul-li"><Link onClick={() => { this.onSearch('color', 'blue'); }} className={ filter.indexOf('blue') > -1 ? 'itemfilter-ul-li-ul-li-link itemfilter-active' : 'itemfilter-ul-li-ul-li-link' }>蓝色</Link></li>
                    <li className="itemfilter-ul-li-ul-li"><Link onClick={() => { this.onSearch('color', 'champagne'); }} className={ filter.indexOf('champagne') > -1 ? 'itemfilter-ul-li-ul-li-link itemfilter-active' : 'itemfilter-ul-li-ul-li-link' }>香槟色</Link></li>
                    <li className="itemfilter-ul-li-ul-li"><Link onClick={() => { this.onSearch('color', 'colorful'); }} className={ filter.indexOf('colorful') > -1 ? 'itemfilter-ul-li-ul-li-link itemfilter-active' : 'itemfilter-ul-li-ul-li-link' }>七彩</Link></li>
                    <li className="itemfilter-ul-li-ul-li"><Link onClick={() => { this.onSearch('color', 'mixed'); }} className={ filter.indexOf('mixed') > -1 ? 'itemfilter-ul-li-ul-li-link itemfilter-active' : 'itemfilter-ul-li-ul-li-link' }>混色</Link></li>
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
