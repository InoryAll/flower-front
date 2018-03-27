/**
 * 鲜花销售主页Carousel设计
 * Created by tianrenjie on 2018/3/27
 */
import React, { PropTypes } from 'react';
import BannerAnim, { Element } from 'rc-banner-anim';
import TweenOne from 'rc-tween-one';
import 'rc-banner-anim/assets/index.css';
import './Carousel.less';

const BgElement = Element.BgElement;
class Carousel extends React.Component {
  static propTypes = {};
  state = {
    imgUrlArray: [
      'http://127.0.0.1:9000/static/img/logo/logo.jpg',
      'http://127.0.0.1:9000/static/img/logo/logo.jpg',
    ],
  };
  render() {
    return (
      <div className="carousel">
        <BannerAnim prefixCls="banner-user" autoPlay>
          <Element
            prefixCls="banner-user-elem"
            key="0"
          >
            <BgElement
              key="bg"
              className="bg"
              style={{
                background: `url(${this.state.imgUrlArray[0]}) no-repeat`,
                backgroundSize: '100% 100%',
              }}
            />
          </Element>
          <Element
            prefixCls="banner-user-elem"
            key="1"
          >
            <BgElement
              key="bg"
              className="bg"
              style={{
                background: '#64CBCC',
              }}
            />
          </Element>
        </BannerAnim>
      </div>
    );
  }
}

export default Carousel;
