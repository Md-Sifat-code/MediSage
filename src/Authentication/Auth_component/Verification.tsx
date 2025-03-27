import React, { useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import logo from "/Fatured icon.png"; // Ensure this path is correct
import back from "/25332 1.png";
import Gradient1 from "/Gradient1.png";
import Gradient2 from "/Gradient2.png";
const API_BASE_URL =
  import.meta.env.VITE_API_URL || "https://unisage.onrender.com";

const Verification: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email || "";

  const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, value: string) => {
    if (!/^\d?$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < 5) inputRefs.current[index + 1]?.focus();
  };

  const handleKeyDown = (
    index: number,
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerify = async () => {
    setLoading(true);
    setError("");
    const otpCode = otp.join("");

    try {
      const response = await fetch(
        `${API_BASE_URL}/User/validate?email=${email}&otp=${otpCode}`,
        {
          method: "POST",
        }
      );

      const textResponse = await response.text();
      if (!response.ok)
        throw new Error(textResponse || "OTP verification failed.");

      alert("OTP verified successfully!");
      navigate("/dashboard");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
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
      {/* Left Section (Same as Registration) */}
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

      {/* Right Section (Updated Verification Form) */}
      <div className="flex flex-col justify-center items-center p-10 shadow-md bg-[#F8F5FE]">
        <h1 className="text-3xl roboto text-center font-bold text-black mb-6">
          Verify Your Email
        </h1>

        <p className="text-center text-gray-700 mb-4">
          We sent a 6-digit code to <b>{email}</b>. Enter it below.
        </p>

        {/* OTP Input Fields */}
        <div className="flex justify-center space-x-2 mb-6">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => {
                if (el) inputRefs.current[index] = el;
              }}
              type="text"
              value={digit}
              maxLength={1}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className="w-12 h-12 border border-black rounded-md text-center text-lg font-semibold 
                focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          ))}
        </div>

        {error && (
          <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
        )}

        {/* Verify Button */}
        <button
          onClick={handleVerify}
          className="w-[35%] bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition duration-200"
          disabled={loading}
        >
          {loading ? "Verifying..." : "Verify"}
        </button>

        {/* Go Back Link */}
        <p className="text-center text-black mt-6">
          Didn't receive the code?{" "}
          <span className="text-blue-600 cursor-pointer hover:underline">
            Resend OTP
          </span>
        </p>
      </div>
    </div>
  );
};

export default Verification;
