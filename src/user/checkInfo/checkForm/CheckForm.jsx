/**
 * 鲜花销售订单核对页表单
 * Created by tianrenjie on 2018/5/6
 */
import React, { PropTypes } from 'react';
import { Row, Col, DatePicker, Table, message } from 'antd';
import _ from 'lodash';
import moment from 'moment';
import { Link, browserHistory } from 'react-router';
import $ from 'jquery';
import Cookie from '../../../common/cookie';
import img from '../../../../static/img/itemList/1.jpg';
import './CheckForm.less';

class CheckForm extends React.Component {
  static propTypes = {
    cart: PropTypes.object.isRequired,
    order: PropTypes.object.isRequired,
    selectCarts: PropTypes.object.isRequired,
    addOrder: PropTypes.func.isRequired,
  };
  state = {
    payWay: 'default',
    date: undefined,
  };
  handleWayChange = (value) => {
    this.setState({
      payWay: value,
    });
  };
  handleOrderAdd = () => {
    let params = {};
    let totalPrice = 0;
    if (!_.isEmpty(this.props.selectCarts)) {
      this.props.selectCarts.map((item, index) => {
        totalPrice += parseFloat(item.itemTotalPrice.split('￥')[1]);
        return true;
      });
    }
    $('#checkform').serializeArray().map((item, index) => {
      params[item.name] = item.value;
      return true;
    });
    params = { ...params,
      date: moment(this.state.date).format('YYYY-MM-DD HH:mm:ss'),
      payWay: this.state.payWay,
      itemList: this.props.selectCarts ? this.props.selectCarts : [],
      status: 0,
      totalPrice,
      timestamp: new Date().getTime(),
      userId: Cookie.getCookie('_id'),
      userName: Cookie.getCookie('username'),
    };
    const errors = [];
    if (_.isEmpty(params.receiveName)) {
      errors.push('收件人不能为空！');
    } else if (!/^1[0-9]{10}$/.test(params.receivePhone)) {
      errors.push('收件人电话格式不正确！');
    } else if (_.isEmpty(params.address)) {
      errors.push('配送地址不能为空！');
    } else if (_.isEmpty(params.sendName)) {
      errors.push('发件人不能为空！');
    } else if (!/^1[0-9]{10}$/.test(params.sendPhone)) {
      errors.push('发件人电话格式不正确！');
    } else if (_.isEmpty(params.date)) {
      errors.push('送货日期不能为空！');
    } else if (_.isEmpty(params.itemList)) {
      errors.push('订单中没有商品！');
    }
    if (errors.length > 0) {
      message.error(errors.join(','));
    } else {
      this.props.addOrder(params);
    }
  };
  render() {
    const { payWay } = this.state;
    const { selectCarts } = this.props;
    let totalPrice = 0;
    if (!_.isEmpty(selectCarts)) {
      selectCarts.map((item, index) => {
        totalPrice += parseFloat(item.itemTotalPrice.split('￥')[1]);
        return true;
      });
    }
    const columns = [{
      title: '商品',
      dataIndex: 'item',
      key: 'item',
      render: (text, record) => {
        return (
          <div className="shoppinglist-table-item clearfix">
            <img src={record.url} alt="花之韵" className="shoppinglist-table-item-img" />
            <Link to="" className="shoppinglist-table-item-link">{record.itemName}</Link>
          </div>
        );
      },
    }, {
      title: '单价(元)',
      dataIndex: 'itemPrice',
      key: 'itemPrice',
    }, {
      title: '数量',
      dataIndex: 'count',
      key: 'count',
    }, {
      title: '小计(元)',
      dataIndex: 'itemTotalPrice',
      key: 'itemTotalPrice',
      render: (text, record) => {
        return `￥${parseFloat(text.split('￥')[1]).toFixed(2)}`;
      },
    }];
    return (
      <div className="checkform">
        <form id="checkform">
          <Row>
            <Col>
              <div className="checkform-receive-info">
                <h3 className="checkform-receive-info-title">收货信息：</h3>
                <div className="checkform-receive-info-content">
                  <div className="form-item">
                    <label className="form-item-label" htmlFor="receiveName">收花人姓名：</label>
                    <input className="form-item-input" type="text" name="receiveName" id="receiveName" />
                  </div>
                  <div className="form-item">
                    <label className="form-item-label" htmlFor="receivePhone">收花人手机：</label>
                    <input className="form-item-input" type="text" name="receivePhone" id="receivePhone" />
                  </div>
                  <div className="form-item">
                    <label className="form-item-label" htmlFor="address">配送地址：</label>
                    <input className="form-item-input address" type="text" name="address" id="address" placeholder="请填写详细地址" />
                  </div>
                  <div className="form-item">
                    <label className="form-item-label" htmlFor="sendName">订花人姓名：</label>
                    <input className="form-item-input" type="text" name="sendName" id="sendName" />
                  </div>
                  <div className="form-item">
                    <label className="form-item-label" htmlFor="sendPhone">订花人手机：</label>
                    <input className="form-item-input" type="text" name="sendPhone" id="sendPhone" />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="checkform-receive-time">
                <h3 className="checkform-receive-time-title">收货信息：</h3>
                <div className="form-item">
                  <label className="form-item-label" htmlFor="date">送货日期：</label>
                  <DatePicker
                    id="date"
                    showTime
                    format="YYYY-MM-DD HH:mm:ss"
                    placeholder="选择送货日期"
                    onChange={(value, dateString) => {
                      this.setState({
                        date: value,
                      });
                    }}
                  />
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="checkform-list">
                <h3 className="checkform-list-title">商品清单</h3>
                <div className="checkform-list-table">
                  <Table
                    columns={columns}
                    dataSource={selectCarts || []}
                    pagination={false}
                  />
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="checkform-check">
                <p className="checkform-check-total">总商品金额： <span className="checkform-check-total-span">{totalPrice.toFixed(2)}元</span></p>
                <hr />
                <p className="checkform-check-pay">应付总额： <span className="checkform-check-pay-span">{totalPrice.toFixed(2)} </span></p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="checkform-pay">
                <ul className="checkform-pay-ul clearfix">
                  <li className="checkform-pay-ul-li">
                    <button type="button" className={ payWay === 'bank' ? 'checkform-pay-ul-li-btn active' : 'checkform-pay-ul-li-btn' } onClick={ () => { this.handleWayChange('bank'); } }>网银在线</button>
                  </li>
                  <li className="checkform-pay-ul-li">
                    <button type="button" className={ payWay === 'wechat' ? 'checkform-pay-ul-li-btn active' : 'checkform-pay-ul-li-btn' } onClick={ () => { this.handleWayChange('wechat'); } }>微信支付</button>
                  </li>
                  <li className="checkform-pay-ul-li">
                    <button type="button" className={ payWay === 'alipay' ? 'checkform-pay-ul-li-btn active' : 'checkform-pay-ul-li-btn' } onClick={ () => { this.handleWayChange('alipay'); } }>支付宝支付</button>
                  </li>
                  <li className="checkform-pay-ul-li">
                    <button type="button" className={ payWay === 'default' ? 'checkform-pay-ul-li-btn active' : 'checkform-pay-ul-li-btn' } onClick={ () => { this.handleWayChange('default'); } }>货到付款</button>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="checkform-submit clearfix">
                <button type="button" className="checkform-submit-btn" onClick={this.handleOrderAdd}>提交订单</button>
              </div>
            </Col>
          </Row>
        </form>
      </div>
    );
  }
}

export default CheckForm;
