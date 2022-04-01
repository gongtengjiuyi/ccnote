import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./detail.css";
function Detail() {
  const params = useParams();
  let [content, setcontent] = useState([]);
  useEffect(() => {
    fetch("https://cnodejs.org/api/v1/topic/" + params.id)
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        setcontent((content = { ...res.data }));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="detail">
      <div className="left">
        <div className="topic_header">
          <div className="title">{content.title}</div>
          <div className="status">
            <span>·发布于两个月前</span>
            <span>·作者hello</span>
            <span>·47182 次浏览</span>
            <span>·来自分享</span>
          </div>
        </div>
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: content.content }}
        ></div>
      </div>
      <div className="right">
        
      </div>
    </div>
  );
}
export default Detail;
