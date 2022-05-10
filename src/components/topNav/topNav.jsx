import "../topNav/topNav.css";
import logo from "../../assets/img/logo5.png";
import { Input } from "antd";
import { Link } from "react-router-dom";
function header() {
  const { Search } = Input;
  const onSearch = (value) => console.log(value);
  return (
    <header>
      <div className="container">
        <div className="top_left">
          <div className="logo">
            <Link to={"/"}>
              <img className="logo" src={logo} alt="" />
            </Link>
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
        <div className="right">
          <div className="LR">
          </div>
        </div>
      </div>
    </header>
  );
}
export default header;
