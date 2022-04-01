import "./App.css";
import Header from "./components/topNav/topNav";
import Router from "./router/router";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="filler"></div>
      <Router />
    </div>
  );
}

export default App;
