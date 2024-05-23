import Navbar from "../src/Navbar/Navbar";
import Home from "../src/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/portfolio" element={<Portfolio />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
