import "./home.css";
import { Tabs } from "antd";
import List from "../../components/list/list";
import Hot from "../../components/hot/hot";
const { TabPane } = Tabs;
function home() {
  return (
    <div className="home">
      <div className="main">
        <div className="left">
          <Tabs defaultActiveKey="1">
            <TabPane tab="全部" key="all">
              <List tab="all"></List>
            </TabPane>
            <TabPane tab="精华" key="good">
              <List tab="good"></List>
            </TabPane>
            <TabPane tab="分享" key="share">
              <List tab="share"></List>
            </TabPane>
            <TabPane tab="问答" key="ask">
              <List tab="ask"></List>
            </TabPane>
            <TabPane tab="招聘" key="job">
              <List tab="job"></List>
            </TabPane>
          </Tabs>
        </div>
        <div className="right">
          <Hot></Hot>
        </div>
      </div>
    </div>
  );
}
export default home;
