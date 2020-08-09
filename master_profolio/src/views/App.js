import React from "react";
import logo from "../assets/images/logo.svg";
import "../assets/css/App.css";
import SideBar from "../components/sideBar/sidebar";
import MainNavBar from "../components/mainNavBar/mainnavbar";

function App() {
  return (
    <div className="container-fluid">
      <div className="flex-x1-nowrap row">
        <MainNavBar />
        <SideBar />
      </div>
    </div>
  );
}

export default App;
