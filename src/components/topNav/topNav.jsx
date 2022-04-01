import "../topNav/topNav.css";
import logo from "../../assets/img/logo5.png";
import { Input } from "antd";
function header() {
  const { Search } = Input;
  const onSearch = (value) => console.log(value);
  const list = ["首页", "新手入门", "API", "关于", "注册", "登录"];
  return (
    <header>
      <div className="container">
        <div className="top_left">
          <div className="logo">
            <img className="logo" src={logo} alt="" />
          </div>
          <div className="search">
            <Search
              placeholder="input search text"
              onSearch={onSearch}
              style={{ width: 200 }}
              loading={false}
            />
          </div>
        </div>
        <ul className="right">
          {list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </header>
  );
}
export default header;
