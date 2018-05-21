/**
 * 鲜花销售系统用户管理页
 * Created by tianrenjie on 2018/5/17
 */
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import _ from 'lodash';
import { Row, Col, Card, Form, Input, Button, Table, Select } from 'antd';
import Setting from '../../common/setting';
import { onViewInit } from './action/action';
import { getItem } from '../../user/index/action/action';
import { itemListSelector } from '../../user/itemList/selector/selector';
import './Item.less';

const FormItem = Form.Item;
const Option = Select.Option;
class Item extends React.Component {
  static propTypes = {
    form: PropTypes.object.isRequired,
    itemList: PropTypes.object.isRequired,
    getItem: PropTypes.func.isRequired,
    onViewInit: PropTypes.func.isRequired,
  };
  componentWillMount() {
    this.props.onViewInit();
    this.props.getItem();
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    const { itemList } = this.props;
    Setting.initSettings();
    const itemColumns = [{
      title: '产品id',
      dataIndex: '_id',
      key: '_id',
    }, {
      title: '预览图',
      dataIndex: 'url',
      key: 'url',
      render: (text, record) => {
        return <img src={text} alt="花之韵" className="console-index-img" />;
      },
    }, {
      title: '产品名称',
      dataIndex: 'name',
      key: 'name',
    }, {
      title: '价格',
      dataIndex: 'nowPrice',
      key: 'nowPrice',
    }, {
      title: '用途',
      dataIndex: 'usage',
      key: 'usage',
      render: (text, record) => {
        return Setting.mapValueToLabel(text);
      },
    }, {
      title: '材料',
      dataIndex: 'material',
      key: 'material',
      render: (text, record) => {
        return Setting.mapValueToLabel(text);
      },
    }, {
      title: '对象',
      dataIndex: 'object',
      key: 'object',
      render: (text, record) => {
        return Setting.mapValueToLabel(text);
      },
    }, {
      title: '节日',
      dataIndex: 'holiday',
      key: 'holiday',
      render: (text, record) => {
        return Setting.mapValueToLabel(text);
      },
    }, {
      title: '枝数',
      dataIndex: 'branch',
      key: 'branch',
      render: (text, record) => {
        return Setting.mapValueToLabel(text);
      },
    }, {
      title: '种类',
      dataIndex: 'kind',
      key: 'kind',
      render: (text, record) => {
        return Setting.mapValueToLabel(text);
      },
    }, {
      title: '颜色',
      dataIndex: 'color',
      key: 'color',
      render: (text, record) => {
        return Setting.mapValueToLabel(text);
      },
    }, {
      title: '标志',
      dataIndex: 'deleteFlag',
      key: 'deleteFlag',
      render: (text, record) => {
        return parseInt(text) === 0 ? '正常' : '已删除';
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
    let itemData = [];
    if (!_.isEmpty(itemList) && !_.isEmpty(itemList.data)) {
      itemData = itemList.data;
    }
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
      <div className="console-item">
        <Card className="console-item-card" title="产品管理">
          <Row>
            <Col>
              <div className="form-search-fields">
                <Form onSubmit={this.handleSubmit} layout="inline">
                  <Row className="form-search-fields-row">
                    <Col span={8}>
                      <FormItem
                        label="产品名"
                        {...formItemLayout}
                      >
                        {getFieldDecorator('name', {
                        })(
                          <Input placeholder="输入产品名" />
                        )}
                      </FormItem>
                    </Col>
                    <Col span={8}>
                      <FormItem
                        {...formItemLayout}
                        label="用途"
                      >
                        {getFieldDecorator('modal-permission', {})(
                          <Select placeholder="请选择用途">
                            <Option value="normal">普通用户</Option>
                            <Option value="admin">管理员</Option>
                          </Select>
                        )}
                      </FormItem>
                    </Col>
                    <Col span={8}>
                      <FormItem
                        {...formItemLayout}
                        label="材料"
                      >
                        {getFieldDecorator('modal-permission', {})(
                          <Select placeholder="请选择材料">
                            <Option value="normal">普通用户</Option>
                            <Option value="admin">管理员</Option>
                          </Select>
                        )}
                      </FormItem>
                    </Col>
                  </Row>
                  <Row className="form-search-fields-row">
                    <Col span={8}>
                      <FormItem
                        {...formItemLayout}
                        label="对象"
                      >
                        {getFieldDecorator('modal-permission', {})(
                          <Select placeholder="请选择对象">
                            <Option value="normal">普通用户</Option>
                            <Option value="admin">管理员</Option>
                          </Select>
                        )}
                      </FormItem>
                    </Col>
                    <Col span={8}>
                      <FormItem
                        {...formItemLayout}
                        label="节日"
                      >
                        {getFieldDecorator('modal-permission', {})(
                          <Select placeholder="请选择节日">
                            <Option value="normal">普通用户</Option>
                            <Option value="admin">管理员</Option>
                          </Select>
                        )}
                      </FormItem>
                    </Col>
                    <Col span={8}>
                      <FormItem
                        {...formItemLayout}
                        label="枝数"
                      >
                        {getFieldDecorator('modal-permission', {})(
                          <Select placeholder="请选择枝数">
                            <Option value="normal">普通用户</Option>
                            <Option value="admin">管理员</Option>
                          </Select>
                        )}
                      </FormItem>
                    </Col>
                  </Row>
                  <Row className="form-search-fields-row">
                    <Col span={8}>
                      <FormItem
                        {...formItemLayout}
                        label="种类"
                      >
                        {getFieldDecorator('modal-permission', {})(
                          <Select placeholder="请选择种类">
                            <Option value="normal">普通用户</Option>
                            <Option value="admin">管理员</Option>
                          </Select>
                        )}
                      </FormItem>
                    </Col>
                    <Col span={8}>
                      <FormItem
                        {...formItemLayout}
                        label="颜色"
                      >
                        {getFieldDecorator('modal-permission', {})(
                          <Select placeholder="请选择颜色">
                            <Option value="normal">普通用户</Option>
                            <Option value="admin">管理员</Option>
                          </Select>
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
              <div className="action-fields">
                <Button type="default">添加产品</Button>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="table-fields">
                <Table
                  columns={itemColumns}
                  dataSource={itemData}
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
    itemList: itemListSelector(state),
  };
};

const mapDispatchToProps = {
  getItem,
  onViewInit,
};

const ItemForm = Form.create()(Item);
export default connect(mapStateToProps, mapDispatchToProps)(ItemForm);
