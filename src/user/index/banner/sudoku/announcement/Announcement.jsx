/**
 * 鲜花销售主页公告栏
 * Created by tianrenjie on 2018/3/28
 */
import React, { PropTypes } from 'react';
import { Tabs } from 'antd';
import _ from 'lodash';
import { Link } from 'react-router';
import './Announcement.less';

const TabPane = Tabs.TabPane;
class Announcement extends React.Component {
  static propTypes = {};
  callback = (key) => {
  };
  render() {
    // 测试数据
    const information = [{
      _id: 'sadasaf1231231',
      title: '什么花比较好？',
    }, {
      _id: 'sadasaf1231231',
      title: '怎么进行花的购买？一步一步来教你',
    }, {
      _id: 'sadasaf1231231',
      title: '江苏哪家花店好？',
    }, {
      _id: 'sadasaf1231231',
      title: '贵州哪家花店好？',
    }, {
      _id: 'sadasaf1231231',
      title: '浙江哪家花店好？去浙江怎么买到好花',
    }];
    const says = [{
      _id: 'sadasaf1231231',
      title: '玫瑰花的花语？',
    }, {
      _id: 'sadasaf1231231',
      title: '白百何的花语？',
    }];
    const board = [{
      _id: 'sadasaf1231231',
      title: '最近的开业时间',
    }, {
      _id: 'sadasaf1231231',
      title: '用户注意事项',
    }];

    // 遍历数据，生成jsx表达式
    const inforamtionList = _.map(information, (item, index) => {
      return (<li className="announcement-ul-li" key={index}><Link className="announcement-ul-li-a" to={`/test/${item._id}`}>{item.title}</Link></li>);
    });
    const saysList = _.map(says, (item, index) => {
      return (<li className="announcement-ul-li" key={index}><Link className="announcement-ul-li-a" to={`/test/${item._id}`}>{item.title}</Link></li>);
    });
    const boardList = _.map(board, (item, index) => {
      return (<li className="announcement-ul-li" key={index}><Link className="announcement-ul-li-a" to={`/test/${item._id}`}>{item.title}</Link></li>);
    });
    return (
      <div className="announcement">
        <Tabs defaultActiveKey="1" onChange={this.callback} size="small">
          <TabPane tab="资讯" key="1"><ul className="announcement-ul" key="information">{inforamtionList}</ul></TabPane>
          <TabPane tab="花语" key="2"><ul className="announcement-ul" key="says">{saysList}</ul></TabPane>
          <TabPane tab="公告" key="3"><ul className="announcement-ul" key="board">{boardList}</ul></TabPane>
        </Tabs>
      </div>
    );
  }
}

export default Announcement;
