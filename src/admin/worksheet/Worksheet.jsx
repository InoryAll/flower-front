/**
 * 鲜花销售系统用户管理页
 * Created by tianrenjie on 2018/5/17
 */
import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import _ from 'lodash';
import moment from 'moment';
import { Row, Col, Card, Form, Input, Button, Table, DatePicker } from 'antd';
import { onViewInit, getWorksheet } from './action/action';
import { worksheetSelector } from './selector/selector';
import './Worksheet.less';

const FormItem = Form.Item;
const RangePicker = DatePicker.RangePicker;
class Worksheet extends React.Component {
  static propTypes = {
    form: PropTypes.object.isRequired,
    worksheets: PropTypes.object.isRequired,
    getWorksheet: PropTypes.func.isRequired,
    onViewInit: PropTypes.func.isRequired,
  };
  componentWillMount() {
    this.props.onViewInit();
    this.props.getWorksheet();
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
                <Form onSubmit={this.handleSubmit} layout="inline">
                  <Row className="form-search-fields-row">
                    <Col span={8}>
                      <FormItem
                        label="工作记录id"
                        {...formItemLayout}
                      >
                        {getFieldDecorator('name', {
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
                        {getFieldDecorator('name', {
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
                        {getFieldDecorator('modal-birthday', {
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
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="action-fields">
                <Button type="default">添加工作记录</Button>
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
      </div>
    );
  }
}

const mapStateToProps  = (state) => {
  return {
    worksheets: worksheetSelector(state),
  };
};

const mapDispatchToProps = {
  onViewInit,
  getWorksheet,
};

const WorksheetForm = Form.create()(Worksheet);
export default connect(mapStateToProps, mapDispatchToProps)(WorksheetForm);
