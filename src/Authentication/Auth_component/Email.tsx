import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import logo from "/Fatured icon.png"; // Ensure this path is correct
import { Link } from "react-router-dom";
import back from "/25332 1.png";
import Gradient1 from "/Gradient1.png";
import Gradient2 from "/Gradient2.png";
const BASE_URL =
  import.meta.env.VITE_BASE_URL || "https://unisage.onrender.com";

const Email: React.FC = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [passwordStrength, setPasswordStrength] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Password Strength Check
    if (name === "password") {
      checkPasswordStrength(value);
    }
  };

  const checkPasswordStrength = (password: string) => {
    const strongRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (password.length === 0) setPasswordStrength("");
    else if (strongRegex.test(password)) setPasswordStrength("Strong");
    else if (password.length >= 6) setPasswordStrength("Medium");
    else setPasswordStrength("Weak");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { username, email, password } = formData;
    if (!username || !email || !password) {
      alert("Please fill all fields");
      return;
    }

    const form = new FormData();
    form.append("username", username);
    form.append("email", email);
    form.append("password", password);

    try {
      const response = await fetch(`${BASE_URL}/User/add`, {
        method: "POST",
        body: form,
      });

      // ✅ Check if response is JSON or plain text
      const contentType = response.headers.get("content-type");
      let result;
      if (contentType && contentType.includes("application/json")) {
        result = await response.json();
      } else {
        result = await response.text(); // Handle plain text response
      }

      if (response.ok) {
        navigate("/varify", { state: { email } }); // Pass email to the verification page
      } else {
        alert(result.message || result || "Something went wrong");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Network error. Try again.");
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
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
      {/* Left Section (Unchanged) */}
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

      {/* Right Section (Updated) */}
      <div className="flex flex-col justify-center items-center p-10 shadow-md bg-[#F8F5FE]">
        <h1 className="text-3xl roboto text-center font-bold text-black mb-6">
          Register
        </h1>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-[90%] md:w-[50%] gap-4"
        >
          {/* Username Input */}
          <div className="flex flex-col">
            <label
              htmlFor="username"
              className="text-sm font-medium text-gray-700 mb-1"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter your username"
              className="w-full px-4 py-3 rounded-md border bg-white border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-50"
              required
            />
          </div>

          {/* Email Input */}
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-md border bg-white border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
              required
            />
          </div>

          {/* Password Input */}
          <div className="flex flex-col">
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full px-4 py-3 rounded-md border bg-white border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
              required
            />
            {/* Password Strength Indicator */}
            <p
              className={`text-sm font-medium mt-1 ${
                passwordStrength === "Strong"
                  ? "text-green-600"
                  : passwordStrength === "Medium"
                  ? "text-yellow-500"
                  : "text-red-500"
              }`}
            >
              {passwordStrength && `Password Strength: ${passwordStrength}`}
            </p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-blue-800 text-white font-bold py-3 px-4 rounded-md  hover:bg-blue-700 transition"
          >
            Sign up
          </button>
        </form>

        <p className="text-center text-black mt-6">
          Already have an account?{" "}
          <Link
            to="/signin"
            className="text-blue-600 cursor-pointer hover:underline"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Email;
//oay
