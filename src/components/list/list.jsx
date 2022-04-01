import { List, Avatar, Space } from "antd";
import React, { useState, useEffect } from "react";
import { MessageOutlined, LikeOutlined, StarOutlined } from "@ant-design/icons";
import "./list.css";
import { Link } from "react-router-dom";
function Lists(props) {
  let [lists, setlists] = useState([]);
  useEffect(() => {
    fetch("https://cnodejs.org/api/v1/topics?tab=" + props.tab)
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        setlists((lists = [...res.data]));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const IconText = ({ icon, text }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );
  return (
    <List
    itemLayout="vertical"
      dataSource={lists}
      pagination={{
        pageSize: 10,
      }}
      renderItem={(item) => (
        <List.Item
          extra={<span>{item.last_reply_at}</span>}
          actions={[
            <IconText
              icon={StarOutlined}
              text="156"
              key="list-vertical-star-o"
            />,
            <IconText
              icon={LikeOutlined}
              text="156"
              key="list-vertical-like-o"
            />,
            <IconText
              icon={MessageOutlined}
              text="2"
              key="list-vertical-message"
            />,
          ]}
        >
          <List.Item.Meta
            avatar={<Avatar src={item.author.avatar_url} />}
            title={
              <Link to={"/detail/" + item.id}>{item.author.loginname}</Link>
            }
            description={item.title}
          />
        </List.Item>
      )}
    />
  );
}

export default Lists;
