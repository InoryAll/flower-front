/**
 * 鲜花销售商品详情页面商品的评价
 * Created by tianrenjie on 2018/5/5
 */
import React, { PropTypes } from 'react';
import { Row, Col, Tabs, Pagination, Progress, Icon } from 'antd';
import './ItemOther.less';

const TabPane = Tabs.TabPane;
class ItemOther extends React.Component {
  static propTypes = {};
  render() {
    return (
      <div className="itemother">
        <Row>
          <Col>
            <div className="itemother-comment-total">
              <Row>
                <Col span={4}>
                  <div className="itemother-comment-total-left">
                    <span className="itemother-comment-total-left-span"><strong className="itemother-comment-total-left-span-strong">100</strong>%</span>
                    好评
                  </div>
                </Col>
                <Col span={16}>
                  <ul className="itemother-comment-total-center">
                    <li className="itemother-comment-total-center-li">好评(100%)<span className="itemother-comment-total-center-li-span"><Progress showInfo={false} percent={100} size="small" /></span></li>
                    <li className="itemother-comment-total-center-li">中评(0%)<span className="itemother-comment-total-center-li-span"><Progress showInfo={false} percent={0} size="small" /></span></li>
                    <li className="itemother-comment-total-center-li">差评(0%)<span className="itemother-comment-total-center-li-span"><Progress showInfo={false} percent={0} size="small" /></span></li>
                  </ul>
                </Col>
                <Col span={4}>
                  <div className="itemother-comment-total-right">
                    <p>您可对已购商品进行评价</p>
                    <button>
                      <span><Icon type="message" /></span>
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

            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ItemOther;
