import React from "react";
import NavBar from "../NavBar/NavBar";

const Layout = ({ children }) => {
  return (
    <div className="app bg-gray-100">
      <NavBar />
      <div className="bg-gray-100 border-b-2 border-transparent h-full">
        {children}
      </div>
    </div>
  );
};

export default Layout;
