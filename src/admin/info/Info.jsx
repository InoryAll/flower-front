/**
 * 鲜花销售系统用户管理页
 * Created by tianrenjie on 2018/5/17
 */
import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Row, Col, Card, Form, Input, Button, Table, DatePicker, Select, Modal, Radio, InputNumber, Upload, Icon } from 'antd';
import _ from 'lodash';
import moment from 'moment';
import { connect } from 'react-redux';
import Settings from '../../common/setting';
import { onViewInit, addInfo, updateInfo } from './action/action';
import { getInfoList } from '../../user/info/action/action';
import { infoSelector } from '../../user/info/selector/selector';
import './Info.less';

const FormItem = Form.Item;
const Option = Select.Option;
const confirm = Modal.confirm;
const RadioGroup = Radio.Group;
const RangePicker = DatePicker.RangePicker;
const { TextArea } = Input;

const ModalForm = Form.create()((props) => {
  Settings.initSettings();
  const { type, info } = props;
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
  const textAreaFormLayout = {
    labelCol: {
      sm: { span: 6 },
    },
    wrapperCol: {
      sm: { span: 16 },
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
          case 'add':
            const infoObj = {
              name: values['modal-name'],
              author: values['modal-author'],
              type: values['modal-type'],
              content: values['modal-content'],
              timestamp: new Date().getTime(),
            };
            props.addInfo(infoObj);
            resetFields();
            props.onVisibleChange(false);
            break;
          case 'update':
            const infoObj2 = {
              _id: info._id,
              name: values['modal-name'],
              author: values['modal-author'],
              type: values['modal-type'],
              content: values['modal-content'],
              timestamp: new Date().getTime(),
            };
            props.updateInfo(infoObj2);
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
        label="文章主题"
        {...modalFormLayout}
        hasFeedback
      >
        {getFieldDecorator('modal-name', {
          rules: [{ required: true, message: '文章主题不能为空!' }],
          initialValue: info && info.name,
        })(
          <Input placeholder="输入文章主题" />
        )}
      </FormItem>
      <FormItem
        label="作者"
        {...modalFormLayout}
        hasFeedback
      >
        {getFieldDecorator('modal-author', {
          rules: [{ required: true, message: '作者不能为空!' }],
          initialValue: info && info.author,
        })(
          <Input placeholder="输入文章作者" />
        )}
      </FormItem>
      <FormItem
        label="种类"
        {...modalFormLayout}
        hasFeedback
      >
        {getFieldDecorator('modal-type', {
          initialValue: info && info.type,
          rules: [{ required: true, message: '请选择种类' }],
        })(
          <Select placeholder="请选择种类">
            {Settings.type.map((it, index) => {
              return <Option value={it.value}>{it.label}</Option>;
            })}
          </Select>
        )}
      </FormItem>
      <FormItem
        label="内容"
        {...textAreaFormLayout}
      >
        {getFieldDecorator('modal-content', {
          initialValue: info && info.content && decodeURIComponent(info.content),
        })(
          <TextArea rows={12} placeholder="输入文章内容" />
        )}
      </FormItem>
      <FormItem {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">确定</Button>
      </FormItem>
    </Form>
  );
});

const FieldForm = Form.create()((props) => {
  const { type, item } = props;
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
          formatValues.$and = [...formatValues.$and, ...values];
        } else {
          formatValues = { ...values };
        }
        props.getInfoList({ ...formatValues });
      }
    });
  };
  return (
    <Form onSubmit={handleSubmit} layout="inline">
      <Row className="form-search-fields-row">
        <Col span={8}>
          <FormItem
            label="文案名"
            {...formItemLayout}
          >
            {getFieldDecorator('name', {
            })(
              <Input placeholder="输入文案名" />
            )}
          </FormItem>
        </Col>
        <Col span={8}>
          <FormItem
            label="作者"
            {...formItemLayout}
          >
            {getFieldDecorator('author', {
            })(
              <Input placeholder="输入作者名" />
            )}
          </FormItem>
        </Col>
        <Col span={8}>
          <FormItem
            {...formItemLayout}
            label="类型"
          >
            {getFieldDecorator('type', {})(
              <Select placeholder="请选择类型">
                {Settings.type.map((it, index) => {
                  return <Option value={it.value}>{it.label}</Option>;
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

class Info extends React.Component {
  static propTypes = {
    infos: PropTypes.object.isRequired,
    onViewInit: PropTypes.func.isRequired,
    getInfoList: PropTypes.func.isRequired,
    addInfo: PropTypes.func.isRequired,
    updateInfo: PropTypes.func.isRequired,
  };
  state = {
    visible: false,
    type: 'default',
    info: undefined,
  };
  componentWillMount() {
    this.props.onViewInit();
    this.props.getInfoList();
  }
  handleSearch = (item) => {
    this.setState({
      visible: true,
      type: 'search',
      info: item,
    });
  };
  handleUpdate = (item) => {
    this.setState({
      visible: true,
      type: 'update',
      info: item,
    });
  };
  handleDelete = (item) => {
    const _this = this;
    confirm({
      title: '你确定要删除该文章么?',
      content: '此操作无法恢复，请慎重！',
      okText: '确定',
      okType: 'danger',
      cancelText: '取消',
      onOk() {
        _this.props.updateInfo({ ...item, deleteFlag: 1 });
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  };
  handleAdd = () => {
    this.setState({
      visible: true,
      type: 'add',
      info: undefined,
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
  render() {
    const { infos } = this.props;
    Settings.initSettings();
    let infoData = [];
    if (!_.isEmpty(infos) && !_.isEmpty(infos.data)) {
      infoData = infos.data;
    }
    const columns = [{
      title: '文章主题',
      dataIndex: 'name',
      key: 'name',
    }, {
      title: '文章作者',
      dataIndex: 'author',
      key: 'author',
    }, {
      title: '文章类型',
      dataIndex: 'type',
      key: 'type',
      render: (text, record) => {
        switch (text) {
          case 'news':
            return '资讯';
          case 'flower':
            return '花语';
          case 'board':
            return '公告';
          default:
            return '未知类型';
        }
      },
    }, {
      title: '文章内容',
      dataIndex: 'content',
      key: 'content',
      render: (text, record) => {
        return decodeURIComponent(text).length > 10 ? decodeURIComponent(text).substring(0, 10).concat('...') : decodeURIComponent(text);
      },
    }, {
      title: '最后修改时间',
      dataIndex: 'timestamp',
      key: 'timestamp',
      render: (text, record) => {
        return !_.isUndefined(text) && moment(parseInt(text)).format('YYYY-MM-DD HH:mm:ss');
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
      <div className="console-info">
        <Card className="console-info-card" title="文案管理">
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
              <div className="action-fields">
                <Button type="default" onClick={this.handleAdd}>添加文案</Button>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="table-fields">
                <Table
                  columns={columns}
                  dataSource={infoData}
                />
              </div>
            </Col>
          </Row>
        </Card>
        <div className="console-item-modal">
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
    infos: infoSelector(state),
  };
};

const mapDispatchToProps = {
  onViewInit,
  getInfoList,
  addInfo,
  updateInfo,
};

export default connect(mapStateToProps, mapDispatchToProps)(Info);
