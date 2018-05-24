/**
 * 鲜花销售系统用户管理页
 * Created by tianrenjie on 2018/5/17
 */
import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import _ from 'lodash';
import moment from 'moment';
import { Row, Col, Card, Form, Input, Button, Table, DatePicker, Modal, Radio, Select } from 'antd';
import Settings from '../../common/setting';
import { onViewInit, getWorksheet, addWorksheet, updateWorksheet } from './action/action';
import { worksheetSelector } from './selector/selector';
import './Worksheet.less';

const FormItem = Form.Item;
const Option = Select.Option;
const confirm = Modal.confirm;
const RadioGroup = Radio.Group;
const RangePicker = DatePicker.RangePicker;
const { TextArea } = Input;

const ModalForm = Form.create()((props) => {
  Settings.initSettings();
  const { type, worksheet } = props;
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
            const worksheetObj = {
              name: values['modal-name'],
              adminName: values['modal-adminName'],
              content: values['modal-content'],
              timestamp: new Date().getTime(),
            };
            props.addWorksheet(worksheetObj);
            resetFields();
            props.onVisibleChange(false);
            break;
          case 'update':
            const worksheetObj2 = {
              _id: worksheet._id,
              name: values['modal-name'],
              adminName: values['modal-adminName'],
              content: values['modal-content'],
              timestamp: new Date().getTime(),
            };
            props.updateWorksheet(worksheetObj2);
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
        label="工作记录主题"
        {...modalFormLayout}
        hasFeedback
      >
        {getFieldDecorator('modal-name', {
          rules: [{ required: true, message: '工作记录主题不能为空!' }],
          initialValue: worksheet && worksheet.name,
        })(
          <Input placeholder="输入工作记录主题" />
        )}
      </FormItem>
      <FormItem
        label="添加人"
        {...modalFormLayout}
        hasFeedback
      >
        {getFieldDecorator('modal-adminName', {
          rules: [{ required: true, message: '作者不能为空!' }],
          initialValue: worksheet && worksheet.adminName,
        })(
          <Input placeholder="输入文章作者" />
        )}
      </FormItem>
      <FormItem
        label="内容"
        {...textAreaFormLayout}
      >
        {getFieldDecorator('modal-content', {
          initialValue: worksheet && worksheet.content,
        })(
          <TextArea rows={12} placeholder="输入内容" />
        )}
      </FormItem>
      <FormItem {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">确定</Button>
      </FormItem>
    </Form>
  );
});

const FieldForm = Form.create()((props) => {
  const { type, worksheet } = props;
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
        props.getWorksheet({ ...formatValues });
      }
    });
  };
  return (
    <Form onSubmit={handleSubmit} layout="inline">
      <Row className="form-search-fields-row">
        <Col span={8}>
          <FormItem
            label="工作记录id"
            {...formItemLayout}
          >
            {getFieldDecorator('_id', {
            })(
              <Input placeholder="输入工作记录id" />
            )}
          </FormItem>
        </Col>
        <Col span={8}>
          <FormItem
            label="主题"
            {...formItemLayout}
          >
            {getFieldDecorator('name', {
            })(
              <Input placeholder="输入工作记录主题" />
            )}
          </FormItem>
        </Col>
        <Col span={8}>
          <FormItem
            label="作者"
            {...formItemLayout}
          >
            {getFieldDecorator('adminName', {
            })(
              <Input placeholder="输入工作记录作者" />
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

class Worksheet extends React.Component {
  static propTypes = {
    form: PropTypes.object.isRequired,
    worksheets: PropTypes.object.isRequired,
    getWorksheet: PropTypes.func.isRequired,
    addWorksheet: PropTypes.func.isRequired,
    updateWorksheet: PropTypes.func.isRequired,
    onViewInit: PropTypes.func.isRequired,
  };
  state = {
    visible: false,
    type: 'default',
    worksheet: undefined,
  };
  componentWillMount() {
    this.props.onViewInit();
    this.props.getWorksheet({});
  }
  handleSearch = (item) => {
    this.setState({
      visible: true,
      type: 'search',
      worksheet: item,
    });
  };
  handleUpdate = (item) => {
    this.setState({
      visible: true,
      type: 'update',
      worksheet: item,
    });
  };
  handleDelete = (item) => {
    const _this = this;
    confirm({
      title: '你确定要删除该工作记录么?',
      content: '此操作无法恢复，请慎重！',
      okText: '确定',
      okType: 'danger',
      cancelText: '取消',
      onOk() {
        _this.props.updateWorksheet({ ...item, deleteFlag: 1 });
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
      worksheet: undefined,
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
    const { getFieldDecorator } = this.props.form;
    const { worksheets } = this.props;
    let worksheetData = [];
    if (!_.isEmpty(worksheets) && !_.isEmpty(worksheets.data)) {
      worksheetData = worksheets.data;
    }
    const columns = [{
      title: '工作记录id',
      dataIndex: '_id',
      key: '_id',
    }, {
      title: '添加人姓名',
      dataIndex: 'adminName',
      key: 'adminName',
    }, {
      title: '工作记录主题',
      dataIndex: 'name',
      key: 'name',
    }, {
      title: '工作记录内容',
      dataIndex: 'content',
      key: 'content',
      render: (text, record) => {
        return text.length > 20 ? text.substring(0, 20).concat('...') : text;
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
    return (
      <div className="console-worksheet">
        <Card className="console-worksheet-card" title="工作记录管理">
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
                <Button type="default" onClick={this.handleAdd}>添加工作记录</Button>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="table-fields">
                <Table
                  columns={columns}
                  dataSource={worksheetData}
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
    worksheets: worksheetSelector(state),
  };
};

const mapDispatchToProps = {
  onViewInit,
  getWorksheet,
  addWorksheet,
  updateWorksheet,
};

const WorksheetForm = Form.create()(Worksheet);
export default connect(mapStateToProps, mapDispatchToProps)(WorksheetForm);
