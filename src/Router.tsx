import { Routes, Route } from "react-router-dom";
import Nav from "./pages/Nav/Nav";

const Router = () => {
  return (
    <Routes>
      <Route path="" element={<Nav />}></Route>
    </Routes>
  );
};

export default Router;
