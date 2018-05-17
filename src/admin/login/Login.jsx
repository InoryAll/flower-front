/**
 * 鲜花销售系统后台登录页
 * Created by tianrenjie on 2018/5/17
 */
import React, { PropTypes } from 'react';
import { Form, Icon, Input, Button, Card } from 'antd';
import './Login.less';

const FormItem = Form.Item;
class Login extends React.Component {
  static propTypes = {
    form: PropTypes.object.isRequired,
  };
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
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
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
                  <Input prefix={<Icon type="lock" />} type="password" placeholder="请输入密码" />
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

const LoginForm = Form.create()(Login);
export default LoginForm;
