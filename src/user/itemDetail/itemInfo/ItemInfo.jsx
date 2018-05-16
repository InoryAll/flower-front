/**
 * 鲜花销售商品详情页面商品基本信息
 * Created by tianrenjie on 2018/5/5
 */
import React, { PropTypes } from 'react';
import { Row, Col, InputNumber, Icon } from 'antd';
import Settings from '../../../common/setting';
import Cookie from '../../../common/cookie';
import './ItemInfo.less';
import img from '../../../../static/img/itemDetail/1.jpg';

class ItemInfo extends React.Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
    addGood: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired,
  };
  handleBuy = (item) => {
  };
  handleAddToCart = (item) => {
    const params = {
      itemId: item._id,
      itemName: item.name,
      itemPrice: item.nowPrice,
      url: item.url,
      count: 1,
      itemTotalPrice: item.nowPrice,
      userId: Cookie.getCookie('_id'),
      userName: Cookie.getCookie('username'),
      deleteFlag: 0,
    };
    this.props.addGood(params);
  };
  render() {
    const { item } = this.props;
    Settings.initSettings();
    return (
      <div className="iteminfo">
        <Row>
          <Col span={8}>
            <div className="iteminfo-left">
              <img src={item.data[0].url} alt="花之韵" className="iteminfo-left-img" />
            </div>
          </Col>
          <Col span={16}>
            <div className="iteminfo-right">
              <h3 className="iteminfo-right-title">{item.data[0].name}</h3>
              <div className="iteminfo-right-info">
                <p className="iteminfo-right-info-p">材料：{Settings.mapValueToLabel(item.data[0].material)}</p>
                <p className="iteminfo-right-info-p">包装：{item.data[0].pack}</p>
                <p className="iteminfo-right-info-p">花语：{item.data[0].meaning}</p>
                <p className="iteminfo-right-info-p">附送：{item.data[0].attach}</p>
                <p className="iteminfo-right-info-p">配送：{item.data[0].send}</p>
                <p className="iteminfo-right-info-p">说明：{item.data[0].detail}</p>
              </div>
              <div className="iteminfo-right-action">
                <div className="iteminfo-right-action-price">
                  <p className="iteminfo-right-action-price-pre">市场价：{item.data[0].prePrice}</p>
                  <p className="iteminfo-right-action-price-now">优惠价：<span className="iteminfo-right-action-price-now-span">{item.data[0].nowPrice}</span></p>
                </div>
                <div className="iteminfo-right-action-btn">
                  <span className="iteminfo-right-action-btn-count">
                    <InputNumber className="iteminfo-right-action-btn-count-input" size="large" min={1} max={100000} defaultValue={1} />
                  </span>
                  <button className="iteminfo-right-action-btn-buy" onClick={() => { this.handleBuy(item.data[0]); }}>
                    <span className="iteminfo-right-action-btn-buy-icon">
                      <Icon type="shopping-cart" />
                    </span>
                    立即购买
                  </button>
                  <button className="iteminfo-right-action-btn-add" onClick={() => { this.handleAddToCart(item.data[0]); }}>
                    加入购物车
                  </button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ItemInfo;
