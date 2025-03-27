import React from "react";
import {
  MdOutlineStar,
  MdSearch,
  MdNotifications,
  MdFavoriteBorder,
  MdSettings,
  MdOutlineSmartToy,
  MdEvent,
  MdAccessTime,
  MdRoom,
  MdLocationOn,
  MdChatBubbleOutline,
  MdMenuBook,
  MdQrCode,
  MdMessage,
  MdLocalHospital,
  MdMic,
  MdAttachFile,
  MdSend,
} from "react-icons/md";
import doctorImg from "/doctor.png"; // Sample doctor image

const Dashboard: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 min-h-screen p-6 bg-gray-50">
      {/* FIRST SECTION - GREETING & ACTIONS */}
      <div className="flex flex-row justify-between items-center bg-white shadow-md rounded-lg p-4">
        {/* Left - Greeting */}
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold text-gray-800">
            Good Morning, Sajid
          </h1>
          <MdOutlineStar className="text-yellow-500 text-2xl" />
        </div>

        {/* Right - Actions */}
        <div className="flex items-center gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="input input-bordered w-64 pl-10"
            />
            <MdSearch className="absolute left-3 top-3 text-gray-500 text-lg" />
          </div>
          <MdNotifications className="text-2xl text-gray-600 cursor-pointer hover:text-gray-800" />
          <MdFavoriteBorder className="text-2xl text-gray-600 cursor-pointer hover:text-gray-800" />
          <MdSettings className="text-2xl text-gray-600 cursor-pointer hover:text-gray-800" />
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition">
            <MdOutlineSmartToy className="text-xl" />
            Consult AI Assistant
          </button>
        </div>
      </div>

      {/* SECOND SECTION - APPOINTMENT DETAILS */}
      <div className="flex flex-row justify-between items-center bg-white shadow-md rounded-lg p-4">
        {/* Doctor Info */}
        <div className="flex items-center gap-4">
          <img
            src={doctorImg}
            alt="Doctor"
            className="w-16 h-16 rounded-full shadow"
          />
          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              Dr. James Carter
            </h2>
            <p className="text-sm text-gray-500">Cardiologist</p>
          </div>
        </div>

        {/* Appointment Details */}
        <div className="flex items-center gap-6 text-gray-700">
          <div className="flex items-center gap-2">
            <MdEvent className="text-xl" />
            <span>Thu, 12 April, 2025</span>
          </div>
          <div className="flex items-center gap-2">
            <MdAccessTime className="text-xl" />
            <span>Time: 11:00 AM</span>
          </div>
          <div className="flex items-center gap-2">
            <MdRoom className="text-xl" />
            <span>Cabin No: 512</span>
          </div>
          <div className="flex items-center gap-2">
            <MdLocationOn className="text-xl" />
            <span>United Hospital, Dhaka</span>
          </div>
        </div>

        {/* Chat Icon */}
        <MdChatBubbleOutline className="text-2xl text-blue-600 cursor-pointer hover:text-blue-800" />
      </div>

      {/* THIRD SECTION - FEATURED CARDS */}
      <div className="grid grid-cols-4 gap-4">
        {/* Card 1 */}
        <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition cursor-pointer">
          <MdMenuBook className="text-3xl text-blue-600" />
          <p className="text-lg font-semibold mt-2">Book an Appointment</p>
          <p className="text-gray-500 text-sm">Find a Doctor</p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition cursor-pointer">
          <MdQrCode className="text-3xl text-blue-600" />
          <p className="text-lg font-semibold mt-2">Appointment with QR</p>
          <p className="text-gray-500 text-sm">Queuing without the hassle</p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition cursor-pointer">
          <MdMessage className="text-3xl text-blue-600" />
          <p className="text-lg font-semibold mt-2">Request Consultation</p>
          <p className="text-gray-500 text-sm">Talk to a Specialist</p>
        </div>

        {/* Card 4 */}
        <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition cursor-pointer">
          <MdLocalHospital className="text-3xl text-blue-600" />
          <p className="text-lg font-semibold mt-2">Emergency Ambulance</p>
          <p className="text-gray-500 text-sm">Call Nearby Ambulance</p>
        </div>
      </div>

      {/* FOURTH SECTION - AI CHAT SYSTEM */}
      <div className="bg-white shadow-md rounded-lg p-6 min-h-[60vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center gap-2">
          <MdOutlineStar className="text-blue-600 text-2xl" />
          <h1 className="text-2xl font-bold text-gray-800">
            Wellness Assistant
          </h1>
          <span className="px-3 py-1 bg-blue-200 text-blue-600 rounded">
            AI
          </span>
        </div>

        {/* Messages Container */}
        <div className="flex flex-col flex-grow mt-4 space-y-2 overflow-y-auto">
          <div className="chat chat-start">
            <div className="chat-bubble bg-gray-200 text-black">
              Hello! How can I assist you today?
            </div>
          </div>
          <div className="chat chat-end">
            <div className="chat-bubble bg-blue-600 text-white">
              Can you help me book an appointment?
            </div>
          </div>
        </div>

        {/* Input Section */}
        <div className="flex items-center gap-2 mt-4">
          <MdMic className="text-2xl text-gray-600 cursor-pointer" />
          <input
            type="text"
            placeholder="Type a message..."
            className="input input-bordered flex-grow"
          />
          <MdAttachFile className="text-2xl text-gray-600 cursor-pointer" />
          <MdSend className="text-2xl text-blue-600 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
