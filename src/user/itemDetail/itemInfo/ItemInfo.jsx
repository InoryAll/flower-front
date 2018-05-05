/**
 * 鲜花销售商品详情页面商品基本信息
 * Created by tianrenjie on 2018/5/5
 */
import React, { PropTypes } from 'react';
import { Row, Col, InputNumber, Icon } from 'antd';
import './ItemInfo.less';
import img from '../../../../static/img/itemDetail/1.jpg';

class ItemInfo extends React.Component {
  render() {
    return (
      <div className="iteminfo">
        <Row>
          <Col span={8}>
            <div className="iteminfo-left">
              <img src={img} alt="花之韵" className="iteminfo-left-img" />
            </div>
          </Col>
          <Col span={16}>
            <div className="iteminfo-right">
              <h3 className="iteminfo-right-title">相恋一生</h3>
              <div className="iteminfo-right-info">
                <p className="iteminfo-right-info-p">材料：19枝蓝色妖姬，搭配桔梗、高山积雪</p>
                <p className="iteminfo-right-info-p">包装：米白色韩式卡纸圆形包装，配香槟色缎带系蝴蝶结束扎。</p>
                <p className="iteminfo-right-info-p">花语：把我最好的爱给你，是我全部的温柔</p>
                <p className="iteminfo-right-info-p">附送：免费附送精美贺卡，代写您的祝福。(您下单时可填写留言栏)</p>
                <p className="iteminfo-right-info-p">配送：本地区各市县、乡镇、街道（市区内免费配送）</p>
                <p className="iteminfo-right-info-p">说明：由于鲜花包扎各地的花艺师不同，可能在花束的形式和搭配上与图片不完全一致，但我们保证鲜花的主花材品种、新鲜程度、数量、颜色与说明一致，谢谢。</p>
              </div>
              <div className="iteminfo-right-action">
                <div className="iteminfo-right-action-price">
                  <p className="iteminfo-right-action-price-pre">市场价：￥529.00</p>
                  <p className="iteminfo-right-action-price-now">优惠价：<span className="iteminfo-right-action-price-now-span">￥329.00</span></p>
                </div>
                <div className="iteminfo-right-action-btn">
                  <span className="iteminfo-right-action-btn-count">
                    <InputNumber className="iteminfo-right-action-btn-count-input" size="large" min={1} max={100000} defaultValue={3} />
                  </span>
                  <button className="iteminfo-right-action-btn-buy">
                    <span className="iteminfo-right-action-btn-buy-icon">
                      <Icon type="shopping-cart" />
                    </span>
                    立即购买
                  </button>
                  <button className="iteminfo-right-action-btn-add">
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
