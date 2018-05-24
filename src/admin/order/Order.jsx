/**
 * 鲜花销售系统用户管理页
 * Created by tianrenjie on 2018/5/17
 */
import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Row, Col, Card, InputNumber, Form, Input, Button, Table, Select, DatePicker, Modal } from 'antd';
import { connect } from 'react-redux';
import _ from 'lodash';
import moment from 'moment';
import Settings from '../../common/setting';
import { getAllOrders } from '../../user/userInfo/action/action';
import { orderListSelector } from '../../user/userInfo/selector/selector';
import { onViewInit, updateConsoleOrder } from './action/action';
import './Order.less';

const FormItem = Form.Item;
const Option = Select.Option;
const RangePicker = DatePicker.RangePicker;
const confirm = Modal.confirm;

const ModalForm = Form.create()((props) => {
  Settings.initSettings();
  const { type, order } = props;
  const { getFieldDecorator, resetFields } = props.form;
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
      sm: { span: 6 },
    },
    wrapperCol: {
      sm: { span: 13 },
    },
  };
  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 6,
      },
    },
  };
  const handleModalSubmit = (e) => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        switch (type) {
          case 'update':
            const orderObj = {
              _id: order._id,
              receiveName: values['modal-receiveName'],
              receivePhone: values['modal-receivePhone'],
              address: values['modal-address'],
              sendName: values['modal-sendName'],
              sendPhone: values['modal-sendPhone'],
              payWay: values['modal-payWay'],
              date: values['modal-date'],
              totalPrice: values['modal-totalPrice'],
              status: values['modal-status'],
            };
            props.updateConsoleOrder(orderObj);
            resetFields();
            props.onVisibleChange(false);
            break;
          default:
            resetFields();
            props.onVisibleChange(false);
        }
      }
    });
  };
  const removeItem = (file) => {
  };
  return (
    <Form className="modal-form" onSubmit={handleModalSubmit}>
      <FormItem
        label="订单id"
        {...modalFormLayout}
        hasFeedback
      >
        {getFieldDecorator('modal-id', {
          rules: [{ required: true, message: '订单id不能为空!' }],
          initialValue: order && order._id,
        })(
          <Input disabled={true} placeholder="输入订单id" />
        )}
      </FormItem>
      <FormItem
        label="收件人姓名"
        {...modalFormLayout}
        hasFeedback
      >
        {getFieldDecorator('modal-receiveName', {
          rules: [{ required: true, message: '收件人姓名不能为空!' }],
          initialValue: order && order.receiveName,
        })(
          <Input placeholder="输入收件人姓名" />
        )}
      </FormItem>
      <FormItem
        label="收件人电话"
        {...modalFormLayout}
        hasFeedback
      >
        {getFieldDecorator('modal-receivePhone', {
          rules: [{ required: true, message: '收件人电话不能为空!' }],
          initialValue: order && order.receivePhone,
        })(
          <Input placeholder="输入收件人电话" />
        )}
      </FormItem>
      <FormItem
        label="收件地址"
        {...modalFormLayout}
        hasFeedback
      >
        {getFieldDecorator('modal-address', {
          rules: [{ required: true, message: '收件地址不能为空!' }],
          initialValue: order && order.address,
        })(
          <Input placeholder="输入收件地址" />
        )}
      </FormItem>
      <FormItem
        label="发件人姓名"
        {...modalFormLayout}
        hasFeedback
      >
        {getFieldDecorator('modal-sendName', {
          rules: [{ required: true, message: '发件人姓名不能为空!' }],
          initialValue: order && order.sendName,
        })(
          <Input placeholder="输入发件人姓名" />
        )}
      </FormItem>
      <FormItem
        label="发件人电话"
        {...modalFormLayout}
        hasFeedback
      >
        {getFieldDecorator('modal-sendPhone', {
          rules: [{ required: true, message: '发件人电话!' }],
          initialValue: order && order.sendPhone,
        })(
          <Input placeholder="输入发件人电话" />
        )}
      </FormItem>
      <FormItem
        label="支付方式"
        {...modalFormLayout}
        hasFeedback
      >
        {getFieldDecorator('modal-payWay', {
          initialValue: order && order.payWay,
          rules: [{ required: true, message: '请选择支付方式' }],
        })(
          <Select placeholder="请选择支付方式" disabled={true}>
            {Settings.payWay.map((it, index) => {
              return <Option value={it.value}>{it.label}</Option>;
            })}
          </Select>
        )}
      </FormItem>
      <FormItem
        {...modalFormLayout}
        label="送货时间"
        hasFeedback
      >
        {getFieldDecorator('modal-date', {
          initialValue: order && order.date,
          rules: [{ required: true, message: '请选择送货时间' }],
        })(
          <Input placeholder="输入送货时间" />
        )}
      </FormItem>
      <FormItem
        label="总价"
        {...modalFormLayout}
        hasFeedback
      >
        {getFieldDecorator('modal-totalPrice', {
          rules: [{ required: true, message: '总价不能为空!' }],
          initialValue: order && order.totalPrice,
        })(
          <InputNumber disabled={true} min={0} max={9999} step={0.01} />
        )}
      </FormItem>
      <FormItem
        label="订单状态"
        {...modalFormLayout}
        hasFeedback
      >
        {getFieldDecorator('modal-status', {
          initialValue: order && order.status,
          rules: [{ required: true, message: '请选择订单状态' }],
        })(
          <Select placeholder="请选择订单状态">
            {Settings.status.map((it, index) => {
              return <Option value={it.value}>{it.label}</Option>;
            })}
          </Select>
        )}
      </FormItem>
      <FormItem {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">确定</Button>
      </FormItem>
    </Form>
  );
});

