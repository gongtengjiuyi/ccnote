import Home from "../view/home/home";
import Detail from "../view/detail/detail";
import { Routes, Route } from "react-router-dom";
function router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail/:id" element={<Detail />} />
    </Routes>
  );
}
export default router