/**
 * 鲜花销售主页特征筛选器
 * Created by tianrenjie on 2018/3/26
 */
import React, { PropTypes } from 'react';
import { Row, Col, Icon } from 'antd';
import { Link } from 'react-router';
import './Category.less';

class Category extends React.Component {
  render() {
    return (
      <div className="category">
        <Row>
          <Col>
            <Icon type="bars" className="category-logo" />
            <Link to="" className="category-title">所有商品分类</Link>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Category;