const FieldForm = Form.create()((props) => {
  const { type, order } = props;
  const { getFieldDecorator } = props.form;
  Settings.initSettings();
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
      sm: { span: 6 },
    },
    wrapperCol: {
      sm: { span: 13 },
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
        offset: 6,
      },
    },
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
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
        props.getAllOrders({ ...formatValues });
      }
    });
  };
  return (
    <Form onSubmit={handleSubmit} layout="inline">
      <Row className="form-search-fields-row">
        <Col span={8}>
          <FormItem
            label="收件人姓名"
            {...formItemLayout}
          >
            {getFieldDecorator('receiveName', {
            })(
              <Input placeholder="输入收件人" />
            )}
          </FormItem>
        </Col>
        <Col span={8}>
          <FormItem
            label="收件人电话"
            {...formItemLayout}
          >
            {getFieldDecorator('receivePhone', {
            })(
              <Input placeholder="输入收件人" />
            )}
          </FormItem>
        </Col>
        <Col span={8}>
          <FormItem
            {...formItemLayout}
            label="状态"
          >
            {getFieldDecorator('status', {})(
              <Select placeholder="请选择状态">
                {Settings.status.map((item, index) => {
                  return <Option value={item.value}>{item.label}</Option>;
                })}
              </Select>
            )}
          </FormItem>
        </Col>
      </Row>
      <Row className="form-search-fields-row">
        <Col span={8}>
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
  );
});

class Order extends React.Component {
  static propTypes = {
    orderList: PropTypes.object.isRequired,
    getAllOrders: PropTypes.func.isRequired,
    onViewInit: PropTypes.func.isRequired,
    updateConsoleOrder: PropTypes.func.isRequired,
  };
  state = {
    visible: false,
    type: 'default',
    order: undefined,
  };
  handleSearch = (item) => {
    this.setState({
      visible: true,
      type: 'search',
      order: item,
    });
  };
  handleUpdate = (item) => {
    this.setState({
      visible: true,
      type: 'update',
      order: item,
    });
  };
  handleDelete = (item) => {
    const _this = this;
    confirm({
      title: '你确定要删除该订单么?',
      content: '此操作无法恢复，请慎重！',
      okText: '确定',
      okType: 'danger',
      cancelText: '取消',
      onOk() {
        _this.props.updateConsoleOrder({ ...item, deleteFlag: 1 });
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  };
  onVisibleChange = (visible) => {
    this.setState({
      visible,
    });
  };
  handleOk = () => {
    this.setState({
      visible: false,
    });
  };
  handleCancel = () => {
    this.setState({
      visible: false,
    });
  };
  componentWillMount() {
    this.props.onViewInit();
    this.props.getAllOrders({});
  }
  render() {
    const { orderList } = this.props;
    Settings.initSettings();
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
      dataIndex: 'receiveName',
      key: 'receiveName',
    }, {
      title: '用户电话',
      dataIndex: 'receivePhone',
      key: 'receivePhone',
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
      <div className="console-order">
        <Card className="console-order-card" title="订单管理">
          <Row>
            <Col>
              <div className="form-search-fields">
                <FieldForm
                  {...this.state}
                  {...this.props}
                />
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
        <div className="console-order-modal">
          <Modal
            title={this.state.type === 'search'
              ? '查看' : this.state.type === 'add'
                ? '添加' : '更新'}
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            footer={[]}
          >
            <ModalForm
              {...this.state}
              {...this.props}
              onVisibleChange={this.onVisibleChange}
            />
          </Modal>
        </div>
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
  updateConsoleOrder,
};

export default connect(mapStateToProps, mapDispatchToProps)(Order);
