import React from "react";
import { Outlet } from "react-router-dom";

const Auth_Layout: React.FC = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Auth_Layout;
