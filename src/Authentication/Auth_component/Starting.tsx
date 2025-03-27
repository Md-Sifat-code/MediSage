import React from "react";
import { FaStar } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import logo from "/Fatured icon.png"; // Ensure this path is correct
import { Link } from "react-router-dom";
import back from "/25332 1.png";
import Gradient1 from "/Gradient1.png";
import Gradient2 from "/Gradient2.png";

const Starting: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* 🌟 Background Gradient Wrapper */}
      <div className="absolute inset-0 w-full h-full overflow-hidden -z-10">
        <img
          src={Gradient1}
          alt="Top Gradient"
          className="absolute top-0 left-0 w-full h-auto object-cover"
        />
        <img
          src={Gradient2}
          alt="Bottom Gradient"
          className="absolute bottom-0 left-0 w-full h-auto object-cover"
        />
      </div>

      {/* 🌟 Main Content Grid */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 min-h-screen w-full z-10">
        {/* 🌟 Left Section with Background Image */}
        <div
          className="hidden md:flex flex-col w-full items-center justify-between text-center py-10 shadow-md bg-cover bg-center"
          style={{ backgroundImage: `url(${back})` }} // ✅ Background applied
        >
          <div className="w-full h-[50%] flex flex-col justify-end items-center">
            <div className="flex flex-row justify-center gap-6 items-center">
              <img src={logo} alt="Logo" className="w-[100px] h-[100px]" />
              <h1 className="text-[75px] plus font-bold text-black drop-shadow-md">
                MediSage
              </h1>
            </div>
            <p className="text-2xl mt-2 roboto font-semibold text-black drop-shadow-md">
              Connecting You <span className="text-[#5697F0]">to</span> Better
              Health
            </p>
          </div>
          <div className="mt-6 flex items-center bg-white bg-opacity-80 p-4 rounded-lg shadow-md">
            <FaStar className="text-blue-500 text-xl mr-3" />
            <p className="text-black font-medium">
              AI Powered Complete Healthcare System
            </p>
          </div>
        </div>

        {/* 🌟 Right Section */}
        <div className="flex flex-col justify-center items-center p-6 md:p-10 shadow-md bg-[#F8F5FE]">
          <h1 className="text-3xl roboto text-center font-bold text-black mb-6">
            Begin your journey <br /> to better health
          </h1>

          <div className="flex flex-col md:w-[80%] gap-4">
            <Link
              to={"/emailsignup"}
              className="flex items-center justify-center gap-2 bgprime text-white py-3 px-4 rounded-md font-medium hover:bg-blue-700 transition"
            >
              <MdEmail className="text-lg" />
              Sign up with Email
            </Link>
            <button className="flex items-center justify-center gap-2 bg-white text-gray-800 py-3 px-4 rounded-md font-medium hover:bg-gray-200 transition">
              <FcGoogle className="text-lg" />
              Sign in with Google
            </button>
            <button className="flex items-center justify-center gap-2 bg-black text-white py-3 px-4 rounded-md font-medium hover:bg-gray-900 transition">
              <BsApple className="text-lg" />
              Sign in with Apple
            </button>
            <button className="flex items-center justify-center gap-2 bg-[#087443] text-white py-3 px-4 rounded-md font-medium hover:bg-green-800 transition">
              <FiPhone className="text-lg" />
              Continue with Phone Number
            </button>
          </div>

          <p className="text-center text-black mt-6">
            Already have an account?{" "}
            <span className="text-blue-600 cursor-pointer hover:underline">
              Sign in
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Starting;
