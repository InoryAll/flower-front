/**
 * 鲜花销售系统用户管理页
 * Created by tianrenjie on 2018/5/17
 */
import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import _ from 'lodash';
import $ from 'jquery';
import moment from 'moment';
import { connect } from 'react-redux';
import { Row, Col, Card, Form, Input, Button, Table, Select, Modal, Radio, DatePicker } from 'antd';
import { onViewInit, updateAdminUser, updateNormalUser } from './action/action';
import { getUserList, getAdminList } from '../index/action/action';
import { userListSelector, adminListSelector } from '../index/selector/selector';
import { addUser } from '../../user/regedit/action/action';
import { addAdminUser } from '../login/action/action';
import './User.less';

const FormItem = Form.Item;
const Option = Select.Option;
const confirm = Modal.confirm;
const RadioGroup = Radio.Group;

const ModalForm = Form.create()((props) => {
  const { type, userItem } = props;
  const { getFieldDecorator } = props.form;
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
  const handleModalSubmit = (e) => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        switch (type) {
          case 'add':
            if (values['modal-permission'] === 'normal') {
              const userObj = {
                username: values['modal-username'],
                password: values['modal-password'],
                name: values['modal-name'],
                sex: values['modal-sex'],
                birthday: values['modal-birthday'],
                tel: values['modal-tel'],
                email: values['modal-email'],
                permission: values.permission,
                qq: values.qq,
              };
              props.addUser(userObj);
            } else {
              const adminObj = {
                username: values['modal-username'],
                password: values['modal-password'],
                email: values['modal-email'],
                permission: values.permission,
              };
              props.addAdmin(adminObj);
            }
            break;
          case 'update':
            if (values['modal-permission'] === 'normal') {
              const userObj = {
                username: values['modal-username'],
                password: values['modal-password'],
                name: values['modal-name'],
                sex: values['modal-sex'],
                birthday: values['modal-birthday'],
                tel: values['modal-tel'],
                email: values['modal-email'],
                permission: values.permission,
                qq: values.qq,
              };
              props.updateNormalUser(userObj);
            } else {
              const adminObj = {
                username: values['modal-username'],
                password: values['modal-password'],
                email: values['modal-email'],
                permission: values.permission,
              };
              props.updateAdminUser(adminObj);
            }
            break;
          default:
            this.setState({
              visible: false,
            });
        }
      }
    });
  };
  return (
    <Form className="modal-form" onSubmit={handleModalSubmit}>
      <FormItem
        label="用户名"
        {...modalFormLayout}
        hasFeedback
      >
        {getFieldDecorator('modal-username', {
          rules: [{ required: true, message: '用户名不能为空!' }],
          initialValue: userItem && userItem.username,
        })(
          <Input disabled={ userItem && true } placeholder="输入用户名" />
        )}
      </FormItem>
      <FormItem
        label="密码"
        {...modalFormLayout}
        hasFeedback
      >
        {getFieldDecorator('modal-password', {
          rules: [{ required: true, message: '密码不能为空!' }],
          initialValue: userItem && userItem.password,
        })(
          <Input type="password" placeholder="输入密码" />
        )}
      </FormItem>
      <FormItem
        label="邮箱"
        {...modalFormLayout}
        hasFeedback
      >
        {getFieldDecorator('modal-email', {
          rules: [{ required: true, message: '邮箱不能为空!' }],
          initialValue: userItem && userItem.email,
        })(
          <Input placeholder="输入邮箱" />
        )}
      </FormItem>
      <FormItem
        label="姓名"
        {...modalFormLayout}
      >
        {getFieldDecorator('modal-name', {
          initialValue: userItem && userItem.name,
        })(
          <Input placeholder="输入姓名" />
        )}
      </FormItem>
      <FormItem
        {...modalFormLayout}
        label="性別"
      >
        {getFieldDecorator('modal-sex', {
          initialValue: userItem && userItem.sex,
        })(
          <RadioGroup>
            <Radio value="male">男</Radio>
            <Radio value="female">女</Radio>
          </RadioGroup>
        )}
      </FormItem>
      <FormItem
        {...modalFormLayout}
        label="生日"
      >
        {getFieldDecorator('modal-birthday', {
          initialValue: userItem && moment(userItem.birthday),
        })(
          <DatePicker
            showTime
            format="YYYY-MM-DD HH:mm:ss"
          />
        )}
      </FormItem>
      <FormItem
        label="手机号"
        {...modalFormLayout}
      >
        {getFieldDecorator('modal-tel', {
          initialValue: userItem && userItem.tel,
        })(
          <Input placeholder="输入手机号" />
        )}
      </FormItem>
      <FormItem
        label="QQ"
        {...modalFormLayout}
      >
        {getFieldDecorator('modal-qq', {
          initialValue: userItem && userItem.qq,
        })(
          <Input placeholder="输入QQ号" />
        )}
      </FormItem>
      <FormItem
        {...modalFormLayout}
        label="角色"
      >
        {getFieldDecorator('modal-permission', {
          initialValue: userItem ? (userItem.permission > 0 ? 'admin' : 'normal') : undefined,
          rules: [{ required: true, message: '请选择角色类型' }],
        })(
          <Select disabled={ userItem && true } placeholder="请选择角色">
            <Option value="normal">普通用户</Option>
            <Option value="admin">管理员</Option>
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
  const { form } = props;
  const { getFieldDecorator } = form;
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
  const handleSubmit = (e) => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        const formatValues = {};
        _.mapKeys(values, (value, key) => {
          if (!_.isEmpty(value)) {
            formatValues[key] = value;
            if (key === 'permission') {
              formatValues[key] = value === 'normal' ? 0 : 1;
            }
          }
        });
        console.log(formatValues);
        props.getUserList({ ...formatValues });
        props.getAdminList({ ...formatValues });
      }
    });
  };
  return (
    <Form onSubmit={handleSubmit} layout="inline">
      <Row className="form-search-fields-row">
        <Col span={8}>
          <FormItem
            label="用户名"
            {...formItemLayout}
          >
            {getFieldDecorator('username', {
            })(
              <Input placeholder="输入用户名" />
            )}
          </FormItem>
        </Col>
        <Col span={8}>
          <FormItem
            label="姓名"
            {...formItemLayout}
          >
            {getFieldDecorator('name', {
            })(
              <Input placeholder="输入姓名" />
            )}
          </FormItem>
        </Col>
        <Col span={8}>
          <FormItem
            label="手机号"
            {...formItemLayout}
          >
            {getFieldDecorator('tel', {
            })(
              <Input placeholder="输入手机号" />
            )}
          </FormItem>
        </Col>
      </Row>
      <Row className="form-search-fields-row">
        <Col span={8}>
          <FormItem
            label="邮箱"
            {...formItemLayout}
          >
            {getFieldDecorator('email', {
            })(
              <Input placeholder="输入邮箱" />
            )}
          </FormItem>
        </Col>
        <Col span={8}>
          <FormItem
            label="QQ"
            {...formItemLayout}
          >
            {getFieldDecorator('qq', {
            })(
              <Input placeholder="输入QQ号" />
            )}
          </FormItem>
        </Col>
        <Col span={8}>
          <FormItem
            {...formItemLayout}
            label="角色"
          >
            {getFieldDecorator('permission', {})(
              <Select placeholder="请选择角色">
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
  );
});

