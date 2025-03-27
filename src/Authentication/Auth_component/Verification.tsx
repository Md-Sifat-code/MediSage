import React, { useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import logo from "/logo2.png"; // Ensure this path is correct

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
      {/* Left Section (Same as Registration) */}
      <div className="md:flex hidden  flex-col w-full items-center justify-between text-center py-10 shadow-md">
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

      {/* Right Section (Updated Verification Form) */}
      <div className="flex flex-col justify-center items-center p-10 shadow-md bg-gradient-to-br from-blue-200 via-blue-100 to-blue-50">
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
