/**
 * 鲜花销售系统用户管理页
 * Created by tianrenjie on 2018/5/17
 */
import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Row, Col, Card, Form, Input, Button, Table } from 'antd';
import _ from 'lodash';
import moment from 'moment';
import { connect } from 'react-redux';
import Settings from '../../common/setting';
import { onViewInit } from './action/action';
import { getInfoList } from '../../user/info/action/action';
import { infoSelector } from '../../user/info/selector/selector';
import './Info.less';

const FormItem = Form.Item;
class Info extends React.Component {
  static propTypes = {
    form: PropTypes.object.isRequired,
    infos: PropTypes.object.isRequired,
    onViewInit: PropTypes.func.isRequired,
    getInfoList: PropTypes.func.isRequired,
  };
  componentWillMount() {
    this.props.onViewInit();
    this.props.getInfoList();
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
    return (
      <div className="console-info">
        <Card className="console-info-card" title="文案管理">
          <Row>
            <Col>
              <div className="form-search-fields">
                <Form onSubmit={this.handleSubmit} layout="inline">
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
                          <Input placeholder="输入文案名" />
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
                <Button type="default">添加文案</Button>
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
};

const InfoForm = Form.create()(Info);
export default connect(mapStateToProps, mapDispatchToProps)(InfoForm);
