import React from "react";
import Leftside from "../Dashboard/Leftside";
import { Outlet } from "react-router-dom";

const Dashboard_Layout: React.FC = () => {
  return (
    <section>
      <div className="grid grid-cols-12">
        <div className="col-span-2">
          <Leftside />
        </div>
        <div className="col-span-10">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default Dashboard_Layout;
