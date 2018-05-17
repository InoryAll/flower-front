/**
 * 鲜花销售系统用户管理页
 * Created by tianrenjie on 2018/5/17
 */
import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Row, Col, Card, Form, Input, Button, Table } from 'antd';
import './User.less';

const FormItem = Form.Item;
class User extends React.Component {
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
    const columns = [{
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <Link>{text}</Link>,
    }, {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    }, {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    }, {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <span>
          <Link>Action 一 {record.name}</Link>
        </span>
      ),
    }];
    const data = [{
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    }, {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    }, {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    }];
    return (
      <div className="console-user">
        <Card className="console-user-card" title="用户管理">
          <Row>
            <Col>
              <div className="form-search-fields">
                <Form onSubmit={this.handleSubmit} layout="inline">
                  <FormItem
                    label="Field A"
                  >
                    <Input placeholder="input placeholder" />
                  </FormItem>
                  <FormItem
                    label="Field B"
                  >
                    <Input placeholder="input placeholder" />
                  </FormItem>
                  <FormItem>
                    <Button type="primary">搜索</Button>
                  </FormItem>
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
                  dataSource={data}
                />
              </div>
            </Col>
          </Row>
        </Card>
      </div>
    );
  }
}
const UserForm = Form.create()(User);
export default UserForm;
