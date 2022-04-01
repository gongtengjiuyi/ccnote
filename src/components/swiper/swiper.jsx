import { Carousel } from "antd";
import "./swiper.css";
function swiper() {
  const contentStyle = {
    height: "500px",
    color: "#fff",
    textAlign: "center",
    position: "relative",
  };
  return (
    <Carousel autoplay>
      <div>
        <div style={contentStyle}>
          <div
            className="bg"
            style={{ backgroundImage: `url(${require('../../assets/img/bg1.jpg')})` }}
          ></div>
          <img src={require("../../assets/img/bg1.jpg")} alt="" />
        </div>
      </div>
      <div>
        <div style={contentStyle}>
          <div
            className="bg"
            style={{ backgroundImage: `url(${require('../../assets/img/bg2.jpg')})` }}
          ></div>
          <img src={require("../../assets/img/bg2.jpg")} alt="" />
        </div>
      </div>
      <div>
        <div style={contentStyle}>
          <div
            className="bg"
            style={{ backgroundImage: `url(${require('../../assets/img/bg3.jpg')})` }}
          ></div>
          <img src={require("../../assets/img/bg3.jpg")} alt="" />
        </div>
      </div>
    </Carousel>
  );
}
export default swiper;
