/**
 * 鲜花销售订单核对页表单
 * Created by tianrenjie on 2018/5/6
 */
import React, { PropTypes } from 'react';
import { Row, Col, DatePicker, Table } from 'antd';
import { Link } from 'react-router';
import img from '../../../../static/img/itemList/1.jpg';
import './CheckForm.less';

class CheckForm extends React.Component {
  static propTypes = {};
  render() {
    const columns = [{
      title: '商品',
      dataIndex: 'item',
      key: 'item',
      render: (text, record) => {
        return (
          <div className="shoppinglist-table-item clearfix">
            <img src={record.url} alt="花之韵" className="shoppinglist-table-item-img" />
            <Link to="" className="shoppinglist-table-item-link">{record.name}</Link>
          </div>
        );
      },
    }, {
      title: '单价(元)',
      dataIndex: 'price',
      key: 'price',
    }, {
      title: '数量',
      dataIndex: 'count',
      key: 'count',
    }, {
      title: '小计(元)',
      dataIndex: 'singleTotal',
      key: 'singleTotal',
    }];
    const data = [{
      key: '1',
      url: img,
      name: '思念是一种病',
      price: '169.00',
      count: 1,
    }];
    return (
      <div className="checkform">
        <form>
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
                    onChange={(value, dateString) => {}}
                    onOk={(value) => {}}
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
                    dataSource={data}
                    pagination={false}
                  />
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="checkform-check">
                <p>总商品金额： <span>179.00元</span></p>
                <hr />
                <p>应付总额： <span>179.00</span></p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="checkform-pay">
                <ul className="checkform-pay-ul">
                  <li className="checkform-pay-ul-li">
                    <button className="checkform-pay-ul-li-btn">网银在线</button>
                  </li>
                  <li className="checkform-pay-ul-li">
                    <button className="checkform-pay-ul-li-btn">微信支付</button>
                  </li>
                  <li className="checkform-pay-ul-li">
                    <button className="checkform-pay-ul-li-btn">支付宝支付</button>
                  </li>
                  <li className="checkform-pay-ul-li">
                    <button className="checkform-pay-ul-li-btn">货到付款</button>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
          <Row>
            <Col></Col>
          </Row>
        </form>
      </div>
    );
  }
}

export default CheckForm;
