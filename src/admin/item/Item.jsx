/**
 * 鲜花销售系统用户管理页
 * Created by tianrenjie on 2018/5/17
 */
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import _ from 'lodash';
import moment from 'moment';
import { Row, Col, Card, Form, Input, Button, Table, Select, InputNumber, Badge, Modal, Radio, DatePicker, Icon, Upload } from 'antd';
import Setting from '../../common/setting';
import { onViewInit, addItem, updateItem } from './action/action';
import { getItem } from '../../user/index/action/action';
import { itemListSelector } from '../../user/itemList/selector/selector';
import { adminSelector } from '../login/selector/selector';
import { addAction } from '../action/action/action';
import './Item.less';

const FormItem = Form.Item;
const Option = Select.Option;
const confirm = Modal.confirm;
const RadioGroup = Radio.Group;
const { TextArea } = Input;

const ModalForm = Form.create()((props) => {
  Setting.initSettings();
  const { type, item } = props;
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
          case 'add':
            const itemObj = {
              name: values['modal-name'],
              prePrice: `￥${values['modal-prePrice']}`,
              nowPrice: `￥${values['modal-nowPrice']}`,
              usage: values['modal-usage'],
              material: values['modal-material'],
              price: values['modal-price'],
              object: values['modal-object'],
              holiday: values['modal-holiday'],
              branch: values['modal-branch'],
              kind: values['modal-kind'],
              color: values['modal-color'],
              pack: values['modal-pack'],
              meaning: values['modal-meaning'],
              attach: values['modal-attach'],
              send: values['modal-send'],
              detail: values['modal-detail'],
              position: values['modal-position'],
              url: values['modal-url'][0].thumbUrl,
            };
            props.addItem(itemObj, (params) => {
              props.addAction({
                adminId: props.admin._id,
                adminName: props.admin.username,
                type: 'add',
                content: `管理员${props.admin.username}添加了商品${params.name}`,
                timestamp: new Date().getTime(),
                deleteFlag: 0,
              });
            });
            resetFields();
            props.onVisibleChange(false);
            break;
          case 'update':
            const itemObj2 = {
              _id: item._id,
              name: values['modal-name'],
              prePrice: `￥${values['modal-prePrice']}`,
              nowPrice: `￥${values['modal-nowPrice']}`,
              usage: values['modal-usage'],
              material: values['modal-material'],
              price: values['modal-price'],
              object: values['modal-object'],
              holiday: values['modal-holiday'],
              branch: values['modal-branch'],
              kind: values['modal-kind'],
              color: values['modal-color'],
              pack: values['modal-pack'],
              meaning: values['modal-meaning'],
              attach: values['modal-attach'],
              send: values['modal-send'],
              detail: values['modal-detail'],
              position: values['modal-position'],
              url: values['modal-url'][0].thumbUrl,
            };
            props.updateItem(itemObj2, (params) => {
              props.addAction({
                adminId: props.admin._id,
                adminName: props.admin.username,
                type: 'update',
                content: `管理员${props.admin.username}更新了商品${params._id}`,
                timestamp: new Date().getTime(),
                deleteFlag: 0,
              });
            });
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
        label="产品名"
        {...modalFormLayout}
        hasFeedback
      >
        {getFieldDecorator('modal-name', {
          rules: [{ required: true, message: '产品名不能为空!' }],
          initialValue: item && item.name,
        })(
          <Input placeholder="输入产品名" />
        )}
      </FormItem>
      <FormItem
        label="原价"
        {...modalFormLayout}
        hasFeedback
      >
        {getFieldDecorator('modal-prePrice', {
          rules: [{ required: true, message: '原价不能为空!' }],
          initialValue: item && item.prePrice && item.prePrice.split('￥')[1],
        })(
          <InputNumber min={0} max={9999} step={0.01} />
        )}
      </FormItem>
      <FormItem
        label="现价"
        {...modalFormLayout}
        hasFeedback
      >
        {getFieldDecorator('modal-nowPrice', {
          rules: [{ required: true, message: '现价不能为空!' }],
          initialValue: item && item.nowPrice && item.nowPrice.split('￥')[1],
        })(
          <InputNumber min={0} max={9999} step={0.01} />
        )}
      </FormItem>
      <FormItem
        label="用途"
        {...modalFormLayout}
        hasFeedback
      >
        {getFieldDecorator('modal-usage', {
          initialValue: item && item.usage,
          rules: [{ required: true, message: '请选择用途' }],
        })(
          <Select placeholder="请选择用途">
            {Setting.usage.map((it, index) => {
              return <Option value={it.value}>{it.label}</Option>;
            })}
          </Select>
        )}
      </FormItem>
      <FormItem
        label="材料"
        {...modalFormLayout}
        hasFeedback
      >
        {getFieldDecorator('modal-material', {
          initialValue: item && item.material,
          rules: [{ required: true, message: '请选择材料' }],
        })(
          <Select placeholder="请选择材料">
            {Setting.material.map((it, index) => {
              return <Option value={it.value}>{it.label}</Option>;
            })}
          </Select>
        )}
      </FormItem>
      <FormItem
        label="价格"
        {...modalFormLayout}
        hasFeedback
      >
        {getFieldDecorator('modal-price', {
          initialValue: item && item.price,
          rules: [{ required: true, message: '请选择价格' }],
        })(
          <Select placeholder="请选择价格">
            {Setting.price.map((it, index) => {
              return <Option value={it.value}>{it.label}</Option>;
            })}
          </Select>
        )}
      </FormItem>
      <FormItem
        label="对象"
        {...modalFormLayout}
        hasFeedback
      >
        {getFieldDecorator('modal-object', {
          initialValue: item && item.object,
          rules: [{ required: true, message: '请选择对象' }],
        })(
          <Select placeholder="请选择对象">
            {Setting.object.map((it, index) => {
              return <Option value={it.value}>{it.label}</Option>;
            })}
          </Select>
        )}
      </FormItem>
      <FormItem
        label="节日"
        {...modalFormLayout}
        hasFeedback
      >
        {getFieldDecorator('modal-holiday', {
          initialValue: item && item.holiday,
          rules: [{ required: true, message: '请选择节日' }],
        })(
          <Select placeholder="请选择节日">
            {Setting.holiday.map((it, index) => {
              return <Option value={it.value}>{it.label}</Option>;
            })}
          </Select>
        )}
      </FormItem>
      <FormItem
        label="枝数"
        {...modalFormLayout}
        hasFeedback
      >
        {getFieldDecorator('modal-branch', {
          initialValue: item && item.branch,
          rules: [{ required: true, message: '请选择枝数' }],
        })(
          <Select placeholder="请选择枝数">
            {Setting.branch.map((it, index) => {
              return <Option value={it.value}>{it.label}</Option>;
            })}
          </Select>
        )}
      </FormItem>
      <FormItem
        label="种类"
        {...modalFormLayout}
        hasFeedback
      >
        {getFieldDecorator('modal-kind', {
          initialValue: item && item.kind,
          rules: [{ required: true, message: '请选择种类' }],
        })(
          <Select placeholder="请选择种类">
            {Setting.kind.map((it, index) => {
              return <Option value={it.value}>{it.label}</Option>;
            })}
          </Select>
        )}
      </FormItem>
      <FormItem
        label="颜色"
        {...modalFormLayout}
        hasFeedback
      >
        {getFieldDecorator('modal-color', {
          initialValue: item && item.color,
          rules: [{ required: true, message: '请选择颜色' }],
        })(
          <Select placeholder="请选择颜色">
            {Setting.color.map((it, index) => {
              return <Option value={it.value}>{it.label}</Option>;
            })}
          </Select>
        )}
      </FormItem>
      <FormItem
        label="包装"
        {...modalFormLayout}
      >
        {getFieldDecorator('modal-pack', {
          initialValue: item && item.pack,
        })(
          <TextArea rows={6} placeholder="输入包装信息" />
        )}
      </FormItem>
      <FormItem
        label="花语"
        {...modalFormLayout}
      >
        {getFieldDecorator('modal-meaning', {
          initialValue: item && item.meaning,
        })(
          <TextArea rows={6} placeholder="输入花语信息" />
        )}
      </FormItem>
      <FormItem
        label="附送"
        {...modalFormLayout}
      >
        {getFieldDecorator('modal-attach', {
          initialValue: item && item.attach,
        })(
          <TextArea rows={6} placeholder="输入附送信息" />
        )}
      </FormItem>
      <FormItem
        label="配送"
        {...modalFormLayout}
      >
        {getFieldDecorator('modal-send', {
          initialValue: item && item.send,
        })(
          <TextArea rows={6} placeholder="输入配送信息" />
        )}
      </FormItem>
      <FormItem
        label="详细"
        {...modalFormLayout}
      >
        {getFieldDecorator('modal-detail', {
          initialValue: item && item.detail,
        })(
          <TextArea rows={6} placeholder="输入详细信息" />
        )}
      </FormItem>
      <FormItem
        label="产品位置"
        {...modalFormLayout}
        hasFeedback
      >
        {getFieldDecorator('modal-position', {
          initialValue: item && item.position,
        })(
          <Select placeholder="请选择产品位置">
            {Setting.position.map((it, index) => {
              return <Option value={it.value}>{it.label}</Option>;
            })}
          </Select>
        )}
      </FormItem>
      <FormItem
        {...modalFormLayout}
        label="上传产品图片"
      >
        {getFieldDecorator('modal-url', {
          valuePropName: 'fileList',
          getValueFromEvent: normFile,
          initialValue: item && item.url && [{
            uid: -1,
            name: `${item.url.split('/')[item.url.split('/').length - 1]}`,
            status: 'done',
            url: item.url,
            thumbUrl: item.url,
          }],
        })(
          <Upload name="logo" action="http://localhost:3000/file/upload" listType="picture" onRemove={removeItem}>
            <Button>
              <Icon type="upload" /> 点击上传
            </Button>
          </Upload>
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
  Setting.initSettings();
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
        const formatValues = {};
        _.mapKeys(values, (value, key) => {
          if (!_.isEmpty(value)) {
            formatValues[key] = value;
          }
        });
        props.getItem({ ...formatValues });
      }
    });
  };
  return (
    <Form onSubmit={handleSubmit} layout="inline">
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
            {getFieldDecorator('usage', {})(
              <Select placeholder="请选择用途">
                {Setting.usage.map((it, index) => {
                  return <Option value={it.value}>{it.label}</Option>;
                })}
              </Select>
            )}
          </FormItem>
        </Col>
        <Col span={8}>
          <FormItem
            {...formItemLayout}
            label="材料"
          >
            {getFieldDecorator('material', {})(
              <Select placeholder="请选择材料">
                {Setting.material.map((it, index) => {
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
            label="对象"
          >
            {getFieldDecorator('object', {})(
              <Select placeholder="请选择对象">
                {Setting.object.map((it, index) => {
                  return <Option value={it.value}>{it.label}</Option>;
                })}
              </Select>
            )}
          </FormItem>
        </Col>
        <Col span={8}>
          <FormItem
            {...formItemLayout}
            label="节日"
          >
            {getFieldDecorator('holiday', {})(
              <Select placeholder="请选择节日">
                {Setting.holiday.map((it, index) => {
                  return <Option value={it.value}>{it.label}</Option>;
                })}
              </Select>
            )}
          </FormItem>
        </Col>
        <Col span={8}>
          <FormItem
            {...formItemLayout}
            label="枝数"
          >
            {getFieldDecorator('branch', {})(
              <Select placeholder="请选择枝数">
                {Setting.branch.map((it, index) => {
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
            label="种类"
          >
            {getFieldDecorator('kind', {})(
              <Select placeholder="请选择种类">
                {Setting.kind.map((it, index) => {
                  return <Option value={it.value}>{it.label}</Option>;
                })}
              </Select>
            )}
          </FormItem>
        </Col>
        <Col span={8}>
          <FormItem
            {...formItemLayout}
            label="颜色"
          >
            {getFieldDecorator('color', {})(
              <Select placeholder="请选择颜色">
                {Setting.color.map((it, index) => {
                  return <Option value={it.value}>{it.label}</Option>;
                })}
              </Select>
            )}
          </FormItem>
        </Col>
        <Col span={8}>
          <FormItem
            {...formItemLayout}
            label="价格区间"
          >
            {getFieldDecorator('price', {})(
              <Select placeholder="请选择价格区间">
                {Setting.price.map((it, index) => {
                  return <Option value={it.value}>{it.label}</Option>;
                })}
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
  );
});

class Item extends React.Component {
  static propTypes = {
    itemList: PropTypes.object.isRequired,
    admin: PropTypes.object.isRequired,
    getItem: PropTypes.func.isRequired,
    onViewInit: PropTypes.func.isRequired,
    addItem: PropTypes.func.isRequired,
    updateItem: PropTypes.func.isRequired,
    addAction: PropTypes.func.isRequired,
  };
  state = {
    visible: false,
    type: 'default',
    item: undefined,
  };
  componentWillMount() {
    this.props.onViewInit();
    this.props.getItem({});
  }
  handleSearch = (item) => {
    this.setState({
      visible: true,
      type: 'search',
      item,
    });
  };
  handleUpdate = (item) => {
    this.setState({
      visible: true,
      type: 'update',
      item,
    });
  };
  handleDelete = (item) => {
    const _this = this;
    confirm({
      title: '你确定要删除该产品么?',
      content: '此操作无法恢复，请慎重！',
      okText: '确定',
      okType: 'danger',
      cancelText: '取消',
      onOk() {
        _this.props.updateItem({ ...item, deleteFlag: 1 }, (params) => {
          _this.props.addAction({
            adminId: _this.admin.props._id,
            adminName: _this.admin.props.username,
            type: 'delete',
            content: `管理员${_this.props.admin.username}删除了商品${params.name}`,
            timestamp: new Date().getTime(),
            deleteFlag: 0,
          });
        });
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
      item: undefined,
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
        if (parseInt(text) > 0) {
          return <span><Badge status="warning" />已删除</span>;
        }
        return <span><Badge status="processing" />正常</span>;
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
                <Button type="default" onClick={this.handleAdd}>添加产品</Button>
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
    itemList: itemListSelector(state),
    admin: adminSelector(state),
  };
};

const mapDispatchToProps = {
  getItem,
  onViewInit,
  addItem,
  updateItem,
  addAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Item);
