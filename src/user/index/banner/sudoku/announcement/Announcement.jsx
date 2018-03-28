/**
 * 鲜花销售主页公告栏
 * Created by tianrenjie on 2018/3/28
 */
import React, { PropTypes } from 'react';
import { Tabs } from 'antd';
import './Announcement.less';

const TabPane = Tabs.TabPane;
class Announcement extends React.Component {
  static propTypes = {};
  callback = (key) => {
  };
  render() {
    return (
      <div className="announcement">
        <Tabs defaultActiveKey="1" onChange={this.callback} size="small">
          <TabPane tab="资讯" key="1">Content of Tab Pane 1</TabPane>
          <TabPane tab="花语" key="2">Content of Tab Pane 2</TabPane>
          <TabPane tab="公告" key="3">Content of Tab Pane 3</TabPane>
        </Tabs>
      </div>
    );
  }
}

export default Announcement;
