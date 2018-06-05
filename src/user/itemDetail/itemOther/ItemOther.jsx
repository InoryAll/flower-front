/**
 * 鲜花销售商品详情页面商品的评价
 * Created by tianrenjie on 2018/5/5
 */
import React, { PropTypes } from 'react';
import _ from 'lodash';
import { Row, Col, Tabs, Pagination, Progress, Icon, Modal, Button, Rate, Input, message } from 'antd';
import './ItemOther.less';
import ItemComment from './itemComment/ItemComment';

const TabPane = Tabs.TabPane;
const { TextArea } = Input;
class ItemOther extends React.Component {
  static propTypes = {
    comment: PropTypes.object.isRequired,
    item: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    orderList: PropTypes.object.isRequired,
    addItemComment: PropTypes.func.isRequired,
  };
  state = {
    currentPage: 1,
    pageSize: 10,
    totalPage: undefined,
    visible: false,
    level: 0,
    content: '',
  };
  onSizeChange = (page, pageSize) => {
    this.setState({
      currentPage: page,
      pageSize,
    });
  };
  handleTabClick = (key) => {
    console.log(key);
  };
  handleComment = (item) => {
    this.setState({
      visible: true,
    });
  };
  handleCancel = () => {
    this.setState({
      visible: false,
      level: 0,
      content: '',
    });
  };
  handleOk = () => {
    const { item, user, orderList } = this.props;
    const params = {
      level: this.state.level,
      content: this.state.content,
      itemId: item.data[0]._id,
      itemName: item.data[0].name,
      userId: user._id,
      userName: user.username,
      adminId: undefined,
      adminName: undefined,
      timestamp: new Date().getTime(),
      deleteFlag: 0,
    };
    if (JSON.stringify(orderList).indexOf(item.data[0]._id) > -1) {
      this.props.addItemComment(params);
      this.setState({
        visible: false,
        level: 0,
        content: '',
      });
    } else {
      message.error('购买商品后才能作评价！');
      this.setState({
        level: 0,
        content: '',
      });
    }
  };
  onRateChange = (value) => {
    this.setState({
      level: value,
    });
  };
  onTextAreaChange = (event) => {
    this.setState({
      content: event.target.value,
    });
  };
  render() {
    const { comment } = this.props;
    const comments = [];
    if (!_.isEmpty(comment.data)) {
      comment.data.slice((this.state.currentPage - 1) * this.state.pageSize,
        this.state.currentPage * this.state.pageSize).map((item, index) => {
          comments.push(<ItemComment commentItem={ { ...item } } { ...this.props } />);
          return true;
        });
    }
    return (
      <div className="itemother">
        <Row>
          <Col>
            <div className="itemother-comment-total">
              <Row>
                <Col span={4}>
                  <div className="itemother-comment-total-left">
                    <span className="itemother-comment-total-left-span"><strong className="itemother-comment-total-left-span-strong">{!_.isEmpty(comment.data) ? 100 * parseFloat(comment.data.filter(item => item.level === '5').length / comment.data.length).toFixed(2) : 0}</strong>%</span>
                    好评
                  </div>
                </Col>
                <Col span={16}>
                  <ul className="itemother-comment-total-center">
                    <li className="itemother-comment-total-center-li">好评({!_.isEmpty(comment.data) ? 100 * parseFloat(comment.data.filter(item => item.level === '5').length / comment.data.length).toFixed(2) : 0}%)<span className="itemother-comment-total-center-li-span"><Progress showInfo={false} percent={!_.isEmpty(comment.data) ? 100 * parseFloat(comment.data.filter(item => item.level === '5').length / comment.data.length).toFixed(2) : 0} size="small" /></span></li>
                    <li className="itemother-comment-total-center-li">中评({!_.isEmpty(comment.data) ? 100 * parseFloat(comment.data.filter(item => item.level >= 3 && item.level < 5).length / comment.data.length).toFixed(2) : 0}%)<span className="itemother-comment-total-center-li-span"><Progress showInfo={false} percent={!_.isEmpty(comment.data) ? 100 * parseFloat(comment.data.filter(item => item.level >= 3 && item.level < 5).length / comment.data.length).toFixed(2) : 0} size="small" /></span></li>
                    <li className="itemother-comment-total-center-li">差评({!_.isEmpty(comment.data) ? 100 * parseFloat(comment.data.filter(item => item.level < 3).length / comment.data.length).toFixed(2) : 0}%)<span className="itemother-comment-total-center-li-span"><Progress showInfo={false} percent={!_.isEmpty(comment.data) ? 100 * parseFloat(comment.data.filter(item => item.level < 3).length / comment.data.length).toFixed(2) : 0} size="small" /></span></li>
                  </ul>
                </Col>
                <Col span={4}>
                  <div className="itemother-comment-total-right">
                    <p className="itemother-comment-total-right-title">您可对已购商品进行评价</p>
                    <button className="itemother-comment-total-right-btn" onClick={() => { this.handleComment(comment.data); }}>
                      <span className="itemother-comment-total-right-btn-span"><Icon type="message" /></span>
                      评价商品
                    </button>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="itemother-comment-list">
              <div className="itemother-comment-list-tabs">
                <Tabs defaultActiveKey="all" onChange={this.handleTabClick}>
                  <TabPane tab="商品评价" key="all">
                    <div className="itemother-comment-list-content">
                      {comments}
                    </div>
                    <div className="itemother-comment-list-pagination">
                      <Pagination
                        onChange={this.onSizeChange}
                        defaultCurrent={1}
                        current={this.state.currentPage || 1}
                        total={(comment.data && comment.data.length) || 1}
                        pageSize={this.state.pageSize || 10}
                      />
                    </div>
                  </TabPane>
                </Tabs>
              </div>
            </div>
          </Col>
        </Row>
        <div className="itemother-modal">
          <Modal
            title="评价商品"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            footer={[
              <Button key="back" onClick={this.handleCancel}>返回</Button>,
              <Button key="submit" type="danger" onClick={this.handleOk}>
                提交
              </Button>,
            ]}
          >
            <div>
              <form className="itemother-modal-form">
                <div className="form-content">
                  <div className="form-item">
                    <label className="form-item-label" htmlFor="username">评价等级：</label>
                    <div className="form-item-rate">
                      <Rate onChange={this.onRateChange} value={this.state.level} className="form-item-rate-detail" />
                    </div>
                  </div>
                  <div className="form-item">
                    <label className="form-item-label" htmlFor="username">具体细节：</label>
                    <TextArea onChange={this.onTextAreaChange} value={this.state.content} className="form-item-textarea" rows={8} />
                  </div>
                </div>
              </form>
            </div>
          </Modal>
        </div>
      </div>
    );
  }
}

export default ItemOther;
