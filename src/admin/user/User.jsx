/**
 * 鲜花销售系统用户管理页
 * Created by tianrenjie on 2018/5/17
 */
import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Row, Col, Card, Form, Input, Button, Table } from 'antd';
import { onViewInit } from './action/action';
import { getUserList, getAdminList } from '../index/action/action';
import { userListSelector, adminListSelector } from '../index/selector/selector';
import './User.less';

const FormItem = Form.Item;
class User extends React.Component {
  static propTypes = {
    form: PropTypes.object.isRequired,
    userList: PropTypes.object.isRequired,
    adminList: PropTypes.object.isRequired,
    getUserList: PropTypes.func.isRequired,
    getAdminList: PropTypes.func.isRequired,
  };
  componentWillMount() {
    this.props.getUserList();
    this.props.getAdminList();
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
    const { adminList, userList } = this.props;
    let userData = [];
    if (!_.isEmpty(adminList) && !_.isEmpty(adminList.data) && !_.isEmpty(userList) && !_.isEmpty(userList.data)) {
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
          <Link>查看</Link>
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
      <div className="console-user">
        <Card className="console-user-card" title="用户管理">
          <Row>
            <Col>
              <div className="form-search-fields">
                <Form onSubmit={this.handleSubmit} layout="inline">
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
                <Button type="default">添加用户</Button>
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
};

const UserForm = Form.create()(User);
export default connect(mapStateToProps, mapDispatchToProps)(UserForm);
