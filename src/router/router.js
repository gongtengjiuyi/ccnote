import Home from "../view/home/home";
import Detail from "../view/detail/detail";
import { Routes, Route } from "react-router-dom";
import Login from "../view/login/login"
import Register from "../view/register/register";
import Write from "../view/write/write";
function router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail/:id" element={<Detail />} />
      <Route path="/login" element={< Login/>} />
      <Route path="/register" element={< Register/>} />
      <Route path="/write" element={< Write/>} />
    </Routes>
  );
}
export default router