class User extends React.Component {
  static propTypes = {
    userList: PropTypes.object.isRequired,
    adminList: PropTypes.object.isRequired,
    getUserList: PropTypes.func.isRequired,
    getAdminList: PropTypes.func.isRequired,
    addUser: PropTypes.func.isRequired,
    addAdminUser: PropTypes.func.isRequired,
    updateNormalUser: PropTypes.func.isRequired,
    updateAdminUser: PropTypes.func.isRequired,
  };
  state = {
    visible: false,
    type: 'default',
    userItem: undefined,
  };
  componentWillMount() {
    this.props.getUserList({});
    this.props.getAdminList({});
  }
  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   this.props.form.validateFields((err, values) => {
  //     if (!err) {
  //       console.log('Received values of form: ', values);
  //       const formatValues = {};
  //       _.mapKeys(values, (value, key) => {
  //         if (_.isUndefined(value)) {
  //           formatValues[key] = '';
  //         } else {
  //           formatValues[key] = value;
  //         }
  //       });
  //       this.props.getUserList({ ...formatValues, permission: !_.isEmpty(values.permission) ? (values.permission === 'normal' ? 0 : 1) : '' });
  //       this.props.getAdminList({ ...formatValues, permission: !_.isEmpty(values.permission) ? (values.permission === 'normal' ? 0 : 1) : '' });
  //     }
  //   });
  // };
  // handleModalSubmit = (e) => {
  //   e.preventDefault();
  //   const { type } = this.state;
  //   this.props.form.validateFields((err, values) => {
  //     if (!err) {
  //       switch (type) {
  //         case 'add':
  //           if (values['modal-permission'] === 'normal') {
  //             const userObj = {
  //               username: values['modal-username'],
  //               password: values['modal-password'],
  //               name: values['modal-name'],
  //               sex: values['modal-sex'],
  //               birthday: values['modal-birthday'],
  //               tel: values['modal-tel'],
  //               email: values['modal-email'],
  //               permission: values.permission,
  //               qq: values.qq,
  //             };
  //             this.props.addUser(userObj);
  //           } else {
  //             const adminObj = {
  //               username: values['modal-username'],
  //               password: values['modal-password'],
  //               email: values['modal-email'],
  //               permission: values.permission,
  //             };
  //             this.props.addAdmin(adminObj);
  //           }
  //           break;
  //         case 'update':
  //           if (values['modal-permission'] === 'normal') {
  //             const userObj = {
  //               username: values['modal-username'],
  //               password: values['modal-password'],
  //               name: values['modal-name'],
  //               sex: values['modal-sex'],
  //               birthday: values['modal-birthday'],
  //               tel: values['modal-tel'],
  //               email: values['modal-email'],
  //               permission: values.permission,
  //               qq: values.qq,
  //             };
  //             this.props.updateNormalUser(userObj);
  //           } else {
  //             const adminObj = {
  //               username: values['modal-username'],
  //               password: values['modal-password'],
  //               email: values['modal-email'],
  //               permission: values.permission,
  //             };
  //             this.props.updateAdminUser(adminObj);
  //           }
  //           break;
  //         default:
  //           this.setState({
  //             visible: false,
  //           });
  //       }
  //     }
  //   });
  // };
  handleSearch = (item) => {
    // const { resetFields } = this.props.form;
    // resetFields();
    this.setState({
      visible: true,
      type: 'search',
      userItem: item,
    });
  };
  handleAdd = () => {
    // const { resetFields } = this.props.form;
    // resetFields();
    this.setState({
      visible: true,
      type: 'add',
      userItem: undefined,
    });
  };
  handleUpdate = (item) => {
    // const { resetFields } = this.props.form;
    // resetFields();
    this.setState({
      visible: true,
      type: 'update',
      userItem: item,
    });
  };
  handleDelete = (item) => {
    confirm({
      title: '你确定要删除该用户么?',
      content: '此操作无法恢复，请慎重！',
      okText: '确定',
      okType: 'danger',
      cancelText: '取消',
      onOk() {
        console.log('OK');
        if (item.permission === '0') {
          this.props.updateNormalUser({ ...item, deleteFlag: 1 });
        } else {
          this.props.updateAdminUser({ ...item, deleteFlag: 1 });
        }
      },
      onCancel() {
        console.log('Cancel');
      },
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
    const { adminList, userList } = this.props;
    const { userItem } = this.state;
    let userData = [];
    if ((!_.isEmpty(adminList) && !_.isEmpty(adminList.data)) || (!_.isEmpty(userList) && !_.isEmpty(userList.data))) {
      userData = adminList.data.concat(userList.data);
    }
    const columns = [{
      title: '用户id',
      dataIndex: '_id',
      key: '_id',
    }, {
      title: '账号',
      dataIndex: 'username',
      key: 'username',
    }, {
      title: '邮箱',
      dataIndex: 'email',
      key: 'email',
    }, {
      title: '手机号',
      dataIndex: 'tel',
      key: 'tel',
    }, {
      title: 'QQ',
      dataIndex: 'qq',
      key: 'qq',
    }, {
      title: '角色',
      dataIndex: 'permission',
      key: 'permission',
      render: (text, record) => {
        return parseInt(text) > 0 ? '管理员' : '普通用户';
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
      <div className="console-user">
        <Card className="console-user-card" title="用户管理">
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
                <Button type="default" onClick={this.handleAdd}>添加用户</Button>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="table-fields">
                <Table
                  columns={columns}
                  dataSource={userData}
                />
              </div>
            </Col>
          </Row>
        </Card>
        <div className="console-user-modal">
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
            />
          </Modal>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userList: userListSelector(state),
    adminList: adminListSelector(state),
  };
};

const mapDispatchToProps = {
  onViewInit,
  getAdminList,
  getUserList,
  addUser,
  addAdminUser,
  updateAdminUser,
  updateNormalUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
