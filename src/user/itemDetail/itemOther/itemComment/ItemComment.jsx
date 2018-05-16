/**
 * 鲜花销售商品详情页面商品的评价
 * Created by tianrenjie on 2018/5/5
 */
import React, { PropTypes } from 'react';
import moment from 'moment';
import _ from 'lodash';
import { Row, Col, Avatar, Icon } from 'antd';
import { Link } from 'react-router';
import './ItemComment.less';

class ItemcommentItem extends React.Component {
  static propTypes = {
    commentItem: PropTypes.object.isRequired,
  };
  render() {
    const { commentItem } = this.props;
    const stars = [];
    if (!_.isEmpty(commentItem.level)) {
      for (let i = 0; i < commentItem.level; i++) {
        stars.push(<Icon type="star" className="icon-star" />);
      }
    }
    return (
      <div className="itemcomment">
        <Row>
          <Col span={6} offset={2}>
            <div className="itemcomment-avatar">
              <Avatar icon="user" />
            </div>
            <div className="itemcomment-info">
              <Link className="itemcomment-info-name">{commentItem.userName}</Link>
              <span className="itemcomment-info-date">[{moment(parseInt(commentItem.timestamp)).format('YYYY-MM-DD HH:mm:ss')}]</span>
            </div>
          </Col>
        </Row>
        <Row>
          <Col offset={2}>
            <div className="itemcomment-detail">
              <p className="itemcomment-detail-p">用户评分：
                <span className="itemcomment-detail-p-star">
                  {stars}
                </span>
              </p>
              <p className="itemcomment-detail-p">评价详情：{commentItem.content}</p>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ItemcommentItem;
