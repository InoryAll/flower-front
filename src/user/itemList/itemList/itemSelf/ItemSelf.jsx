/**
 * 鲜花销售商品列表页面商品个体
 * Created by tianrenjie on 2018/5/4
 */
import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Row, Col, Icon } from 'antd';
import img from '../../../../../static/img/itemList/1.jpg';
import './ItemSelf.less';

class ItemSelf extends React.Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
  };
  render() {
    const { item } = this.props;
    return (
      <div className="itemself">
        <Row>
          <Col>
            <div className="itemself-pic">
              <Link to={item.link} className="itemself-pic-link">
                <img src={item.img} alt="花之韵" className="itemself-pic-link-img" />
              </Link>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="itemself-intro">
              <Row>
                <Col>
                  <div className="itemself-des">
                    <Link to={item.link} className="itemself-des-link">
                      <p className="itemself-des-title">{item.title}</p>
                      <p className="itemself-des-detail">{item.description}</p>
                    </Link>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="itemself-price">
                    <span className="itemself-price-now">{item.nowPrice}</span>
                    <span className="itemself-price-pre">{item.prePrice}</span>
                    <span className="itemself-price-star">
                      <Icon type="star" className="icon-star" />
                      <Icon type="star" className="icon-star" />
                      <Icon type="star" className="icon-star" />
                      <Icon type="star" className="icon-star" />
                      <Icon type="star" className="icon-star" />
                    </span>
                  </div>
                </Col>
              </Row>
              <Row className="itemself-intro-add">
                <Col span={12}>
                  <div className="itemself-count">
                    <p className="itemself-count-number"><Link className="itemself-count-number-link" to="">{item.sales}</Link></p>
                    <p className="itemself-count-tip">商品销量</p>
                  </div>
                </Col>
                <Col span={12}>
                  <div className="itemself-comment">
                    <p className="itemself-comment-number"><Link className="itemself-comment-number-link" to="">{item.comments}</Link></p>
                    <p className="itemself-comment-tip">用户评论</p>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="itemself-cart-add">
                    <button className="itemself-cart-add-btn"><span className="itemself-cart-add-btn-icon"><Icon type="shopping-cart" /></span>加入购物车</button>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ItemSelf;
