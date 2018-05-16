/**
 * 鲜花销售商品详情页面商品的评价
 * Created by tianrenjie on 2018/5/5
 */
import React, { PropTypes } from 'react';
import _ from 'lodash';
import { Row, Col, Tabs, Pagination, Progress, Icon } from 'antd';
import './ItemOther.less';
import ItemComment from './itemComment/ItemComment';

const TabPane = Tabs.TabPane;
class ItemOther extends React.Component {
  static propTypes = {
    comment: PropTypes.object.isRequired,
  };
  state = {
    currentPage: 1,
    pageSize: 10,
    totalPage: undefined,
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
                    <span className="itemother-comment-total-left-span"><strong className="itemother-comment-total-left-span-strong">{comment.data && 100 * parseFloat(comment.data.filter(item => item.level === '5').length / comment.data.length).toFixed(2)}</strong>%</span>
                    好评
                  </div>
                </Col>
                <Col span={16}>
                  <ul className="itemother-comment-total-center">
                    <li className="itemother-comment-total-center-li">好评({comment.data && 100 * parseFloat(comment.data.filter(item => item.level === '5').length / comment.data.length).toFixed(2)}%)<span className="itemother-comment-total-center-li-span"><Progress showInfo={false} percent={100} size="small" /></span></li>
                    <li className="itemother-comment-total-center-li">中评({comment.data && 100 * parseFloat(comment.data.filter(item => item.level >= 3 && item.level < 5).length / comment.data.length).toFixed(2)}%)<span className="itemother-comment-total-center-li-span"><Progress showInfo={false} percent={0} size="small" /></span></li>
                    <li className="itemother-comment-total-center-li">差评({comment.data && 100 * parseFloat(comment.data.filter(item => item.level < 3).length / comment.data.length).toFixed(2)}%)<span className="itemother-comment-total-center-li-span"><Progress showInfo={false} percent={0} size="small" /></span></li>
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
      </div>
    );
  }
}

export default ItemOther;
