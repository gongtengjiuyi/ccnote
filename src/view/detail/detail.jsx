import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Hot from "../../components/hot/hot"
import "./detail.css";

function Detail() {
  const params = useParams();
  let [content, setcontent] = useState([]);
  let [show,setshow]=useState(false)

  useEffect(() => {
    fetch("https://cnodejs.org/api/v1/topic/" + params.id)
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        setcontent((content = { ...res.data }));
        setshow(show=true) 
        console.log(show)
      })
      .catch((err) => {
        console.log(err);
      });
  }, [show]);
  function formatTime(val) {
    var time = new Date(val)
    return (time.getFullYear()) +
      " 年 " +
      (time.getMonth() + 1) +
      " 月 " +
      time.getDate() +
      " 日 "
  };
  if (show){
    return (
      <div className="detail">
        <div className="left">
          <div className="topic_header">
            <div className="title">{content.title}</div>
            <div className="status">
              <span>·发布于{formatTime(content.create_at)}</span>
              <span>·作者{content.author.loginname}</span>
              <span>·{content.visit_count}次浏览</span>
              <span>·来自分享</span>
            </div>
          </div>
          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: content.content }}
          ></div>
        </div>
        <div className="right">
          <Hot></Hot>
        </div>
      </div>
    );
  }else{
    return <p>loading.....</p>
  }
}  
export default Detail;
