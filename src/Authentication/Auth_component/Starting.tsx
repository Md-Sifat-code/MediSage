import React from "react";
import { FaStar } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import logo from "/logo2.png"; // Ensure this path is correct

const Starting: React.FC = () => {
  return (
    <div className="grid grid-cols-2 min-h-screen">
      {/* Left Section with Gradient */}
      <div className="flex flex-col w-full items-center justify-between text-center py-10 shadow-md ">
        <div className="w-full h-[50%] flex flex-col justify-end items-center">
          <img src={logo} alt="Logo" className="w-[300px] h-[130px]" />
          <p className="text-lg roboto font-semibold text-gray-700">
            Connecting You <span className="text-[#5697F0]">to</span> Better
            Health
          </p>
        </div>
        <div className="mt-6 flex items-center bg-blue-100 p-4 rounded-lg shadow-md">
          <FaStar className="text-blue-500 text-xl mr-3" />
          <p className="text-black font-medium">
            AI Powered Complete Healthcare System
          </p>
        </div>
      </div>

      {/* Right Section with Same Gradient */}
      <div className="flex flex-col justify-center items-center p-10 shadow-md bg-gradient-to-br from-blue-300 via-blue-200 to-blue-50">
        <h1 className="text-3xl roboto text-center font-bold text-black mb-6">
          Begin your journey <br /> to better health
        </h1>

        <div className="flex flex-col md:w-[80%] gap-4">
          <button className="flex items-center justify-center gap-2 bgprime text-white py-3 px-4 rounded-md font-medium hover:bg-blue-700 transition">
            <MdEmail className="text-lg" />
            Sign up with Email
          </button>
          <button className="flex items-center justify-center gap-2 bg-white text-gray-800 py-3 px-4 rounded-md font-medium hover:bg-gray-200 transition">
            <FcGoogle className="text-lg" />
            Sign in with Google
          </button>
          <button className="flex items-center justify-center gap-2 bg-black text-white py-3 px-4 rounded-md font-medium hover:bg-gray-200 transition">
            <BsApple className="text-lg" />
            Sign in with Apple
          </button>
          <button className="flex items-center justify-center gap-2 bg-[#087443] text-white py-3 px-4 rounded-md font-medium hover:bg-gray-200 transition">
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
  );
};

export default Starting;
