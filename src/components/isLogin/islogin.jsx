import { clear } from "@testing-library/user-event/dist/clear";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./islogin.css";
function Islogin() {
  let [show, useshow] = useState(false);
  useEffect(() => {
    if (sessionStorage.getItem("phone")) {
      useshow(true);
    } else {
      useshow(false);
    }
  }, []);
  function quit(){
     sessionStorage.clear()
  }
  if (show) {
    return (
      <div>
        <Link to={"/"}>
          <img
            className="avatar"
            src={require("../../assets/img/defaultavatar.jpg")}
            alt=""
          />
        </Link>
        <span onClick={quit}>退出登录</span>
      </div>
    );
  } else {
    return <Link to={"/login"}>注册/登录</Link>;
  }
}
export default Islogin;
// 登陆的状态显示
