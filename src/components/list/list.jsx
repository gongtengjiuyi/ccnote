import { List, Avatar, Space } from "antd";
import React, { useState, useEffect } from "react";
import { MessageOutlined, LikeOutlined, StarOutlined } from "@ant-design/icons";
import "./list.css";
import { Link } from "react-router-dom";
function Lists(props) {
  let [lists, setlists] = useState([]);
  let [load, setload] = useState(true);
  useEffect(() => {
    fetch("https://cnodejs.org/api/v1/topics?tab=" + props.tab)
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        setlists((lists = [...res.data]));
        setload(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  function formatTime(val) {
    var time = new Date(val)
    return (time.getFullYear()) +
      " 年 " +
      (time.getMonth() + 1) +
      " 月 " +
      time.getDate() +
      " 日 "
  }
  const IconText = ({ icon, text }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );
  return (
    <List
      loading={load}
      itemLayout="vertical"
      dataSource={lists}
      pagination={{
        pageSize: 10,
      }}
      renderItem={(item) => (
        <List.Item
          extra={<span>{formatTime(item.create_at)}</span>}
          actions={[
            <IconText
              icon={LikeOutlined}
              text={item.visit_count}
              key="list-vertical-like-o"
            />,
            <IconText
              icon={MessageOutlined}
              text={item.reply_count}
              key="list-vertical-message"
            />,
          ]}
        >
          <List.Item.Meta
            avatar={
              <Link to={"/mine"}>
                <Avatar src={item.author.avatar_url} />
              </Link>
            }
            title={
              <Link to={"/detail/" + item.id}>{item.author.loginname}</Link>
            }
            description={
              <Link to={"/detail/" + item.id}>
                <div>{item.title}</div>
              </Link>
            }
          />
        </List.Item>
      )}
    />
  );
}

export default Lists;
