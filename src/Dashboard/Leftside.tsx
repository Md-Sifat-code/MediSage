import React, { useState } from "react";
import logo from "/Fatured icon.png";
import {
  MdDashboard,
  MdEvent,
  MdMedicalServices,
  MdHistory,
  MdAssignment,
  MdHealthAndSafety,
  MdHelp,
  MdSettings,
} from "react-icons/md";

const Leftside: React.FC = () => {
  const [active, setActive] = useState("Dashboard");

  return (
    <div className="flex flex-col h-screen w-full bg-white text-black p-4">
      {/* Logo Section */}
      <div className="flex flex-row justify-center gap-2 items-center">
        <img src={logo} alt="Logo" className="w-[50px] h-[50px]" />
        <h1 className="text-2xl font-bold text-black drop-shadow-md">
          MediSage
        </h1>
      </div>

      {/* Middle Section - Primary Menu */}
      <div className="flex flex-col flex-grow mt-4">
        <h2 className="text-black text-sm uppercase font-semibold mb-2 px-4">
          Primary Menu
        </h2>
        <nav className="space-y-2">
          <button
            className={`flex items-center space-x-3 px-4 py-2 w-full rounded-md text-left transition ${
              active === "Dashboard"
                ? "bg-[#F5F5F5] border-l-4 border-blue-600 text-blue-500 font-bold"
                : "text-black hover:bg-gray-200"
            }`}
            onClick={() => setActive("Dashboard")}
          >
            <MdDashboard className="text-xl" />
            <span className="text-sm">Dashboard</span>
          </button>

          <button
            className={`flex items-center space-x-3 px-4 py-2 w-full rounded-md text-left transition ${
              active === "Wellness Assistant"
                ? "bg-[#F5F5F5] border-l-4 border-blue-600 text-blue-500 font-bold"
                : "text-black hover:bg-gray-200"
            }`}
            onClick={() => setActive("Wellness Assistant")}
          >
            <MdHealthAndSafety className="text-xl" />
            <span className="text-sm flex items-center">
              Wellness Assistant
              <span className="py-1 ml-2 bg-blue-200 px-2 font-bold text-blue-700 rounded">
                AI
              </span>
            </span>
          </button>

          <button
            className={`flex items-center space-x-3 px-4 py-2 w-full rounded-md text-left transition ${
              active === "Appointments"
                ? "bg-[#F5F5F5] border-l-4 border-blue-600 text-blue-500 font-bold"
                : "text-black hover:bg-gray-200"
            }`}
            onClick={() => setActive("Appointments")}
          >
            <MdEvent className="text-xl" />
            <span className="text-sm">Appointments</span>
          </button>

          <button
            className={`flex items-center space-x-3 px-4 py-2 w-full rounded-md text-left transition ${
              active === "Prescription"
                ? "bg-[#F5F5F5] border-l-4 border-blue-600 text-blue-500 font-bold"
                : "text-black hover:bg-gray-200"
            }`}
            onClick={() => setActive("Prescription")}
          >
            <MdAssignment className="text-xl" />
            <span className="text-sm">Prescription</span>
          </button>

          <button
            className={`flex items-center space-x-3 px-4 py-2 w-full rounded-md text-left transition ${
              active === "Medical Tests"
                ? "bg-[#F5F5F5] border-l-4 border-blue-600 text-blue-500 font-bold"
                : "text-black hover:bg-gray-200"
            }`}
            onClick={() => setActive("Medical Tests")}
          >
            <MdMedicalServices className="text-xl" />
            <span className="text-sm">Medical Tests</span>
          </button>

          <button
            className={`flex items-center space-x-3 px-4 py-2 w-full rounded-md text-left transition ${
              active === "Health Records"
                ? "bg-[#F5F5F5] border-l-4 border-blue-600 text-blue-500 font-bold"
                : "text-black hover:bg-gray-200"
            }`}
            onClick={() => setActive("Health Records")}
          >
            <MdHistory className="text-xl" />
            <span className="text-sm">Health Records</span>
          </button>
        </nav>
      </div>

      {/* Bottom Section - Settings */}
      <div className="mt-auto border-t border-gray-300 pt-4">
        <h2 className="text-gray-600 text-sm uppercase font-semibold mb-2 px-4">
          Settings
        </h2>
        <nav className="space-y-2">
          <button
            className={`flex items-center space-x-3 px-4 py-2 w-full rounded-md text-left transition ${
              active === "Help"
                ? "bg-[#F5F5F5] border-l-4 border-blue-600 text-blue-500 font-bold"
                : "text-black hover:bg-gray-200"
            }`}
            onClick={() => setActive("Help")}
          >
            <MdHelp className="text-xl" />
            <span className="text-sm">Help</span>
          </button>

          <button
            className={`flex items-center space-x-3 px-4 py-2 w-full rounded-md text-left transition ${
              active === "Profile Settings"
                ? "bg-[#F5F5F5] border-l-4 border-blue-600 text-blue-500 font-bold"
                : "text-black hover:bg-gray-200"
            }`}
            onClick={() => setActive("Profile Settings")}
          >
            <MdSettings className="text-xl" />
            <span className="text-sm">Profile Settings</span>
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Leftside;
