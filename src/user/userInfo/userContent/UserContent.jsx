/**
 * 鲜花销售个人中心页主要内容
 * Created by tianrenjie on 2018/5/6
 */
import React, { PropTypes } from 'react';
import { Row, Col, Tabs, Avatar, DatePicker, Table, Form, Radio, Modal, Select, Input, Button } from 'antd';
import moment from 'moment';
import $ from 'jquery';
import _ from 'lodash';
import { If } from 'jsx-control-statements';
import { Link } from 'react-router';
import img from '../../../../static/img/itemList/1.jpg';
import './UserContent.less';

const TabPane = Tabs.TabPane;
const FormItem = Form.Item;
const Option = Select.Option;
const confirm = Modal.confirm;
const RadioGroup = Radio.Group;
const RangePicker = DatePicker.RangePicker;

class UserContent extends React.Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,
    updateUser: PropTypes.func.isRequired,
    deleteOrder: PropTypes.func.isRequired,
    getAllOrders: PropTypes.func.isRequired,
    orderList: PropTypes.object.isRequired,
  };
  state = {
    activeKey: 'basic',
    date: undefined,
  };
  componentDidMount() {
    $('.usercontent-pannel-basic').show();
    $('.usercontent-pannel-order').hide();
  }
  componentWillReceiveProps(nextProps) {
    if (!_.isUndefined(this.props.orderList.data) && !_.isEqual(this.props.orderList.data, nextProps.orderList.data)) {
      $('.usercontent-pannel-basic').hide();
      $('.usercontent-pannel-order').show();
    }
    if (!_.isUndefined(this.props.user.birthday)) {
      this.setState({
        date: moment(parseInt(this.props.user.birthday)),
      });
    }
  }
  handleUpdate = () => {
    let params = {};
    $('#userform').serializeArray().map((item, index) => {
      params[item.name] = item.value;
      return true;
    });
    params = { ...params, birthday: moment(this.state.date).format('YYYY-MM-DD HH:mm:ss') };
    this.props.updateUser({ ...params });
  };
  handleOrderDelete = (order) => {
    this.props.deleteOrder({ ...order });
  };
  handleDateChange = (value) => {
    this.setState({
      date: value,
    });
  };
  handleTabChange = (value) => {
    this.setState({
      activeKey: value,
    });
    this.state.activeKey = value;
    if (value === 'basic') {
      $('.usercontent-pannel-basic').show();
      $('.usercontent-pannel-order').hide();
    } else {
      $('.usercontent-pannel-basic').hide();
      $('.usercontent-pannel-order').show();
    }
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        let formatValues = {};
        const formatValues2 = {};
        _.mapKeys(values, (value, key) => {
          if (!_.isEmpty(value)) {
            formatValues2[key] = value;
          }
        });
        if (!_.isEmpty(values.timestamp)) {
          formatValues = {
            $and: [
              {
                timestamp: {
                  $gt: moment(values.timestamp[0]).valueOf(),
                },
              },
              {
                timestamp: {
                  $lt: moment(values.timestamp[1]).valueOf(),
                },
              },
            ],
          };
          // eslint-disable-next-line
          delete values.timestamp;
          formatValues.$and = [...formatValues.$and, ...formatValues2];
        } else {
          formatValues = { ...formatValues2 };
        }
        console.log(formatValues);
        this.props.getAllOrders({ ...formatValues });
      }
    });
  };
  render() {
    const { user, orderList } = this.props;
    const { getFieldDecorator } = this.props.form;
    $('#username').val(user.username);
    $('#email').val(user.email);
    $('#name').val(user.name);
    if (user.sex === 'male') {
      $('#male').prop('checked', true);
    } else {
      $('#female').prop('checked', true);
    }
    $('#address').val(user.address);
    $('#qq').val(user.qq);
    const itemColumns = [{
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
        return `￥${parseFloat((text).split('￥')[1]).toFixed(2)}`;
      },
    }];
    const columns = [{
      title: '订单id',
      dataIndex: '_id',
      key: '_id',
    }, {
      title: '商品',
      dataIndex: 'item',
      key: 'item',
      render: (text, record) => {
        return (
          <div className="shoppinglist-table-item clearfix">
            <Table
              columns={itemColumns}
              dataSource={record.itemList || []}
              showHeader={true}
              pagination={false}
            />
          </div>
        );
      },
    }, {
      title: '交易状态',
      dataIndex: 'status',
      key: 'status',
      render: (text, record) => {
        switch (text) {
          case 0:
            return '待付款';
          case 1:
            return '已付款';
          case 2:
            return '待发货';
          case 3:
            return '待收货';
          case 4:
            return '已收货';
          default:
            return '未知状态';
        }
      },
    }, {
      title: '订单时间',
      dataIndex: 'timestamp',
      key: 'timestamp',
      render: (text, record) => {
        return !_.isUndefined(text) && moment(parseInt(text)).format('YYYY-MM-DD HH:mm:ss');
      },
    }, {
      title: '操作',
      key: 'action',
      render: (text, record) => {
        return (
          <div className="usercontent-pannel-order-table-action">
            <button onClick={() => { this.handleOrderDelete(record); }} className="usercontent-pannel-order-table-action-btn">删除订单</button>
          </div>
        );
      },
    }];
    const formItemLayout = {
      labelCol: {
        sm: { span: 8 },
      },
      wrapperCol: {
        sm: { span: 16 },
      },
    };
    const modalFormLayout = {
      labelCol: {
        sm: { span: 7 },
      },
      wrapperCol: {
        sm: { span: 10 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 7,
        },
      },
    };
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
                <span className="usercontent-info-name-span">{user.username}</span>
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
              <div className="usercontent-pannel-basic">
                <Row>
                  <Col>
                    <h3 className="usercontent-pannel-basic-h3">基本信息</h3>
                    <div className="usercontent-pannel-basic-split" />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <form id="userform">
                      <div className="usercontent-pannel-basic-form">
                        <div className="form-content">
                          <div className="form-item">
                            <label className="form-item-label" htmlFor="username">用户名称：</label>
                            <input className="form-item-input" readOnly="true" type="text" id="username" name="username" />
                          </div>
                          <div className="form-item">
                            <label className="form-item-label" htmlFor="email">邮箱：</label>
                            <input className="form-item-input" type="text" id="email" name="email" />
                          </div>
                          <div className="form-item">
                            <label className="form-item-label" htmlFor="name">真实姓名：</label>
                            <input className="form-item-input" type="text" id="name" name="name" />
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
                              value={this.state.date}
                              onChange={this.handleDateChange}
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
                          <button onClick={this.handleUpdate} className="usercontent-pannel-basic-form-btn-update" type="button">保存修改</button>
                        </div>
                      </div>
                    </form>
                  </Col>
                </Row>
              </div>
              <div className="usercontent-pannel-order">
                <Row>
                  <Col>
                    <h3 className="usercontent-pannel-order-h3">订单列表</h3>
                    <div className="usercontent-pannel-order-split" />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className="form-search-fields">
                      <Form onSubmit={this.handleSubmit} layout="inline">
                        <Row className="form-search-fields-row">
                          <Col span={8}>
                            <FormItem
                              label="订单id"
                              {...formItemLayout}
                            >
                              {getFieldDecorator('_id', {
                              })(
                                <Input placeholder="输入订单id" />
                              )}
                            </FormItem>
                          </Col>
                          <Col span={16}>
                            <FormItem
                              {...formItemLayout}
                              label="最后修改时间"
                            >
                              {getFieldDecorator('timestamp', {
                              })(
                                <RangePicker
                                  showTime
                                  format="YYYY-MM-DD HH:mm:ss"
                                />
                              )}
                            </FormItem>
                          </Col>
                        </Row>
                        <Row>
                          <Col span={8} offset={16}>
                            <FormItem className="form-search-fields-search">
                              <Button className="form-search-fields-search-btn" htmlType="submit" type="primary" icon="search">搜索</Button>
                            </FormItem>
                          </Col>
                        </Row>
                      </Form>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className="usercontent-pannel-order-table">
                      <Table
                        columns={columns}
                        dataSource={orderList.data || []}
                        pagination={{
                          defaultCurrent: 1,
                          pageSize: 3,
                        }}
                      />
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Form.create()(UserContent);
