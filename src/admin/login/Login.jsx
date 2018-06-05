/**
 * 鲜花销售系统后台登录页
 * Created by tianrenjie on 2018/5/17
 */
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Form, Icon, Input, Button, Card } from 'antd';
import { onViewInit, getAdminUser } from './action/action';
import { adminSelector } from './selector/selector';
import './Login.less';

const FormItem = Form.Item;
class Login extends React.Component {
  static propTypes = {
    form: PropTypes.object.isRequired,
    admin: PropTypes.object.isRequired,
    onViewInit: PropTypes.func.isRequired,
    getAdminUser: PropTypes.func.isRequired,
  };
  componentWillMount() {
    this.props.onViewInit();
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.getAdminUser({ ...values });
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="adminlogin">
        <div className="adminlogin-card">
          <Card className="adminlogin-card-content">
            <h1 className="adminlogin-card-content-title">鲜花销售系统管理员后台</h1>
            <Form onSubmit={this.handleSubmit} className="login-form">
              <FormItem
                hasFeedback={true}
              >
                {getFieldDecorator('username', {
                  rules: [{ required: true, message: '请输入用户名!' }],
                })(
                  <Input prefix={<Icon type="user" />} placeholder="请输入用户名" />
                )}
              </FormItem>
              <FormItem
                hasFeedback={true}
              >
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: '请输入密码!' }],
                })(
                  <Input prefix={<Icon type="lock" />} type="password" autocomplete="new-password" placeholder="请输入密码" />
                )}
              </FormItem>
              <FormItem>
                <Button type="primary" htmlType="submit" className="login-form-button">
                  登录
                </Button>
              </FormItem>
            </Form>
          </Card>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    admin: adminSelector(state),
  };
};

const mapDispatchToProps = {
  onViewInit,
  getAdminUser,
};

const LoginForm = Form.create()(Login);
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
