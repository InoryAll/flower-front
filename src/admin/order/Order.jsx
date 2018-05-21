/**
 * 鲜花销售系统用户管理页
 * Created by tianrenjie on 2018/5/17
 */
import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Row, Col, Card, Form, Input, Button, Table } from 'antd';
import { connect } from 'react-redux';
import _ from 'lodash';
import moment from 'moment';
import { getAllOrders } from '../../user/userInfo/action/action';
import { orderListSelector } from '../../user/userInfo/selector/selector';
import { onViewInit } from './action/action';
import './Order.less';

const FormItem = Form.Item;
class Order extends React.Component {
  static propTypes = {
    form: PropTypes.object.isRequired,
    orderList: PropTypes.object.isRequired,
    getAllOrders: PropTypes.func.isRequired,
    onViewInit: PropTypes.func.isRequired,
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };
  componentWillMount() {
    this.props.onViewInit();
    this.props.getAllOrders();
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const { orderList } = this.props;
    let orderData = [];
    if (!_.isEmpty(orderList) && !_.isEmpty(orderList.data)) {
      orderData = orderList.data;
    }
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
      title: '产品列表',
      dataIndex: 'itemList',
      key: 'itemList',
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
      title: '收货地址',
      dataIndex: 'address',
      key: 'address',
    }, {
      title: '用户姓名',
      dataIndex: 'sendName',
      key: 'sendName',
    }, {
      title: '用户电话',
      dataIndex: 'sendPhone',
      key: 'sendPhone',
    }, {
      title: '收货时间',
      dataIndex: 'date',
      key: 'date',
    }, {
      title: '总价',
      dataIndex: 'totalPrice',
      key: 'totalPrice',
      render: (text, record) => {
        return `￥${parseFloat(text).toFixed(2)}`;
      },
    }, {
      title: '最后修改时间',
      dataIndex: 'timestamp',
      key: 'timestamp',
      render: (text, record) => {
        return !_.isUndefined(text) && moment(parseInt(text)).format('YYYY-MM-DD HH:mm:ss');
      },
    }, {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      render: (text, record) => {
        switch (text) {
          case 1:
            return '已付款';
          default:
            return '未知状态';
        }
      },
    }, {
      title: '操作',
      key: 'action',
      render: (text, record) => (
        <span>
          <div className="btn-area">
            <Button type="default" onClick={() => { this.handleSearch(record); }}>查看</Button>
          </div>
          <div className="btn-area">
            <Button type="primary" onClick={() => { this.handleUpdate(record); }}>修改</Button>
          </div>
          <div className="btn-area">
            <Button type="danger" onClick={() => { this.handleDelete(record); }}>删除</Button>
          </div>
        </span>
      ),
    }];
    const formItemLayout = {
      labelCol: {
        sm: { span: 8 },
      },
      wrapperCol: {
        sm: { span: 16 },
      },
    };
    return (
      <div className="console-order">
        <Card className="console-order-card" title="订单管理">
          <Row>
            <Col>
              <div className="form-search-fields">
                <Form onSubmit={this.handleSubmit} layout="inline">
                  <Row className="form-search-fields-row">
                    <Col span={8}>
                      <FormItem
                        label="寄件人"
                        {...formItemLayout}
                      >
                        {getFieldDecorator('sendName', {
                        })(
                          <Input placeholder="输入寄件人" />
                        )}
                      </FormItem>
                    </Col>
                    <Col span={8}>
                      <FormItem
                        label="收件人"
                        {...formItemLayout}
                      >
                        {getFieldDecorator('receiveName', {
                        })(
                          <Input placeholder="输入收件人" />
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
              <div className="action-fields" />
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="table-fields">
                <Table
                  columns={columns}
                  dataSource={orderData}
                />
              </div>
            </Col>
          </Row>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    orderList: orderListSelector(state),
  };
};

const mapDispatchToProps = {
  onViewInit,
  getAllOrders,
};

const OrderForm = Form.create()(Order);
export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);
