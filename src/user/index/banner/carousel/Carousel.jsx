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
      '../../../../../static/img/logo/logo.jpg',
      '../../../../../static/img/logo/logo.jpg',
    ],
  };
  render() {
    return (
      <div className="carousel">
        <BannerAnim prefixCls="banner-user" autoPlay arrow={false}>
          <Element
            prefixCls="banner-user-elem"
            key="0"
          >
            <BgElement
              key="bg-1"
              className="bg-1"
              style={{
                backgroundColor: '#64CBCC',
              }}
            />
          </Element>
          <Element
            prefixCls="banner-user-elem"
            key="1"
          >
            <BgElement
              key="bg-2"
              className="bg-2"
              style={{
                backgroundColor: '#64CBCC',
              }}
            />
          </Element>
        </BannerAnim>
      </div>
    );
  }
}

export default Carousel;
