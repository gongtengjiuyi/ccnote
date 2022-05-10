import "./App.css";
import Header from "./components/topNav/topNav";
import Router from "./router/router";
import { BackTop } from 'antd';
function App() {
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
      <BackTop style={{right:'3rem'}} />
    </div>
  );
}

export default App;
