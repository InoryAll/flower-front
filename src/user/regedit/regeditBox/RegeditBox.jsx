/**
 * 鲜花销售注册页主体
 * Created by tianrenjie on 2018/5/3
 */
import React, { PropTypes } from 'react';
import { Row, Col, Tabs } from 'antd';
import './RegeditBox.less';

const TabPane = Tabs.TabPane;
class RegeditBox extends React.Component {
  static propTypes = {};
  handleTabClick = (key) => {
    console.log(key);
  };
  render() {
    return (
      <div className="regeditbox">
        <Row>
          <Col span={20} offset={2}>
            <div className="regeditbox-dialog">
              <form>
                <Row>
                  <Col span={16}>
                    <div className="regeditbox-dialog-left">
                      <Tabs defaultActiveKey="1" onChange={this.handleTabClick}>
                        <TabPane tab="账号注册" key="1">Content of Tab Pane 1</TabPane>
                        <TabPane tab="手机注册" key="2">Content of Tab Pane 2</TabPane>
                      </Tabs>
                    </div>
                  </Col>
                  <Col span={8}>
                    <div className="regeditbox-dialog-right"></div>
                  </Col>
                </Row>
              </form>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default RegeditBox;
