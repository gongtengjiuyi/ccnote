import "./App.css";
import Header from "./components/topNav/topNav";
import Router from "./router/router";
import { EditOutlined } from "@ant-design/icons";
import { Navigate, useNavigate } from "react-router-dom";
import { BackTop } from 'antd';
function App() {
  let Navigator =useNavigate()
  function toedit(){
    Navigator('/write')
  }
  const writeicon = {
    fontSize: "1.5rem",
    color: "#08c",
    position: "fixed",
    bottom: "5rem",
    right: "3rem",
    backgroundColor:'#fff',
    borderRadius:'50%',
    width:'2rem',
    height:'2rem',
    lineHeight:'2rem'
  };
  return (
    <div className="App">
      <Header></Header>
      <div className="filler"></div>
      <Router />
      <EditOutlined
        style={writeicon}
        onClick={toedit}
      />
      <BackTop style={{right:'3rem'}} />
    </div>
  );
}

export default App;
