/**
 * 鲜花销售个人中心页主要内容
 * Created by tianrenjie on 2018/5/6
 */
import React, { PropTypes } from 'react';
import { Row, Col, Tabs, Avatar, DatePicker, Table } from 'antd';
import { If } from 'jsx-control-statements';
import { Link } from 'react-router';
import img from '../../../../static/img/itemList/1.jpg';
import './UserContent.less';

const TabPane = Tabs.TabPane;
class UserContent extends React.Component {
  static propTypes = {};
  state = {
    activeKey: 'basic',
  };
  handleTabChange = (value) => {
    this.setState({
      activeKey: value,
    });
  };
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
    }, {
      title: '交易状态',
      dataIndex: 'status',
      key: 'status',
    }, {
      title: '操作',
      key: 'action',
      render: (text, record) => {
        return (
          <div className="usercontent-pannel-order-table-action">
            <button className="usercontent-pannel-order-table-action-btn">取消订单</button>
          </div>
        );
      },
    }];
    const data = [{
      key: '1',
      url: img,
      name: '思念是一种病',
      price: '169.00',
      count: 1,
      status: '待付款',
    }];
    return (
      <div className="usercontent">
        <Row className="usercontent-row">
          <Col span={4} className="usercontent-slider">
            <div className="usercontent-info">
              <h3 className="usercontent-info-h3">我的商城</h3>
              <div className="usercontent-info-avatar">
                <Row>
                  <Col>
                    <span className="usercontent-info-avatar-icon">
                      <Avatar size="large" icon="user" />
                    </span>
                  </Col>
                </Row>
              </div>
              <div className="usercontent-info-name">
                <span className="usercontent-info-name-span">H20180507121612</span>
              </div>
            </div>
            <div className="usercontent-tabs">
              <Tabs tabPosition={'left'} onChange={this.handleTabChange}>
                <TabPane tab="基本信息" key="basic" />
                <TabPane tab="订单列表" key="order" />
              </Tabs>
            </div>
          </Col>
          <Col span={20}>
            <div className="usercontent-pannel">
              <If condition={ this.state.activeKey === 'basic' }>
                <div className="usercontent-pannel-basic">
                  <Row>
                    <Col>
                      <h3 className="usercontent-pannel-basic-h3">基本信息</h3>
                      <div className="usercontent-pannel-basic-split" />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <form>
                        <div className="usercontent-pannel-basic-form">
                          <div className="form-content">
                            <div className="form-item">
                              <label className="form-item-label" htmlFor="name">用户名称：</label>
                              <input className="form-item-input" value="test" readOnly="true" type="text" id="name" name="name" />
                            </div>
                            <div className="form-item">
                              <label className="form-item-label" htmlFor="email">邮箱：</label>
                              <input className="form-item-input" type="text" id="email" name="email" />
                            </div>
                            <div className="form-item">
                              <label className="form-item-label" htmlFor="realName">真实姓名：</label>
                              <input className="form-item-input" type="text" id="realName" name="realName" />
                            </div>
                            <div className="form-item">
                              <label className="form-item-label" htmlFor="sex">性别：</label>
                              <label htmlFor="male" className="form-item-radio-label">
                                <input id="male" type="radio" name="sex" value="male" className="form-item-radio-input" />男
                              </label>
                              <label htmlFor="female" className="form-item-radio-label">
                                <input id="female" type="radio" name="sex" value="female" className="form-item-radio-input" />女
                              </label>
                            </div>
                            <div className="form-item">
                              <label className="form-item-label" htmlFor="birthday">生日：</label>
                              <DatePicker
                                id="birthday"
                                showTime
                                format="YYYY-MM-DD HH:mm:ss"
                                placeholder=""
                                onChange={(value, dateString) => {}}
                                onOk={(value) => {}}
                              />
                            </div>
                            <div className="form-item">
                              <label className="form-item-label" htmlFor="address">所在地区：</label>
                              <input className="form-item-input address" type="text" id="address" name="address" />
                            </div>
                            <div className="form-item">
                              <label className="form-item-label" htmlFor="qq">QQ：</label>
                              <input className="form-item-input" type="text" id="qq" name="qq" />
                            </div>
                          </div>
                          <div className="usercontent-pannel-basic-form-btn">
                            <button className="usercontent-pannel-basic-form-btn-update" type="button">保存修改</button>
                          </div>
                        </div>
                      </form>
                    </Col>
                  </Row>
                </div>
              </If>
              <If condition={ this.state.activeKey === 'order' }>
                <div className="usercontent-pannel-order">
                  <Row>
                    <Col>
                      <h3 className="usercontent-pannel-order-h3">订单列表</h3>
                      <div className="usercontent-pannel-order-split" />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <div className="usercontent-pannel-order-table">
                        <Table
                          columns={columns}
                          dataSource={data}
                        />
                      </div>
                    </Col>
                  </Row>
                </div>
              </If>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default UserContent;
