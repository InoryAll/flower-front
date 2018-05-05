/**
 * 鲜花销售商品详情页面商品的评价
 * Created by tianrenjie on 2018/5/5
 */
import React, { PropTypes } from 'react';
import { Row, Col, Avatar, Icon } from 'antd';
import { Link } from 'react-router';
import './ItemComment.less';

class ItemComment extends React.Component {
  static propTypes = {};
  render() {
    return (
      <div className="itemcomment">
        <Row>
          <Col span={6} offset={2}>
            <div className="itemcomment-avatar">
              <Avatar icon="user" />
            </div>
            <div className="itemcomment-info">
              <Link className="itemcomment-info-name">李**</Link>
              <span className="itemcomment-info-date">[2018-05-04]</span>
            </div>
          </Col>
        </Row>
        <Row>
          <Col offset={2}>
            <div className="itemcomment-detail">
              <p className="itemcomment-detail-p">用户评分：
                <span className="itemcomment-detail-p-star">
                  <Icon type="star" className="icon-star" />
                  <Icon type="star" className="icon-star" />
                  <Icon type="star" className="icon-star" />
                  <Icon type="star" className="icon-star" />
                  <Icon type="star" className="icon-star" />
                </span>
              </p>
              <p className="itemcomment-detail-p">评价详情：很贴心送的很快，麻麻生日很开心</p>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ItemComment;
