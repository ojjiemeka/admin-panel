import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import "./styles/css/global.css";

import Dashboard from "./pages/dashboard/Dashboard";
import Create from "./pages/createUser/create";
import Header from "./pages/modules/header";
import SideNav from "./pages/modules/sideNav";
import TitleBar from "./pages/modules/titleBar";
import Footer from "./pages/modules/footer";

const Main = () => {
  return (
    <>
  
        <Header />
        <SideNav />
        <TitleBar/>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/create" element={<Create />} />
          </Routes>

        <Footer />
    </>
  );
};

export default Main;
