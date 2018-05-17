/**
 * 鲜花销售主页特征筛选器
 * Created by tianrenjie on 2018/3/26
 */
import React, { PropTypes } from 'react';
import { Row, Col, Icon } from 'antd';
import { Link, browserHistory } from 'react-router';
import './Category.less';

class Category extends React.Component {
  static propTypes = {};
  onSearch = (attribute, value) => {
    console.log(attribute, value);
    browserHistory.push('/itemList?condition='.concat(value));
  };
  render() {
    return (
      <div className="category">
        <Row className="category-top-row">
          <Col>
            <Icon type="bars" className="category-logo" />
            <Link to="" className="category-title">所有商品分类</Link>
          </Col>
        </Row>
        <Row className="category-bottom-row">
          <Col>
            <ul>
              <li className="category-menu">
                <h4 className="category-menu-title"><Link className="category-menu-title-a" to="">鲜花花材</Link></h4>
                <ul>
                  <li className="category-menu-item"><Link onClick={() => { this.onSearch('material', 'redRose'); }} className="category-menu-item-a">红玫瑰</Link></li>
                  <li className="category-menu-item"><Link onClick={() => { this.onSearch('material', 'pinkRose'); }} className="category-menu-item-a">粉玫瑰</Link></li>
                  <li className="category-menu-item"><Link onClick={() => { this.onSearch('material', 'blueRose'); }} className="category-menu-item-a">蓝玫瑰</Link></li>
                  <li className="category-menu-item"><Link onClick={() => { this.onSearch('material', 'whiteLily'); }} className="category-menu-item-a">白百合</Link></li>
                  <li className="category-menu-item"><Link onClick={() => { this.onSearch('material', 'pinkLily'); }} className="category-menu-item-a">粉百合</Link></li>
                  <li className="category-menu-item"><Link onClick={() => { this.onSearch('material', 'callas'); }} className="category-menu-item-a">马蹄莲</Link></li>
                  <li className="category-menu-item"><Link onClick={() => { this.onSearch('material', 'babysbreath'); }} className="category-menu-item-a">满天星</Link></li>
                  <li className="category-menu-item"><Link onClick={() => { this.onSearch('material', 'carnations'); }} className="category-menu-item-a">康乃馨</Link></li>
                  <li className="category-menu-item"><Link onClick={() => { this.onSearch('material', 'sunflower'); }} className="category-menu-item-a">向日葵</Link></li>
                  <li className="category-menu-item"><Link onClick={() => { this.onSearch('material', 'gerbera'); }} className="category-menu-item-a">扶郎</Link></li>
                  <li className="category-menu-item"><Link onClick={() => { this.onSearch('material', 'tulip'); }} className="category-menu-item-a">郁金香</Link></li>
                  <li className="category-menu-item"><Link onClick={() => { this.onSearch('material', 'champagneRose'); }} className="category-menu-item-a">香槟玫瑰</Link></li>
                </ul>
              </li>
              <li className="category-menu">
                <h4 className="category-menu-title"><Link className="category-menu-title-a" to="">鲜花用途</Link></h4>
                <ul>
                  <li className="category-menu-item"><Link onClick={() => { this.onSearch('usage', 'love'); }} className="category-menu-item-a" >爱情鲜花</Link></li>
                  <li className="category-menu-item"><Link onClick={() => { this.onSearch('usage', 'friendship'); }} className="category-menu-item-a" >友情鲜花</Link></li>
                  <li className="category-menu-item"><Link onClick={() => { this.onSearch('usage', 'birthday'); }} className="category-menu-item-a" >生日鲜花</Link></li>
                  <li className="category-menu-item"><Link onClick={() => { this.onSearch('usage', 'greetings'); }} className="category-menu-item-a" >问候长辈</Link></li>
                  <li className="category-menu-item"><Link onClick={() => { this.onSearch('usage', 'sympathy'); }} className="category-menu-item-a" >探病慰问</Link></li>
                  <li className="category-menu-item"><Link onClick={() => { this.onSearch('usage', 'apology'); }} className="category-menu-item-a" >道歉鲜花</Link></li>
                  <li className="category-menu-item"><Link onClick={() => { this.onSearch('usage', 'congratulation'); }} className="category-menu-item-a" >祝贺鲜花</Link></li>
                  <li className="category-menu-item"><Link onClick={() => { this.onSearch('usage', 'business'); }} className="category-menu-item-a" >商务用花</Link></li>
                  <li className="category-menu-item"><Link onClick={() => { this.onSearch('usage', 'wedding'); }} className="category-menu-item-a" >婚庆鲜花</Link></li>
                </ul>
              </li>
              <li className="category-menu">
                <h4 className="category-menu-title"><Link className="category-menu-title-a" >鲜花类别</Link></h4>
                <ul>
                  <li className="category-menu-item"><Link onClick={() => { this.onSearch('kind', 'bouquet'); }} className="category-menu-item-a" >花束</Link></li>
                  <li className="category-menu-item"><Link onClick={() => { this.onSearch('kind', 'gift'); }} className="category-menu-item-a" >鲜花礼盒</Link></li>
                  <li className="category-menu-item"><Link onClick={() => { this.onSearch('kind', 'basket'); }} className="category-menu-item-a" >开业花篮</Link></li>
                  <li className="category-menu-item"><Link onClick={() => { this.onSearch('kind', 'table'); }} className="category-menu-item-a" >桌花</Link></li>
                  <li className="category-menu-item"><Link onClick={() => { this.onSearch('kind', 'death'); }} className="category-menu-item-a" >祭奠花篮</Link></li>
                </ul>
              </li>
              <li className="category-menu">
                <h4 className="category-menu-title"><Link className="category-menu-title-a" >鲜花价值</Link></h4>
                <ul>
                  <li className="category-menu-item"><Link onClick={() => { this.onSearch('price', 'oneToTwo'); }} className="category-menu-item-a" >100-200元</Link></li>
                  <li className="category-menu-item"><Link onClick={() => { this.onSearch('price', 'twoToThree'); }} className="category-menu-item-a" >200-300元</Link></li>
                  <li className="category-menu-item"><Link onClick={() => { this.onSearch('price', 'threeToFive'); }} className="category-menu-item-a" >300-500元</Link></li>
                  <li className="category-menu-item"><Link onClick={() => { this.onSearch('price', 'fiveToEight'); }} className="category-menu-item-a" >500-800元</Link></li>
                  <li className="category-menu-item"><Link onClick={() => { this.onSearch('price', 'aboveEight'); }} className="category-menu-item-a" >800元以上</Link></li>
                </ul>
              </li>
              <li className="category-menu">
                <h4 className="category-menu-title"><Link className="category-menu-title-a" >特别花束馆</Link></h4>
                <ul>
                  <li className="category-menu-item"><Link onClick={() => { this.onSearch('feature', 'cartoon'); }} className="category-menu-item-a" >卡通花束</Link></li>
                  <li className="category-menu-item"><Link onClick={() => { this.onSearch('feature', 'chocolate'); }} className="category-menu-item-a" >巧克力花束</Link></li>
                </ul>
              </li>
            </ul>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Category;
